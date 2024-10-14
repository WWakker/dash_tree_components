# AUTO GENERATED FILE - DO NOT EDIT

export tree

"""
    tree(;kwargs...)

A Tree component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `data` (Array; required): A list of dictionaries that defines the tree structure.
- `leaf_icon_color` (String; optional): A list of dictionaries that defines the tree structure.
- `open_by_default` (Bool; optional): A list of dictionaries that defines the tree structure.
"""
function tree(; kwargs...)
        available_props = Symbol[:id, :data, :leaf_icon_color, :open_by_default]
        wild_props = Symbol[]
        return Component("tree", "Tree", "dash_tree_components", available_props, wild_props; kwargs...)
end

