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
row_height=NULL, searchable=NULL, width=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{className}{Character. Class name of the tree.}

\item{collapse_icon_color}{Character. Color of collapse icons.}

\item{data}{Unnamed list. A list of dictionaries that defines the tree structure.}

\item{height}{Numeric. The height of the Tree.}

\item{indent}{Numeric. Indent of the Tree.}

\item{node_icon_color}{Character. Color of collapse icons.}

\item{open_by_default}{Logical. Open Tree by default.}

\item{overscan_count}{Numeric. Overscan count.}

\item{padding}{Numeric. Padding.}

\item{padding_bottom}{Numeric. Bottom padding.}

\item{padding_top}{Numeric. Top padding.}

\item{rowClassName}{Character. Class name of the rows.}

\item{row_height}{Numeric. The height of the rows.}

\item{searchable}{Logical. Whether to include a search bar.}

\item{width}{Numeric. The width of the Tree.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

