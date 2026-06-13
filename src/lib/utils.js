export const nodeMatches = (node, term) => {
    if (node.name.toLowerCase().includes(term)) return true;
    if (node.children) return node.children.some(c => nodeMatches(c, term));
    return false;
};
