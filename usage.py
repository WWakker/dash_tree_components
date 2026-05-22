import dash_tree_components
from dash import Dash, Input, Output, callback, dcc, html

LOREM = (
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet '
    'nec mi sed condimentum. Cras consequat tortor non urna sodales, vitae '
    'pretium augue tincidunt. Suspendisse potenti. Etiam ac arcu ut nibh '
    'fermentum eleifend. Phasellus eget magna eget orci aliquet imperdiet.'
)

data = [
    {
        'id': '1',
        'name': 'Asset quality',
        'children': [
            {
                'id': 'npl',
                'name': 'Non-performing loans',
                'children': [
                    {'id': 'npl-ratio', 'name': 'Ratio', 'href': '#npl-ratio'},
                    {'id': 'npl-absolute', 'name': 'Absolute', 'href': '#npl-absolute'},
                    {'id': 'npl-coverage', 'name': 'Coverage ratio', 'href': '#npl-coverage'},
                    {'id': 'npl-flow', 'name': 'Flow rate', 'href': '#npl-flow'},
                ],
            },
            {
                'id': 'stage-loans',
                'name': 'Loan stages',
                'children': [
                    {'id': 'stage-1-loans', 'name': 'Stage 1', 'href': '#stage-1-loans'},
                    {'id': 'stage-2-loans', 'name': 'Stage 2', 'href': '#stage-2-loans'},
                    {'id': 'stage-3-loans', 'name': 'Stage 3', 'href': '#stage-3-loans'},
                ],
            },
            {'id': 'forbearance', 'name': 'Forbearance', 'href': '#forbearance'},
            {'id': 'cost-of-risk', 'name': 'Cost of risk', 'href': '#cost-of-risk'},
            {'id': 'impairment', 'name': 'Impairment charges', 'href': '#impairment'},
            {'id': 'watchlist', 'name': 'Watchlist loans', 'href': '#watchlist'},
            {'id': 'dpd', 'name': 'Days past due', 'href': '#dpd'},
        ],
    },
    {
        'id': '2',
        'name': 'Profitability',
        'children': [
            {'id': 'roe', 'name': 'Return on equity', 'href': '#roe'},
            {'id': 'roa', 'name': 'Return on assets', 'href': '#roa'},
            {'id': 'nim', 'name': 'Net interest margin', 'href': '#nim'},
            {'id': 'cir', 'name': 'Cost-to-income ratio', 'href': '#cir'},
            {
                'id': 'income',
                'name': 'Income breakdown',
                'children': [
                    {'id': 'income-nii', 'name': 'Net interest income', 'href': '#income-nii'},
                    {'id': 'income-fee', 'name': 'Fee & commission', 'href': '#income-fee'},
                    {'id': 'income-trading', 'name': 'Trading income', 'href': '#income-trading'},
                    {'id': 'income-other', 'name': 'Other operating income', 'href': '#income-other'},
                ],
            },
            {'id': 'eps', 'name': 'Earnings per share', 'href': '#eps'},
            {'id': 'pre-tax', 'name': 'Pre-tax profit', 'href': '#pre-tax'},
        ],
    },
    {
        'id': '3',
        'name': 'Capital',
        'children': [
            {
                'id': 'ratios',
                'name': 'Capital ratios',
                'children': [
                    {'id': 'cet1', 'name': 'CET1', 'href': '#cet1'},
                    {'id': 'tier-1', 'name': 'Tier 1', 'href': '#tier-1'},
                    {'id': 'total-capital', 'name': 'Total capital', 'href': '#total-capital'},
                ],
            },
            {'id': 'leverage', 'name': 'Leverage ratio', 'href': '#leverage'},
            {'id': 'rwa', 'name': 'Risk-weighted assets', 'href': '#rwa'},
            {
                'id': 'buffers',
                'name': 'Buffers',
                'children': [
                    {'id': 'ccyb', 'name': 'Countercyclical buffer', 'href': '#ccyb'},
                    {'id': 'gsib-buffer', 'name': 'G-SIB buffer', 'href': '#gsib-buffer'},
                    {'id': 'p2g', 'name': 'Pillar 2 guidance', 'href': '#p2g'},
                    {'id': 'p2r', 'name': 'Pillar 2 requirement', 'href': '#p2r'},
                ],
            },
            {'id': 'mda', 'name': 'MDA threshold', 'href': '#mda'},
        ],
    },
    {
        'id': '4',
        'name': 'Liquidity & funding',
        'children': [
            {'id': 'lcr', 'name': 'LCR', 'href': '#lcr'},
            {'id': 'nsfr', 'name': 'NSFR', 'href': '#nsfr'},
            {'id': 'ldr', 'name': 'Loan-to-deposit', 'href': '#ldr'},
            {'id': 'hqla', 'name': 'HQLA', 'href': '#hqla'},
            {
                'id': 'funding',
                'name': 'Funding mix',
                'children': [
                    {'id': 'funding-deposits', 'name': 'Customer deposits', 'href': '#funding-deposits'},
                    {'id': 'funding-wholesale', 'name': 'Wholesale funding', 'href': '#funding-wholesale'},
                    {'id': 'funding-secured', 'name': 'Secured funding', 'href': '#funding-secured'},
                ],
            },
            {'id': 'encumbrance', 'name': 'Asset encumbrance', 'href': '#encumbrance'},
        ],
    },
    {
        'id': '5',
        'name': 'Market risk',
        'children': [
            {'id': 'var', 'name': 'VaR', 'href': '#var'},
            {'id': 'svar', 'name': 'Stressed VaR', 'href': '#svar'},
            {'id': 'equity-exposure', 'name': 'Equity exposure', 'href': '#equity-exposure'},
            {'id': 'fx-exposure', 'name': 'FX exposure', 'href': '#fx-exposure'},
            {'id': 'irrbb', 'name': 'IRRBB', 'href': '#irrbb'},
            {'id': 'trading-book', 'name': 'Trading book size', 'href': '#trading-book'},
        ],
    },
    {
        'id': '6',
        'name': 'Operational risk',
        'children': [
            {'id': 'op-rwa', 'name': 'Op risk RWA', 'href': '#op-rwa'},
            {'id': 'fraud', 'name': 'Fraud losses', 'href': '#fraud'},
            {'id': 'it-incidents', 'name': 'IT incidents', 'href': '#it-incidents'},
            {'id': 'conduct-fines', 'name': 'Conduct fines', 'href': '#conduct-fines'},
            {'id': 'cyber', 'name': 'Cyber events', 'href': '#cyber'},
        ],
    },
]


