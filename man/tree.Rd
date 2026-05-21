% Auto-generated: do not edit by hand
\name{tree}

\alias{tree}

\title{Tree component}

\description{
Tree is a dash component which can be used as table of contents. It takes an array of dictionaries, `data`, and displays it as a hierarchical tree structure.
}

\usage{
tree(id=NULL, className=NULL, collapse_icon_color=NULL,
data=NULL, height=NULL, indent=NULL, node_icon_color=NULL,
open_by_default=NULL, overscan_count=NULL, padding=NULL,
padding_bottom=NULL, padding_top=NULL, rowClassName=NULL,
row_height=NULL, search_input_height=NULL, searchable=NULL,
selected_id=NULL, width=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{className}{Character. Class name of the tree.}

\item{collapse_icon_color}{Character. Color of collapse icons.}

\item{data}{Unnamed list. A list of dictionaries that defines the tree structure.}

\item{height}{Numeric | character. The height of the Tree. Either a number (pixels) or a CSS string
(e.g. '80vh', '100\%'). Defaults to '100\%' so the tree fills its parent.
The parent must have a bounded height (e.g. via `style={'height':
'80vh'}`) — a percentage of an auto-height parent will collapse to 0.}

\item{indent}{Numeric. Indent of the Tree.}

\item{node_icon_color}{Character. Color of collapse icons.}

\item{open_by_default}{Logical. Open Tree by default.}

\item{overscan_count}{Numeric. Overscan count.}

\item{padding}{Numeric. Padding.}

\item{padding_bottom}{Numeric. Bottom padding.}

\item{padding_top}{Numeric. Top padding.}

\item{rowClassName}{Character. Class name of the rows.}

\item{row_height}{Numeric. The height of the rows.}

\item{search_input_height}{Numeric. Height of the search bar in pixels.}

\item{searchable}{Logical. Whether to include a search bar.}

\item{selected_id}{Character. The id of the currently selected node. Updated when the user selects a
node (click or keyboard) and may be set from Dash to programmatically
select a node. `null` when no node is selected.}

\item{width}{Numeric | character. The width of the Tree. Either a number (pixels) or a CSS string
(e.g. '100\%'). Defaults to '100\%' so the tree fills its parent's width.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

