import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import { Tree as TreeArborist } from "react-arborist";
import useResizeObserver from "use-resize-observer";
import { SiHtml5, SiJavascript, SiCss3, SiMarkdown } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { AiFillFolder, AiFillFile } from "react-icons/ai";
import { MdArrowRight, MdArrowDropDown, MdEdit } from "react-icons/md";
import Node from './Node.react';
import '../styles.css'

/**
 * Tree is a dash component which can be used as table of contents.
 * It takes an array of dictionaries, `data`, and
 * displays it as a hierarchical tree structure.
 */
const Tree = (props) => {
    const [term, setTerm] = useState("");

    // ResizeObserver is on the inner flex-bounded div, not the outer container.
    // This keeps measurement independent of the tree's own rendered height, so
    // there is no feedback loop: the inner div is sized by flex layout (parent
    // height minus the search input), and ResizeObserver just reports that.
    const { ref, width: observedWidth, height: observedHeight } = useResizeObserver();

    const handleSelect = (nodes) => {
        const new_id = nodes.length > 0 ? nodes[0].id : null;
        if (new_id !== props.selected_id && props.setProps) {
            props.setProps({ selected_id: new_id });
        }
    };

    return (
        <div id={props.id}
             className='tree-container'
             style={{
                width: props.width || '100%',
                height: props.height,
                display: 'flex',
                flexDirection: 'column',
            }}
             >
            {props.searchable ? (
                <input
                    type="text"
                    placeholder="Search..."
                    className="tree-search-input"
                    value={term}
                    style={{height: props.search_input_height, flex: 'none'}}
                    onChange={(e) => setTerm(e.target.value)}
                />
            ) : null}
            <div ref={ref} style={{flex: 1, minHeight: 0}}>
            <TreeArborist
                data={props.data}
                searchTerm={term}
                width={observedWidth}
                height={observedHeight}
                indent={props.indent}
                rowHeight={props.row_height}
                overscanCount={props.overscan_count}
                paddingTop={props.padding_top}
                paddingBottom={props.padding_bottom}
                padding={props.padding}
                openByDefault={props.open_by_default}
                className={props.className ? props.className + ' tree': 'tree'}
                rowClassName={props.rowClassName}
                selection={props.selected_id}
                onSelect={handleSelect}
                disableDrag
                disableDrop
                disableEdit
                disableMultiSelection
                collapse_icon_color={props.collapse_icon_color}
                node_icon_color={props.node_icon_color}
            >
                {Node}
            </TreeArborist>
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
    width: null,
    height: '100%',
    selected_id: null
};

Tree.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A list of dictionaries that defines the tree structure.
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
     * The height of the rows.
     */
    row_height: PropTypes.number,

    /**
     * Overscan count.
     */
    overscan_count: PropTypes.number,

    /**
     * Indent of the Tree.
     */
    indent: PropTypes.number,

    /**
     * Top padding.
     */
    padding_top: PropTypes.number,

    /**
     * Bottom padding.
     */
    padding_bottom: PropTypes.number,

    /**
     * Padding.
     */
    padding: PropTypes.number,

    /**
     * Color of collapse icons.
     */
    collapse_icon_color: PropTypes.string,

    /**
     * Color of collapse icons.
     */
    node_icon_color: PropTypes.string,

    /**
     * Open Tree by default.
     */
    open_by_default: PropTypes.bool,

    /**
     * Whether to include a search bar.
     */
    searchable: PropTypes.bool,

    /**
     * Height of the search bar in pixels.
     */
    search_input_height: PropTypes.number,

    /**
     * Class name of the tree.
     */
    className: PropTypes.string,

    /**
     * Class name of the rows.
     */
    rowClassName: PropTypes.string,

    /**
     * The id of the currently selected node. Updated when the user selects a
     * node (click or keyboard) and may be set from Dash to programmatically
     * select a node. `null` when no node is selected.
     */
    selected_id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default Tree
