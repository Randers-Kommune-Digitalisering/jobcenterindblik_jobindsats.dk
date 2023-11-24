const Node = {
  "id": "066637948baf2a48",
  "type": "template",
  "z": "5e932e623c7a6dbb",
  "g": "80fb5b1757ce0cd1",
  "name": "SQL-query",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 410,
  "y": 740,
  "wires": [
    [
      "07f4c1fa22e90bbd"
    ]
  ],
  "_order": 143
}

Node.template = `
{{sql}}
`

module.exports = Node;