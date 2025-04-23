# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Tree(Component):
    """A Tree component.
Tree is a dash component which can be used as table of contents.
It takes an array of dictionaries, `data`, and
displays it as a hierarchical tree structure.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Class name of the tree.

- collapse_icon_color (string; default '#888888'):
    Color of collapse icons.

- data (list; required):
    A list of dictionaries that defines the tree structure.

- height (number; optional):
    The height of the Tree.

- indent (number; optional):
    Indent of the Tree.

- node_icon_color (string; default '#424242'):
    Color of collapse icons.

- open_by_default (boolean; default True):
    Open Tree by default.

- overscan_count (number; optional):
    Overscan count.

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

- search_input_height (number; default 25):
    Height of the search bar in pixels.

- searchable (boolean; default True):
    Whether to include a search bar.

- width (number; optional):
    The width of the Tree."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_tree_components'
    _type = 'Tree'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.REQUIRED, width=Component.UNDEFINED, height=Component.UNDEFINED, row_height=Component.UNDEFINED, overscan_count=Component.UNDEFINED, indent=Component.UNDEFINED, padding_top=Component.UNDEFINED, padding_bottom=Component.UNDEFINED, padding=Component.UNDEFINED, collapse_icon_color=Component.UNDEFINED, node_icon_color=Component.UNDEFINED, open_by_default=Component.UNDEFINED, searchable=Component.UNDEFINED, search_input_height=Component.UNDEFINED, className=Component.UNDEFINED, rowClassName=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'collapse_icon_color', 'data', 'height', 'indent', 'node_icon_color', 'open_by_default', 'overscan_count', 'padding', 'padding_bottom', 'padding_top', 'rowClassName', 'row_height', 'search_input_height', 'searchable', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'collapse_icon_color', 'data', 'height', 'indent', 'node_icon_color', 'open_by_default', 'overscan_count', 'padding', 'padding_bottom', 'padding_top', 'rowClassName', 'row_height', 'search_input_height', 'searchable', 'width']
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
