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
- `collapse_icon_color` (String; optional): Color of collapse icons.
- `data` (Array; required): A list of dictionaries that defines the tree structure.
- `height` (Real; optional): The height of the Tree.
- `indent` (Real; optional): Indent of the Tree.
- `node_icon_color` (String; optional): Color of collapse icons.
- `open_by_default` (Bool; optional): Open Tree by default.
- `overscan_count` (Real; optional): Overscan count.
- `padding` (Real; optional): Padding.
- `padding_bottom` (Real; optional): Bottom padding.
- `padding_top` (Real; optional): Top padding.
- `rowClassName` (String; optional): Class name of the rows.
- `row_height` (Real; optional): The height of the rows.
- `searchable` (Bool; optional): Whether to include a search bar.
- `width` (Real; optional): The width of the Tree.
"""
function tree(; kwargs...)
        available_props = Symbol[:id, :className, :collapse_icon_color, :data, :height, :indent, :node_icon_color, :open_by_default, :overscan_count, :padding, :padding_bottom, :padding_top, :rowClassName, :row_height, :searchable, :width]
        wild_props = Symbol[]
        return Component("tree", "Tree", "dash_tree_components", available_props, wild_props; kwargs...)
end

