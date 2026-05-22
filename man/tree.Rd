% Auto-generated: do not edit by hand
\name{tree}

\alias{tree}

\title{Tree component}

\description{
Tree is a Dash component that renders a hierarchical tree from a list of dictionaries. Folder expand/collapse is animated with CSS transitions. Selection is exposed to Dash callbacks via `selected_id`. Implements the WAI-ARIA `tree` pattern with full keyboard navigation.
}

\usage{
tree(id=NULL, aria_label=NULL, className=NULL,
collapse_icon_color=NULL, data=NULL, height=NULL,
indent=NULL, node_icon_color=NULL, open_by_default=NULL,
padding=NULL, padding_bottom=NULL, padding_top=NULL,
rowClassName=NULL, row_height=NULL,
search_input_height=NULL, searchable=NULL, selected_id=NULL,
width=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{aria_label}{Character. Accessible label for the tree, exposed as the DOM `aria-label`
attribute on the root `role="tree"` element.}

\item{className}{Character. Class name of the outer tree container.}

\item{collapse_icon_color}{Character. Color of the collapse (plus/minus) icons.}

\item{data}{Unnamed list. A list of dictionaries that defines the tree structure. Each node has
`id` (string, required), `name` (display text), optional `children`
(array — presence determines leaf vs. folder), optional `href`
(rendered as a link on leaves), and optional `icon_color` overriding
`node_icon_color` for that node.}

\item{height}{Numeric | character. The height of the Tree. Either a number (pixels) or a CSS string
(e.g. '80vh', '100\%'). Defaults to '100\%' so the tree fills its parent.
The parent must have a bounded height (e.g. via `style={'height':
'80vh'}`) — a percentage of an auto-height parent will collapse to 0.}

\item{indent}{Numeric. Per-level indentation in pixels. Default 24.}

\item{node_icon_color}{Character. Color of the node (folder/leaf) icons. Overridable per node via
`icon_color` in the data.}

\item{open_by_default}{Logical. Whether folders are open by default.}

\item{padding}{Numeric. Padding applied to both top and bottom of the scrollable area if
`padding_top` / `padding_bottom` are not set.}

\item{padding_bottom}{Numeric. Bottom padding of the scrollable area.}

\item{padding_top}{Numeric. Top padding of the scrollable area.}

\item{rowClassName}{Character. Class name applied to each row.}

\item{row_height}{Numeric. Minimum height of each row in pixels. Default 30.}

\item{search_input_height}{Numeric. Height of the search bar in pixels.}

\item{searchable}{Logical. Whether to include a search bar. Searching expands all matching paths
automatically.}

\item{selected_id}{Character. The id of the currently selected node. Updated when the user clicks a
row or activates one via Enter/Space, and may be set from Dash to
programmatically select a node. `null` when no node is selected.}

\item{width}{Numeric | character. The width of the Tree. Either a number (pixels) or a CSS string
(e.g. '100\%'). Defaults to '100\%' so the tree fills its parent's width.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

