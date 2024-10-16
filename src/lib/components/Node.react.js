import React, { useState } from 'react';
import { AiFillFolder, AiFillFile, AiOutlinePlusSquare, AiOutlineMinusSquare} from "react-icons/ai";
import { MdArrowRight, MdArrowDropDown, MdEdit, MdBarChart } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";

const Node = ({ node, style, tree }) => {
  const node_icon_color = ('icon_color' in node.data) ? (node.data.icon_color) : (tree.props.node_icon_color)
  return (
    <div className="tree-node-container" style={style} >
      <div
        className="tree-node-content"
        onClick={() => node.isInternal && node.toggle()}
      >
        {node.isLeaf ? (
          <>
              <MdBarChart className="tree-leaf-icon" color={node_icon_color} />
            <a className="tree-node-leaf-text" href={node.data.href}>{node.data.name}</a>
          </>
        ) : (
          <>
              {node.isOpen ? (
              <AiOutlineMinusSquare className="tree-collapse-icon" color={tree.props.collapse_icon_color} />
              ) : (
              <AiOutlinePlusSquare className="tree-collapse-icon" color={tree.props.collapse_icon_color} />
              )}
              <FaFolderOpen className="tree-folder-icon" color={node_icon_color} />
            <p className="tree-node-folder-text">
                {node.data.name}
        </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Node;
