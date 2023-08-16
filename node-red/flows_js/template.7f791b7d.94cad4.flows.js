const Node = {
  "id": "7f791b7d.94cad4",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "data",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "plain",
  "template": "",
  "output": "str",
  "x": 590,
  "y": 1500,
  "wires": [
    [
      "bdfa12b9.3fbbc"
    ]
  ],
  "_order": 55
}

Node.template = `
Apple
Orange
Banana
`

module.exports = Node;