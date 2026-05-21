# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentSingleType = typing.Union[str, int, float, Component, None]
ComponentType = typing.Union[
    ComponentSingleType,
    typing.Sequence[ComponentSingleType],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


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

- height (number | string; default '100%'):
    The height of the Tree. Either a number (pixels) or a CSS string
    (e.g. '80vh', '100%'). Defaults to '100%' so the tree fills its
    parent. The parent must have a bounded height (e.g. via
    `style={'height': '80vh'}`) — a percentage of an auto-height
    parent will collapse to 0.

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

- selected_id (string; optional):
    The id of the currently selected node. Updated when the user
    selects a node (click or keyboard) and may be set from Dash to
    programmatically select a node. `None` when no node is selected.

- width (number | string; optional):
    The width of the Tree. Either a number (pixels) or a CSS string
    (e.g. '100%'). Defaults to '100%' so the tree fills its parent's
    width."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'dash_tree_components'
    _type = 'Tree'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        data: typing.Optional[typing.Sequence] = None,
        width: typing.Optional[typing.Union[NumberType, str]] = None,
        height: typing.Optional[typing.Union[NumberType, str]] = None,
        row_height: typing.Optional[NumberType] = None,
        overscan_count: typing.Optional[NumberType] = None,
        indent: typing.Optional[NumberType] = None,
        padding_top: typing.Optional[NumberType] = None,
        padding_bottom: typing.Optional[NumberType] = None,
        padding: typing.Optional[NumberType] = None,
        collapse_icon_color: typing.Optional[str] = None,
        node_icon_color: typing.Optional[str] = None,
        open_by_default: typing.Optional[bool] = None,
        searchable: typing.Optional[bool] = None,
        search_input_height: typing.Optional[NumberType] = None,
        className: typing.Optional[str] = None,
        rowClassName: typing.Optional[str] = None,
        selected_id: typing.Optional[str] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'className', 'collapse_icon_color', 'data', 'height', 'indent', 'node_icon_color', 'open_by_default', 'overscan_count', 'padding', 'padding_bottom', 'padding_top', 'rowClassName', 'row_height', 'search_input_height', 'searchable', 'selected_id', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'collapse_icon_color', 'data', 'height', 'indent', 'node_icon_color', 'open_by_default', 'overscan_count', 'padding', 'padding_bottom', 'padding_top', 'rowClassName', 'row_height', 'search_input_height', 'searchable', 'selected_id', 'width']
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

setattr(Tree, "__init__", _explicitize_args(Tree.__init__))