def collect_leaves(nodes, trail=()):
    for n in nodes:
        path = trail + (n['name'],)
        if 'children' in n:
            yield from collect_leaves(n['children'], path)
        else:
            yield n['id'], ' — '.join(path)


SECTIONS = list(collect_leaves(data))

app = Dash(__name__)

content_sections = [
    html.Section(
        [html.H2(title, id=sid)] + [html.P(LOREM) for _ in range(3)],
        style={'marginBottom': '40px'},
    )
    for sid, title in SECTIONS
]

app.layout = html.Div([
    html.Div(
        [
            html.Div(
                dash_tree_components.Tree(
                    id='tree',
                    data=data,
                    row_height=30,
                    searchable=True,
                ),
                style={'flex': 1, 'minHeight': 0, 'backgroundColor': '#f0faff'},
            ),
            html.Label('Clicked node:', htmlFor='clicked-node',
                       style={'marginTop': '10px'}),
            dcc.Input(id='clicked-node', type='text', value='',
                      readOnly=True, style={'width': '100%'}),
        ],
        style={
            'width': '25%',
            'height': '80vh',
            'position': 'sticky',
            'top': 0,
            'padding': '10px',
            'boxSizing': 'border-box',
            'borderRight': '1px solid #ddd',
            'display': 'flex',
            'flexDirection': 'column',
        },
    ),
    html.Div(content_sections, style={'flex': 1, 'padding': '10px 20px'}),
], style={'display': 'flex', 'alignItems': 'flex-start'})


@callback(Output('clicked-node', 'value'), Input('tree', 'selected_id'))
def show_selected(selected_id):
    return selected_id or ''


if __name__ == '__main__':
    app.run(debug=True)
