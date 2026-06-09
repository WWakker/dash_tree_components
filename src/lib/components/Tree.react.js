import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Node from './Node.react';
import '../styles.css';

const nodeMatches = (node, term) => {
    if (node.name.toLowerCase().includes(term)) return true;
    if (node.children) return node.children.some(c => nodeMatches(c, term));
    return false;
};

const collectFolderIds = (nodes, out) => {
    for (const n of nodes) {
        if (n.children) {
            out.add(n.id);
            collectFolderIds(n.children, out);
        }
    }
    return out;
};

const findPathToNode = (nodes, targetId, trail) => {
    for (const n of nodes) {
        const path = trail.concat(n.id);
        if (n.id === targetId) return path;
        if (n.children) {
            const found = findPathToNode(n.children, targetId, path);
            if (found) return found;
        }
    }
    return null;
};

const setsEqual = (a, b) => {
    if (a.size !== b.length) return false;
    for (const id of b) if (!a.has(id)) return false;
    return true;
};

/**
 * Tree is a Dash component that renders a hierarchical tree from a list of
 * dictionaries. Folder expand/collapse is animated with CSS transitions.
 * Selection is exposed to Dash callbacks via `selected_id`, expanded folders
 * via `expanded_ids`. Implements the WAI-ARIA `tree` pattern with full
 * keyboard navigation.
 */
