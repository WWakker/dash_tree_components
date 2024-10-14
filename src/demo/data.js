const data = [
  {
    id: "1",
    name: "Asset quality",
    iconColor: '#424242',
    children: [
      {
        id: "c1-1",
        name: "Non-performing loans",
        iconColor: '#424242',
        children: [
          {id: "c1-1-1",
           name: "ratio",
           iconColor: '#424242',
           href: '#'
           },
           {id: "c1-1-2",
           name: "absolute",
           iconColor: '#424242',
           href: '#'
           }
        ]
      },
      {
        id: "c1-2",
        name: "Stage 2 loans",
        iconColor: '#424242',
        href: '#'
      }
    ]
  },
  {
    id: "2",
    name: "Profitability",
    iconColor: '#424242',
    children: [
      {
        id: "c2-1",
        name: "Return on equity",
        iconColor: '#424242',
        href: '#'
      },
    ]
  },
];

export default data
