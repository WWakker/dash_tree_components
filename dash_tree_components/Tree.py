# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Tree(Component):
    """A Tree component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- data (list; required):
    A list of dictionaries that defines the tree structure.

- leaf_icon_color (string; default '#D3D3D3'):
    A list of dictionaries that defines the tree structure.

- open_by_default (boolean; default True):
    A list of dictionaries that defines the tree structure."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_tree_components'
    _type = 'Tree'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.REQUIRED, open_by_default=Component.UNDEFINED, leaf_icon_color=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'data', 'leaf_icon_color', 'open_by_default']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'data', 'leaf_icon_color', 'open_by_default']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['data']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(Tree, self).__init__(**args)
