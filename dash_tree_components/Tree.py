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
Tree is a Dash component that renders a hierarchical tree from a list of
dictionaries. Folder expand/collapse is animated with CSS transitions.
Selection is exposed to Dash callbacks via `selected_id`, expanded folders
via `expanded_ids`. Implements the WAI-ARIA `tree` pattern with full
keyboard navigation.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- aria_label (string; optional):
    Accessible label for the tree, exposed as the DOM `aria-label`
    attribute on the root `role=\"tree\"` element.

- className (string; optional):
    Class name of the outer tree container.

- collapse_icon_color (string; default '#888888'):
    Color of the collapse (plus/minus) icons.

- data (list; required):
    A list of dictionaries that defines the tree structure. Each node
    has `id` (string, required), `name` (display text), optional
    `children` (array — presence determines leaf vs. folder), optional
    `href` (rendered as a link on leaves), and optional `icon_color`
    overriding `node_icon_color` for that node.

- expanded_ids (list of strings; optional):
    Ids of currently-expanded folders. Both read (the tree pushes
    updates here on toggle) and write (setting it from Dash expands or
    collapses the corresponding folders). When unset, the initial
    value is derived from `open_by_default`.

- height (number | string; default '100%'):
    The height of the Tree. Either a number (pixels) or a CSS string
    (e.g. '80vh', '100%'). Defaults to '100%' so the tree fills its
    parent. The parent must have a bounded height (e.g. via
    `style={'height': '80vh'}`) — a percentage of an auto-height
    parent will collapse to 0.

- hover_color (string; default '#76b6ec'):
    Background color of a row when the mouse is over it. Does not
    apply to the selected row (selection wins). Default `#76b6ec`.

- indent (number; default 24):
    Per-level indentation in pixels. Default 24.

- node_icon_color (string; default '#424242'):
    Color of the node (folder/leaf) icons. Overridable per node via
    `icon_color` in the data.

- open_by_default (boolean; default True):
    Whether folders are open by default. Only used to derive the
    initial `expanded_ids` if the caller doesn't supply one.

- padding (number; optional):
    Padding applied to both top and bottom of the scrollable area if
    `padding_top` / `padding_bottom` are not set.

- padding_bottom (number; optional):
    Bottom padding of the scrollable area.

- padding_top (number; optional):
    Top padding of the scrollable area.

- rowClassName (string; optional):
    Class name applied to each row.

- row_height (number; default 30):
    Minimum height of each row in pixels. Default 30.

- search_input_height (number; default 25):
    Height of the search bar in pixels.

- searchable (boolean; default True):
    Whether to include a search bar. Searching expands all matching
    paths automatically.

- selected_color (string; default '#3392e3'):
    Background color of the currently-selected row. Default `#3392e3`.

- selected_id (string; optional):
    The id of the currently selected node. Updated when the user
    clicks a row or activates one via Enter/Space, and may be set from
    Dash to programmatically select a node. Setting this from Dash
    auto-expands the path to the node and scrolls it into view.

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
        indent: typing.Optional[NumberType] = None,
        padding_top: typing.Optional[NumberType] = None,
        padding_bottom: typing.Optional[NumberType] = None,
        padding: typing.Optional[NumberType] = None,
        collapse_icon_color: typing.Optional[str] = None,
        node_icon_color: typing.Optional[str] = None,
        selected_color: typing.Optional[str] = None,
        hover_color: typing.Optional[str] = None,
        open_by_default: typing.Optional[bool] = None,
        searchable: typing.Optional[bool] = None,
        search_input_height: typing.Optional[NumberType] = None,
        className: typing.Optional[str] = None,
        rowClassName: typing.Optional[str] = None,
        aria_label: typing.Optional[str] = None,
        selected_id: typing.Optional[str] = None,
        expanded_ids: typing.Optional[typing.Sequence[str]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'aria_label', 'className', 'collapse_icon_color', 'data', 'expanded_ids', 'height', 'hover_color', 'indent', 'node_icon_color', 'open_by_default', 'padding', 'padding_bottom', 'padding_top', 'rowClassName', 'row_height', 'search_input_height', 'searchable', 'selected_color', 'selected_id', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'aria_label', 'className', 'collapse_icon_color', 'data', 'expanded_ids', 'height', 'hover_color', 'indent', 'node_icon_color', 'open_by_default', 'padding', 'padding_bottom', 'padding_top', 'rowClassName', 'row_height', 'search_input_height', 'searchable', 'selected_color', 'selected_id', 'width']
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
