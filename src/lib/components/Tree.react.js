import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Tree as TreeArborist } from "react-arborist";
import { SiHtml5, SiJavascript, SiCss3, SiMarkdown } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { AiFillFolder, AiFillFile } from "react-icons/ai";
import { MdArrowRight, MdArrowDropDown, MdEdit } from "react-icons/md";
import Node from './Node';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Tree extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div id={this.props.id}>
            <TreeArborist
                data={this.props.data}
                openByDefault={this.props.open_by_default}
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
    leaf_icon_color: '#D3D3D3'
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
    open_by_default: PropTypes.bool,

    /**
     * A list of dictionaries that defines the tree structure.
     */
    leaf_icon_color: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
