import React, { useCallback } from 'react';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { MdBarChart } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";

const nodeMatches = (node, term) => {
    if (node.name.toLowerCase().includes(term)) return true;
    if (node.children) return node.children.some(c => nodeMatches(c, term));
    return false;
};

const Node = ({ node, level, positionInSet, sizeOfSet, tree }) => {
    const isLeaf = !node.children;
    const hasChildren = !isLeaf && node.children.length > 0;
    const iconColor = ('icon_color' in node) ? node.icon_color : tree.nodeIconColor;
    const isSelected = tree.selectedId === node.id;
    const isActive = tree.isActive(node.id);

    // Callback ref: fires with the element on mount and with null on
    // unmount/re-mount, so the ref tracks search-filter visibility cycles
    // correctly (a useEffect-based registration would capture a stale
    // liRef.current on first mount).
    const setRef = useCallback((el) => {
        tree.registerRef(node.id, el);
        // tree.registerRef is stable across re-renders of Tree.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [node.id]);

    if (tree.search && !nodeMatches(node, tree.search)) return null;

    const expanded = tree.search ? true : tree.isOpen(node.id);

    const handleRowClick = () => {
        tree.focusRow(node.id);
        tree.onSelect(node.id);
        if (hasChildren) tree.toggleOpen(node.id);
    };

    const rowClass = ['tree-row', isSelected ? 'selected' : '', tree.rowClassName || '']
        .filter(Boolean)
        .join(' ');

    return (
        <li className="tree-li"
            ref={setRef}
            role="treeitem"
            tabIndex={isActive ? 0 : -1}
            aria-level={level + 1}
            aria-posinset={positionInSet}
            aria-setsize={sizeOfSet}
            aria-expanded={isLeaf ? undefined : expanded}
            aria-selected={isSelected}>
            <div className={rowClass}
                 onClick={handleRowClick}
                 style={{ paddingLeft: level * tree.indent + 4, minHeight: tree.rowHeight }}>
                {isLeaf ? (
                    <>
                        <MdBarChart className="tree-leaf-icon" color={iconColor} />
                        {node.href
                            ? <a className="tree-node-leaf-text"
                                 href={node.href}
                                 title={node.name}
                                 tabIndex={-1}>
                                  {node.name}
                              </a>
                            : <span className="tree-node-leaf-text" title={node.name}>{node.name}</span>}
                    </>
                ) : (
                    <>
                        {expanded
                            ? <AiOutlineMinusSquare className="tree-collapse-icon" color={tree.collapseIconColor} />
                            : <AiOutlinePlusSquare className="tree-collapse-icon" color={tree.collapseIconColor} />}
                        <FaFolderOpen className="tree-folder-icon" color={iconColor} />
                        <span className="tree-node-folder-text" title={node.name}>{node.name}</span>
                    </>
                )}
            </div>
            {!isLeaf && (
                <div className={`tree-children${expanded ? ' open' : ''}`}>
                    <div className="tree-children-inner">
                        <ul className="tree-ul" role="group">
                            {node.children.map((child, idx) => (
                                <Node
                                    key={child.id}
                                    node={child}
                                    level={level + 1}
                                    positionInSet={idx + 1}
                                    sizeOfSet={node.children.length}
                                    tree={tree}
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
