# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Tree(Component):
    """A Tree component.


Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Class name of the tree.

- collapse_color (string; default '#bdbcbc'):
    A list of dictionaries that defines the tree structure.

- data (list; required):
    A list of dictionaries that defines the tree structure.

- height (number; optional):
    A list of dictionaries that defines the tree structure.

- open_by_default (boolean; default True):
    A list of dictionaries that defines the tree structure.

- width (number; optional):
    A list of dictionaries that defines the tree structure."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_tree_components'
    _type = 'Tree'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.REQUIRED, width=Component.UNDEFINED, height=Component.UNDEFINED, collapse_color=Component.UNDEFINED, open_by_default=Component.UNDEFINED, className=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'collapse_color', 'data', 'height', 'open_by_default', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'collapse_color', 'data', 'height', 'open_by_default', 'width']
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
