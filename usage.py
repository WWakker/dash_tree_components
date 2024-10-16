import dash_tree_components
from dash import Dash, callback, html, Input, Output

data = [
            {
    'id': "1",
    'name': "Asset quality",
    'children': [
      {
        'id': "c1-1",
        'name': "Non-performing loans",
        'href': '#'
      },
      {
        'id': "c1-2",
        'name': "Stage 2 loans",
        'href': '#'
      }
    ]
  },
            {
                'id': "2",
                'name': "Profitability",
                'children': [
                    {
                        'id': "c2-1",
                        'name': "Return on equity",
                        'href': '#'
                    },
                ]
            },
        ]

app = Dash(__name__)

app.layout = html.Div([
    dash_tree_components.Tree(
        id='tree',
        data=data,
        open_by_default=True,
        row_height=30,
        searchable=True,
    ),
    html.Div(id='output')
])


if __name__ == '__main__':
    app.run_server(debug=True)
