
module DashTreeComponents
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.8"

include("jl/tree.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_tree_components",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_tree_components.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_tree_components.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
