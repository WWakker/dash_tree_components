# AUTO GENERATED FILE - DO NOT EDIT

export tree

"""
    tree(;kwargs...)

A Tree component.
Tree is a dash component which can be used as table of contents.
It takes an array of dictionaries, `data`, and
displays it as a hierarchical tree structure.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `className` (String; optional): Class name of the tree.
- `collapse_icon_color` (String; optional): Color of collapse icons.
- `data` (Array; required): A list of dictionaries that defines the tree structure.
- `height` (Real | String; optional): The height of the Tree. Either a number (pixels) or a CSS string
(e.g. '80vh', '100%'). Defaults to '100%' so the tree fills its parent.
The parent must have a bounded height (e.g. via `style={'height':
'80vh'}`) — a percentage of an auto-height parent will collapse to 0.
- `indent` (Real; optional): Indent of the Tree.
- `node_icon_color` (String; optional): Color of collapse icons.
- `open_by_default` (Bool; optional): Open Tree by default.
- `overscan_count` (Real; optional): Overscan count.
- `padding` (Real; optional): Padding.
- `padding_bottom` (Real; optional): Bottom padding.
- `padding_top` (Real; optional): Top padding.
- `rowClassName` (String; optional): Class name of the rows.
- `row_height` (Real; optional): The height of the rows.
- `search_input_height` (Real; optional): Height of the search bar in pixels.
- `searchable` (Bool; optional): Whether to include a search bar.
- `selected_id` (String; optional): The id of the currently selected node. Updated when the user selects a
node (click or keyboard) and may be set from Dash to programmatically
select a node. `null` when no node is selected.
- `width` (Real | String; optional): The width of the Tree. Either a number (pixels) or a CSS string
(e.g. '100%'). Defaults to '100%' so the tree fills its parent's width.
"""
function tree(; kwargs...)
        available_props = Symbol[:id, :className, :collapse_icon_color, :data, :height, :indent, :node_icon_color, :open_by_default, :overscan_count, :padding, :padding_bottom, :padding_top, :rowClassName, :row_height, :search_input_height, :searchable, :selected_id, :width]
        wild_props = Symbol[]
        return Component("tree", "Tree", "dash_tree_components", available_props, wild_props; kwargs...)
end

