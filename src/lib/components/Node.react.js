import React, { useState } from 'react';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { MdBarChart } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";

const nodeMatches = (node, term) => {
    if (node.name.toLowerCase().includes(term)) return true;
    if (node.children) return node.children.some(c => nodeMatches(c, term));
    return false;
};

const Node = ({
    node, level, term, selectedId, onSelect,
    collapseIconColor, nodeIconColor, openByDefault,
    indent, rowHeight, rowClassName,
}) => {
    const [open, setOpen] = useState(openByDefault);
    const isLeaf = !node.children;
    const iconColor = ('icon_color' in node) ? node.icon_color : nodeIconColor;
    const isSelected = selectedId === node.id;

    if (term && !nodeMatches(node, term)) return null;
    const expanded = term ? true : open;

    const handleRowClick = () => {
        onSelect(node.id);
        if (!isLeaf) setOpen(o => !o);
    };

    const rowClass = ['tree-row', isSelected ? 'selected' : '', rowClassName || '']
        .filter(Boolean)
        .join(' ');

    return (
        <li className="tree-li">
            <div className={rowClass}
                 onClick={handleRowClick}
                 style={{paddingLeft: level * indent + 4, minHeight: rowHeight}}
                 aria-selected={isSelected}>
                {isLeaf ? (
                    <>
                        <MdBarChart className="tree-leaf-icon" color={iconColor} />
                        {node.href
                            ? <a className="tree-node-leaf-text"
                                 href={node.href}
                                 title={node.name}>
                                  {node.name}
                              </a>
                            : <span className="tree-node-leaf-text" title={node.name}>{node.name}</span>}
                    </>
                ) : (
                    <>
                        {expanded
                            ? <AiOutlineMinusSquare className="tree-collapse-icon" color={collapseIconColor} />
                            : <AiOutlinePlusSquare className="tree-collapse-icon" color={collapseIconColor} />}
                        <FaFolderOpen className="tree-folder-icon" color={iconColor} />
                        <span className="tree-node-folder-text" title={node.name}>{node.name}</span>
                    </>
                )}
            </div>
            {!isLeaf && (
                <div className={`tree-children${expanded ? ' open' : ''}`}>
                    <div className="tree-children-inner">
                        <ul className="tree-ul">
                            {node.children.map(child => (
                                <Node
                                    key={child.id}
                                    node={child}
                                    level={level + 1}
                                    term={term}
                                    selectedId={selectedId}
                                    onSelect={onSelect}
                                    collapseIconColor={collapseIconColor}
                                    nodeIconColor={nodeIconColor}
                                    openByDefault={openByDefault}
                                    indent={indent}
                                    rowHeight={rowHeight}
                                    rowClassName={rowClassName}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </li>
    );
};

export default Node;
