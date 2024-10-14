import React, { useState } from 'react';
import { AiFillFolder, AiFillFile, AiOutlinePlusSquare, AiOutlineMinusSquare} from "react-icons/ai";
import { MdArrowRight, MdArrowDropDown, MdEdit, MdBarChart } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";

const collapseColor = '#bdbcbc';

const Node = ({ node, style, tree }) => {
  console.log(tree)
  return (
    <div className="tree-node-container" style={style} >
      <div
        className="tree-node-content"
        onClick={() => node.isInternal && node.toggle()}
      >
        {node.isLeaf ? (
          <>
            <span className="tree-collapse"></span>
            <span className="tree-file-folder-icon">
              <MdBarChart color={node.data.iconColor} />
            </span>
            <span className="tree-node-text">
                <span><a href={node.data.href}>{node.data.name}</a></span>
            </span>
          </>
        ) : (
          <>
            <span className="tree-collapse">
              {node.isOpen ? <AiOutlineMinusSquare color={collapseColor} /> : <AiOutlinePlusSquare color={collapseColor} />}
            </span>
            <span className="tree-file-folder-icon">
              <FaFolderOpen color={node.data.iconColor} />
            </span>
            <span className="tree-node-text">
          <span>{node.data.name}</span>
        </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Node;
