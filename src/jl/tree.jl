# AUTO GENERATED FILE - DO NOT EDIT

export tree

"""
    tree(;kwargs...)

A Tree component.
Tree is a Dash component that renders a hierarchical tree from a list of
dictionaries. Folder expand/collapse is animated with CSS transitions.
Selection is exposed to Dash callbacks via `selected_id`. Implements the
WAI-ARIA `tree` pattern with full keyboard navigation.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `aria_label` (String; optional): Accessible label for the tree, exposed as the DOM `aria-label`
attribute on the root `role="tree"` element.
- `className` (String; optional): Class name of the outer tree container.
- `collapse_icon_color` (String; optional): Color of the collapse (plus/minus) icons.
- `data` (Array; required): A list of dictionaries that defines the tree structure. Each node has
`id` (string, required), `name` (display text), optional `children`
(array — presence determines leaf vs. folder), optional `href`
(rendered as a link on leaves), and optional `icon_color` overriding
`node_icon_color` for that node.
- `height` (Real | String; optional): The height of the Tree. Either a number (pixels) or a CSS string
(e.g. '80vh', '100%'). Defaults to '100%' so the tree fills its parent.
The parent must have a bounded height (e.g. via `style={'height':
'80vh'}`) — a percentage of an auto-height parent will collapse to 0.
- `indent` (Real; optional): Per-level indentation in pixels. Default 24.
- `node_icon_color` (String; optional): Color of the node (folder/leaf) icons. Overridable per node via
`icon_color` in the data.
- `open_by_default` (Bool; optional): Whether folders are open by default.
- `padding` (Real; optional): Padding applied to both top and bottom of the scrollable area if
`padding_top` / `padding_bottom` are not set.
- `padding_bottom` (Real; optional): Bottom padding of the scrollable area.
- `padding_top` (Real; optional): Top padding of the scrollable area.
- `rowClassName` (String; optional): Class name applied to each row.
- `row_height` (Real; optional): Minimum height of each row in pixels. Default 30.
- `search_input_height` (Real; optional): Height of the search bar in pixels.
- `searchable` (Bool; optional): Whether to include a search bar. Searching expands all matching paths
automatically.
- `selected_id` (String; optional): The id of the currently selected node. Updated when the user clicks a
row or activates one via Enter/Space, and may be set from Dash to
programmatically select a node. `null` when no node is selected.
- `width` (Real | String; optional): The width of the Tree. Either a number (pixels) or a CSS string
(e.g. '100%'). Defaults to '100%' so the tree fills its parent's width.
"""
function tree(; kwargs...)
        available_props = Symbol[:id, :aria_label, :className, :collapse_icon_color, :data, :height, :indent, :node_icon_color, :open_by_default, :padding, :padding_bottom, :padding_top, :rowClassName, :row_height, :search_input_height, :searchable, :selected_id, :width]
        wild_props = Symbol[]
        return Component("tree", "Tree", "dash_tree_components", available_props, wild_props; kwargs...)
end

