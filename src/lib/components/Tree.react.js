import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import { Tree as TreeArborist } from "react-arborist";
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
export default class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        };
    }

    render() {

        return (
            <div id={this.props.id}>
            {this.props.searchable ? (
            <input
              type="text"
              placeholder="Search..."
              className="tree-search-input"
              value={this.state.term}
              onChange={(e) => this.setState({term: e.target.value})}
            />
            ) : (
            <></>
            )
            }
            <TreeArborist
                data={this.props.data}
                searchTerm={this.state.term}
                width={this.props.width}
                height={this.props.height}
                indent={this.props.indent}
                rowHeight={this.props.row_height}
                overscanCount={this.props.overscan_count}
                paddingTop={this.props.padding_top}
                paddingBottom={this.props.padding_bottom}
                padding={this.props.padding}
                openByDefault={this.props.open_by_default}
                className={this.props.className}
                rowClassName={this.props.rowClassName}
                disableDrag
                disableDrop
                disableEdit
                disableMultiSelection
                collapse_icon_color={this.props.collapse_icon_color}
                node_icon_color={this.props.node_icon_color}
            >
            {Node}
            </TreeArborist>
            </div>
        );
    }
}

Tree.defaultProps = {
    open_by_default: true,
    collapse_icon_color: '#888888',
    node_icon_color: '#424242',
    searchable: true
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
     * The width of the Tree.
     */
    width: PropTypes.number,

    /**
     * The height of the Tree.
     */
    height: PropTypes.number,

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
     * Class name of the tree.
     */
    className: PropTypes.string,

    /**
     * Class name of the rows.
     */
    rowClassName: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
