# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Tree(Component):
    """A Tree component.
Tree is an dash component which can be used as table of contents.
It takes an array of dictionaries, `data`, and
displays it as a hierarchical tree structure.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Class name of the tree.

- collapse_color (string; default '#888888'):
    Color of collapse icons.

- data (list; required):
    A list of dictionaries that defines the tree structure.

- height (number; optional):
    The height of the Tree.

- indent (number; optional):
    Indent of the Tree.

- open_by_default (boolean; default True):
    Open Tree by default.

- padding (number; optional):
    Padding.

- padding_bottom (number; optional):
    Bottom padding.

- padding_top (number; optional):
    Top padding.

- rowClassName (string; optional):
    Class name of the rows.

- row_height (number; optional):
    The height of the rows.

- width (number; optional):
    The width of the Tree."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_tree_components'
    _type = 'Tree'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.REQUIRED, width=Component.UNDEFINED, height=Component.UNDEFINED, row_height=Component.UNDEFINED, indent=Component.UNDEFINED, padding_top=Component.UNDEFINED, padding_bottom=Component.UNDEFINED, padding=Component.UNDEFINED, collapse_color=Component.UNDEFINED, open_by_default=Component.UNDEFINED, className=Component.UNDEFINED, rowClassName=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'collapse_color', 'data', 'height', 'indent', 'open_by_default', 'padding', 'padding_bottom', 'padding_top', 'rowClassName', 'row_height', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'collapse_color', 'data', 'height', 'indent', 'open_by_default', 'padding', 'padding_bottom', 'padding_top', 'rowClassName', 'row_height', 'width']
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
