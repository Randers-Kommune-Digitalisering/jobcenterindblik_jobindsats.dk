const Node = {
  "id": "7d2ea6f6e20bb31c",
  "type": "template",
  "z": "5e932e623c7a6dbb",
  "g": "80fb5b1757ce0cd1",
  "name": "Opsæt kolonner",
  "field": "columns",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 990,
  "y": 840,
  "wires": [
    [
      "21d888a3bae05278"
    ]
  ],
  "_order": 147
}

Node.template = `
{{#flow.flatlist}}
{{name}} {{type}},
{{/flow.flatlist}}
`

module.exports = Node;