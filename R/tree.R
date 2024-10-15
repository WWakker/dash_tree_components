# AUTO GENERATED FILE - DO NOT EDIT

#' @export
tree <- function(id=NULL, className=NULL, collapse_color=NULL, data=NULL, height=NULL, indent=NULL, open_by_default=NULL, padding=NULL, padding_bottom=NULL, padding_top=NULL, rowClassName=NULL, row_height=NULL, width=NULL) {
    
    props <- list(id=id, className=className, collapse_color=collapse_color, data=data, height=height, indent=indent, open_by_default=open_by_default, padding=padding, padding_bottom=padding_bottom, padding_top=padding_top, rowClassName=rowClassName, row_height=row_height, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tree',
        namespace = 'dash_tree_components',
        propNames = c('id', 'className', 'collapse_color', 'data', 'height', 'indent', 'open_by_default', 'padding', 'padding_bottom', 'padding_top', 'rowClassName', 'row_height', 'width'),
        package = 'dashTreeComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
