# AUTO GENERATED FILE - DO NOT EDIT

#' @export
tree <- function(id=NULL, data=NULL, leaf_icon_color=NULL, open_by_default=NULL) {
    
    props <- list(id=id, data=data, leaf_icon_color=leaf_icon_color, open_by_default=open_by_default)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tree',
        namespace = 'dash_tree_components',
        propNames = c('id', 'data', 'leaf_icon_color', 'open_by_default'),
        package = 'dashTreeComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
