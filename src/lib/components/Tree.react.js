import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Tree as TreeArborist } from "react-arborist";
import { SiHtml5, SiJavascript, SiCss3, SiMarkdown } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { AiFillFolder, AiFillFile } from "react-icons/ai";
import { MdArrowRight, MdArrowDropDown, MdEdit } from "react-icons/md";
import Node from './Node.react';


export default class Tree extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div id={this.props.id}>
            <TreeArborist
                data={this.props.data}
                width={this.props.width}
                height={this.props.height}
                openByDefault={this.props.open_by_default}
                className={this.props.className}
                disableDrag
                disableDrop
                disableEdit
                disableMultiSelection
            >
            {Node}
            </TreeArborist>
            </div>
        );
    }
}

Tree.defaultProps = {
    open_by_default: true,
    collapse_color: '#bdbcbc'
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
     * A list of dictionaries that defines the tree structure.
     */
    width: PropTypes.number,

    /**
     * A list of dictionaries that defines the tree structure.
     */
    height: PropTypes.number,

    /**
     * A list of dictionaries that defines the tree structure.
     */
    collapse_color: PropTypes.string,

    /**
     * A list of dictionaries that defines the tree structure.
     */
    open_by_default: PropTypes.bool,

    /**
     * Class name of the tree.
     */
    className: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
