# AUTO GENERATED FILE - DO NOT EDIT

#' @export
tree <- function(id=NULL, aria_label=NULL, className=NULL, collapse_icon_color=NULL, data=NULL, expanded_ids=NULL, height=NULL, indent=NULL, node_icon_color=NULL, open_by_default=NULL, padding=NULL, padding_bottom=NULL, padding_top=NULL, rowClassName=NULL, row_height=NULL, search_input_height=NULL, searchable=NULL, selected_id=NULL, width=NULL) {
    
    props <- list(id=id, aria_label=aria_label, className=className, collapse_icon_color=collapse_icon_color, data=data, expanded_ids=expanded_ids, height=height, indent=indent, node_icon_color=node_icon_color, open_by_default=open_by_default, padding=padding, padding_bottom=padding_bottom, padding_top=padding_top, rowClassName=rowClassName, row_height=row_height, search_input_height=search_input_height, searchable=searchable, selected_id=selected_id, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tree',
        namespace = 'dash_tree_components',
        propNames = c('id', 'aria_label', 'className', 'collapse_icon_color', 'data', 'expanded_ids', 'height', 'indent', 'node_icon_color', 'open_by_default', 'padding', 'padding_bottom', 'padding_top', 'rowClassName', 'row_height', 'search_input_height', 'searchable', 'selected_id', 'width'),
        package = 'dashTreeComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
