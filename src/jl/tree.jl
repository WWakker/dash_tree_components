# AUTO GENERATED FILE - DO NOT EDIT

export tree

"""
    tree(;kwargs...)

A Tree component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `className` (String; optional): Class name of the tree.
- `collapse_color` (String; optional): A list of dictionaries that defines the tree structure.
- `data` (Array; required): A list of dictionaries that defines the tree structure.
- `height` (Real; optional): A list of dictionaries that defines the tree structure.
- `open_by_default` (Bool; optional): A list of dictionaries that defines the tree structure.
- `width` (Real; optional): A list of dictionaries that defines the tree structure.
"""
function tree(; kwargs...)
        available_props = Symbol[:id, :className, :collapse_color, :data, :height, :open_by_default, :width]
        wild_props = Symbol[]
        return Component("tree", "Tree", "dash_tree_components", available_props, wild_props; kwargs...)
end

