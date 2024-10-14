import React, { useState } from 'react';
import { AiFillFolder, AiFillFile, AiOutlinePlusSquare, AiOutlineMinusSquare} from "react-icons/ai";
import { MdArrowRight, MdArrowDropDown, MdEdit } from "react-icons/md";

const Node = ({ node, style, tree }) => {
  return (
    <div className="node-container" style={style} >
      <div
        className="node-content"
        onClick={() => node.isInternal && node.toggle()}
      >
        {node.isLeaf ? (
          <>
            <span className="arrow"></span>
            <span className="file-folder-icon">
              <AiFillFile color='#d3d3d3' />
            </span>
            <span className="node-text">
                <span><a href={node.data.href}>{node.data.name}</a></span>
            </span>
          </>
        ) : (
          <>
            <span className="arrow">
              {node.isOpen ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
            </span>
            <span className="node-text">
          <span>{node.data.name}</span>
        </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Node;
