# AUTO GENERATED FILE - DO NOT EDIT

export tree

"""
    tree(;kwargs...)

A Tree component.
Tree is an dash component which can be used as table of contents.
It takes an array of dictionaries, `data`, and
displays it as a hierarchical tree structure.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `className` (String; optional): Class name of the tree.
- `collapse_color` (String; optional): Color of collapse icons.
- `data` (Array; required): A list of dictionaries that defines the tree structure.
- `height` (Real; optional): The height of the Tree.
- `indent` (Real; optional): Indent of the Tree.
- `open_by_default` (Bool; optional): Open Tree by default.
- `padding` (Real; optional): Padding.
- `padding_bottom` (Real; optional): Bottom padding.
- `padding_top` (Real; optional): Top padding.
- `rowClassName` (String; optional): Class name of the rows.
- `row_height` (Real; optional): The height of the rows.
- `width` (Real; optional): The width of the Tree.
"""
function tree(; kwargs...)
        available_props = Symbol[:id, :className, :collapse_color, :data, :height, :indent, :open_by_default, :padding, :padding_bottom, :padding_top, :rowClassName, :row_height, :width]
        wild_props = Symbol[]
        return Component("tree", "Tree", "dash_tree_components", available_props, wild_props; kwargs...)
end