const Tree = (props) => {
    const [term, setTerm] = useState('');

    // Single source of truth for which folders are open. Initialized from
    // `expanded_ids` if the caller provided one, otherwise from
    // `open_by_default` walked over the data.
    const [expandedSet, setExpandedSet] = useState(() => {
        if (props.expanded_ids != null) return new Set(props.expanded_ids);
        if (!props.open_by_default) return new Set();
        return collectFolderIds(props.data || [], new Set());
    });

    const [activeId, setActiveId] = useState(() =>
        props.data && props.data.length > 0 ? props.data[0].id : null
    );

    const rowRefs = useRef({});
    const didInit = useRef(false);

    const search = term.trim().toLowerCase();

    // Sync external `expanded_ids` prop changes into internal state, but only
    // when the content actually differs (so our own setProps echo doesn't
    // cause a re-render loop).
    useEffect(() => {
        if (props.expanded_ids == null) return;
        if (setsEqual(expandedSet, props.expanded_ids)) return;
        setExpandedSet(new Set(props.expanded_ids));
    }, [props.expanded_ids]); // eslint-disable-line react-hooks/exhaustive-deps

    // On mount, push the initial expanded set to Dash if the caller didn't
    // specify one — so callbacks reading `expanded_ids` see a real value.
    useEffect(() => {
        if (didInit.current) return;
        didInit.current = true;
        if (props.expanded_ids == null && props.setProps) {
            props.setProps({ expanded_ids: [...expandedSet] });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const isOpen = useCallback((id) => expandedSet.has(id), [expandedSet]);

    const toggleOpen = useCallback((id) => {
        const next = new Set(expandedSet);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        setExpandedSet(next);
        if (props.setProps) {
            props.setProps({ expanded_ids: [...next] });
        }
    }, [expandedSet, props]);

    const visibleRows = useMemo(() => {
        const list = [];
        const walk = (nodes, level, parentId) => {
            for (const n of nodes) {
                if (search && !nodeMatches(n, search)) continue;
                const isLeaf = !n.children;
                list.push({
                    id: n.id,
                    level,
                    parentId,
                    isLeaf,
                    hasChildren: !isLeaf && n.children.length > 0,
                    node: n,
                });
                const expanded = search ? true : isOpen(n.id);
                if (!isLeaf && expanded) {
                    walk(n.children, level + 1, n.id);
                }
            }
        };
        walk(props.data || [], 0, null);
        return list;
    }, [props.data, expandedSet, search, isOpen]);

    // If activeId is no longer in the visible list (e.g. search filtered it
    // out, or its parent was collapsed externally), fall back to the first
    // visible row. Don't take focus.
    useEffect(() => {
        if (visibleRows.length === 0) return;
        if (!visibleRows.some(r => r.id === activeId)) {
            setActiveId(visibleRows[0].id);
        }
    }, [visibleRows, activeId]);

    // When `selected_id` changes (from Dash or from a user click), make sure
    // every ancestor folder is open and the row is scrolled into view.
    useEffect(() => {
        if (!props.selected_id) return;
        const path = findPathToNode(props.data || [], props.selected_id, []);
        if (!path) return;
        const ancestors = path.slice(0, -1);
        if (ancestors.length > 0) {
            const needsExpand = ancestors.some(id => !expandedSet.has(id));
            if (needsExpand) {
                const next = new Set(expandedSet);
                for (const id of ancestors) next.add(id);
                setExpandedSet(next);
                if (props.setProps) props.setProps({ expanded_ids: [...next] });
            }
        }
        // Defer until after the next paint so any just-expanded rows are in
        // their final layout position before we ask the browser to scroll.
        requestAnimationFrame(() => {
            const el = rowRefs.current[props.selected_id];
            if (el && el.scrollIntoView) {
                el.scrollIntoView({ block: 'nearest' });
            }
        });
    }, [props.selected_id, props.data]); // eslint-disable-line react-hooks/exhaustive-deps

    const focusRow = useCallback((id) => {
        setActiveId(id);
        const el = rowRefs.current[id];
        if (el) el.focus();
        // When the click came from a leaf <a href="#foo">, the browser's
        // default fragment-navigation algorithm runs AFTER React handlers
        // and moves focus to the hash target — overriding the .focus() we
        // just did. Re-assert focus on the next frame so arrow navigation
        // keeps working from the tree.
        requestAnimationFrame(() => {
            const el2 = rowRefs.current[id];
            if (el2 && document.activeElement !== el2) el2.focus();
        });
    }, []);

    const registerRef = useCallback((id, el) => {
        if (el) rowRefs.current[id] = el;
        else delete rowRefs.current[id];
    }, []);

    const handleSelect = useCallback((id) => {
        if (props.setProps && id !== props.selected_id) {
            props.setProps({ selected_id: id });
        }
    }, [props]);

    const handleKeyDown = useCallback((e, node) => {
        const idx = visibleRows.findIndex(r => r.id === node.id);
        if (idx === -1) return;
        const row = visibleRows[idx];
        const open = isOpen(node.id);
        let nextId = null;

        switch (e.key) {
            case 'ArrowDown':
                if (idx < visibleRows.length - 1) nextId = visibleRows[idx + 1].id;
                break;
            case 'ArrowUp':
                if (idx > 0) nextId = visibleRows[idx - 1].id;
                break;
            case 'ArrowRight':
                if (row.hasChildren && !open) {
                    toggleOpen(node.id);
                } else if (row.hasChildren && open && idx < visibleRows.length - 1) {
                    nextId = visibleRows[idx + 1].id;
                }
                break;
            case 'ArrowLeft':
                if (row.hasChildren && open) {
                    toggleOpen(node.id);
                } else if (row.parentId) {
                    nextId = row.parentId;
                }
                break;
            case 'Home':
                if (visibleRows.length > 0) nextId = visibleRows[0].id;
                break;
            case 'End':
                if (visibleRows.length > 0) nextId = visibleRows[visibleRows.length - 1].id;
                break;
            case 'Enter':
            case ' ':
                handleSelect(node.id);
                if (row.hasChildren) toggleOpen(node.id);
                if (row.isLeaf && node.href) {
                    window.location.href = node.href;
                    // Same dance as focusRow does after click: the fragment
                    // navigation moves focus to the hash target, so re-assert
                    // focus on the tree row next frame.
                    focusRow(node.id);
                }
                break;
            default:
                return;
        }

        e.preventDefault();
        if (nextId !== null) focusRow(nextId);
    }, [visibleRows, isOpen, toggleOpen, handleSelect, focusRow]);

    const treeApi = useMemo(() => ({
        isActive: (id) => activeId === id,
        focusRow,
        isOpen,
        toggleOpen,
        registerRef,
        selectedId: props.selected_id,
        onSelect: handleSelect,
        search,
        collapseIconColor: props.collapse_icon_color,
        nodeIconColor: props.node_icon_color,
        indent: props.indent,
        rowHeight: props.row_height,
        rowClassName: props.rowClassName,
    }), [
        activeId, focusRow, isOpen, toggleOpen, registerRef, props.selected_id,
        handleSelect, search, props.collapse_icon_color,
        props.node_icon_color, props.indent, props.row_height, props.rowClassName,
    ]);

    // Single delegated keyboard handler on the scroll container — fires for
    // any focused descendant via bubbling, so we don't depend on each row's
    // own onKeyDown firing.
    const handleScrollKeyDown = (e) => {
        if (!activeId) return;
        const row = visibleRows.find(r => r.id === activeId);
        if (!row) return;
        handleKeyDown(e, row.node);
    };

    const data = props.data || [];

    return (
        <div id={props.id}
             className={`tree-container ${props.className || ''}`.trim()}
             style={{
                 width: props.width || '100%',
                 height: props.height,
                 display: 'flex',
                 flexDirection: 'column',
                 '--tree-selected-bg': props.selected_color,
                 '--tree-hover-bg': props.hover_color,
             }}>
            {props.searchable ? (
                <input
                    type="text"
                    placeholder="Search..."
                    aria-label="Search tree"
                    className="tree-search-input"
                    value={term}
                    style={{ height: props.search_input_height, flex: 'none' }}
                    onChange={(e) => setTerm(e.target.value)}
                />
            ) : null}
            <div className="tree-scroll"
                 onKeyDown={handleScrollKeyDown}
                 style={{
                flex: 1,
                minHeight: 0,
                overflow: 'auto',
                paddingTop: props.padding_top != null ? props.padding_top : props.padding,
                paddingBottom: props.padding_bottom != null ? props.padding_bottom : props.padding,
            }}>
                <div className="tree-content">
                    <ul className="tree-ul" role="tree" aria-label={props.aria_label || 'Tree'}>
                        {data.map((node, idx) => (
                            <Node
                                key={node.id}
                                node={node}
                                level={0}
                                positionInSet={idx + 1}
                                sizeOfSet={data.length}
                                tree={treeApi}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

Tree.defaultProps = {
    open_by_default: true,
    collapse_icon_color: '#888888',
    node_icon_color: '#424242',
    searchable: true,
    search_input_height: 25,
    indent: 24,
    row_height: 24,
    width: null,
    height: '100%',
    selected_id: null,
    selected_color: '#3392e3',
    hover_color: '#76b6ec',
};

Tree.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A list of dictionaries that defines the tree structure. Each node has
     * `id` (string, required), `name` (display text), optional `children`
     * (array — presence determines leaf vs. folder), optional `href`
     * (rendered as a link on leaves), and optional `icon_color` overriding
     * `node_icon_color` for that node.
     */
    data: PropTypes.array.isRequired,

    /**
     * The width of the Tree. Either a number (pixels) or a CSS string
     * (e.g. '100%'). Defaults to '100%' so the tree fills its parent's width.
     */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * The height of the Tree. Either a number (pixels) or a CSS string
     * (e.g. '80vh', '100%'). Defaults to '100%' so the tree fills its parent.
     * The parent must have a bounded height (e.g. via `style={'height':
     * '80vh'}`) — a percentage of an auto-height parent will collapse to 0.
     */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Minimum height of each row in pixels. Default 30.
     */
    row_height: PropTypes.number,

    /**
     * Per-level indentation in pixels. Default 24.
     */
    indent: PropTypes.number,

    /**
     * Top padding of the scrollable area.
     */
    padding_top: PropTypes.number,

    /**
     * Bottom padding of the scrollable area.
     */
    padding_bottom: PropTypes.number,

    /**
     * Padding applied to both top and bottom of the scrollable area if
     * `padding_top` / `padding_bottom` are not set.
     */
    padding: PropTypes.number,

    /**
     * Color of the collapse (plus/minus) icons.
     */
    collapse_icon_color: PropTypes.string,

    /**
     * Color of the node (folder/leaf) icons. Overridable per node via
     * `icon_color` in the data.
     */
    node_icon_color: PropTypes.string,

    /**
     * Background color of the currently-selected row. Default `#3392e3`.
     */
    selected_color: PropTypes.string,

    /**
     * Background color of a row when the mouse is over it. Does not apply to
     * the selected row (selection wins). Default `#76b6ec`.
     */
    hover_color: PropTypes.string,

    /**
     * Whether folders are open by default. Only used to derive the initial
     * `expanded_ids` if the caller doesn't supply one.
     */
    open_by_default: PropTypes.bool,

    /**
     * Whether to include a search bar. Searching expands all matching paths
     * automatically.
     */
    searchable: PropTypes.bool,

    /**
     * Height of the search bar in pixels.
     */
    search_input_height: PropTypes.number,

    /**
     * Class name of the outer tree container.
     */
    className: PropTypes.string,

    /**
     * Class name applied to each row.
     */
    rowClassName: PropTypes.string,

    /**
     * Accessible label for the tree, exposed as the DOM `aria-label`
     * attribute on the root `role="tree"` element.
     */
    aria_label: PropTypes.string,

    /**
     * The id of the currently selected node. Updated when the user clicks a
     * row or activates one via Enter/Space, and may be set from Dash to
     * programmatically select a node. Setting this from Dash auto-expands
     * the path to the node and scrolls it into view.
     */
    selected_id: PropTypes.string,

    /**
     * Ids of currently-expanded folders. Both read (the tree pushes
     * updates here on toggle) and write (setting it from Dash expands or
     * collapses the corresponding folders). When unset, the initial value
     * is derived from `open_by_default`.
     */
    expanded_ids: PropTypes.arrayOf(PropTypes.string),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export default Tree;
