# AUTO GENERATED FILE - DO NOT EDIT

#' @export
tree <- function(id=NULL, className=NULL, collapse_icon_color=NULL, data=NULL, height=NULL, indent=NULL, node_icon_color=NULL, open_by_default=NULL, overscan_count=NULL, padding=NULL, padding_bottom=NULL, padding_top=NULL, rowClassName=NULL, row_height=NULL, search_input_height=NULL, searchable=NULL, width=NULL) {
    
    props <- list(id=id, className=className, collapse_icon_color=collapse_icon_color, data=data, height=height, indent=indent, node_icon_color=node_icon_color, open_by_default=open_by_default, overscan_count=overscan_count, padding=padding, padding_bottom=padding_bottom, padding_top=padding_top, rowClassName=rowClassName, row_height=row_height, search_input_height=search_input_height, searchable=searchable, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tree',
        namespace = 'dash_tree_components',
        propNames = c('id', 'className', 'collapse_icon_color', 'data', 'height', 'indent', 'node_icon_color', 'open_by_default', 'overscan_count', 'padding', 'padding_bottom', 'padding_top', 'rowClassName', 'row_height', 'search_input_height', 'searchable', 'width'),
        package = 'dashTreeComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
