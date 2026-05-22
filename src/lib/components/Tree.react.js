import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Node from './Node.react';
import '../styles.css';

/**
 * Tree is a Dash component that renders a hierarchical tree from a list of
 * dictionaries. It's typically used as a table of contents: leaves can carry
 * an `href` to scroll the host page to a section, and selection is exposed
 * to Dash callbacks via `selected_id`. Folder expand/collapse is animated
 * with CSS transitions.
 */
const Tree = (props) => {
    const [term, setTerm] = useState('');

    const handleSelect = (id) => {
        if (props.setProps && id !== props.selected_id) {
            props.setProps({ selected_id: id });
        }
    };

    const search = term.trim().toLowerCase();

    return (
        <div id={props.id}
             className={`tree-container ${props.className || ''}`.trim()}
             style={{
                 width: props.width || '100%',
                 height: props.height,
                 display: 'flex',
                 flexDirection: 'column',
             }}>
            {props.searchable ? (
                <input
                    type="text"
                    placeholder="Search..."
                    className="tree-search-input"
                    value={term}
                    style={{ height: props.search_input_height, flex: 'none' }}
                    onChange={(e) => setTerm(e.target.value)}
                />
            ) : null}
            <div className="tree-scroll" style={{
                flex: 1,
                minHeight: 0,
                overflow: 'auto',
                paddingTop: props.padding_top != null ? props.padding_top : props.padding,
                paddingBottom: props.padding_bottom != null ? props.padding_bottom : props.padding,
            }}>
                <div className="tree-content">
                    <ul className="tree-ul">
                        {props.data.map(node => (
                            <Node
                                key={node.id}
                                node={node}
                                level={0}
                                term={search}
                                selectedId={props.selected_id}
                                onSelect={handleSelect}
                                collapseIconColor={props.collapse_icon_color}
                                nodeIconColor={props.node_icon_color}
                                openByDefault={props.open_by_default}
                                indent={props.indent}
                                rowHeight={props.row_height}
                                rowClassName={props.rowClassName}
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
    row_height: 30,
    width: null,
    height: '100%',
    selected_id: null,
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
     * Whether folders are open by default.
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
     * The id of the currently selected node. Updated when the user clicks a
     * row, and may be set from Dash to programmatically select a node. `null`
     * when no node is selected.
     */
    selected_id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export default Tree;
