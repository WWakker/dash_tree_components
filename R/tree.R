# AUTO GENERATED FILE - DO NOT EDIT

#' @export
tree <- function(id=NULL, className=NULL, collapse_color=NULL, data=NULL, height=NULL, open_by_default=NULL, width=NULL) {
    
    props <- list(id=id, className=className, collapse_color=collapse_color, data=data, height=height, open_by_default=open_by_default, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Tree',
        namespace = 'dash_tree_components',
        propNames = c('id', 'className', 'collapse_color', 'data', 'height', 'open_by_default', 'width'),
        package = 'dashTreeComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
