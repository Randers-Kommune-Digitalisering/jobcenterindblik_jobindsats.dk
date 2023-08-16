const Node = {
  "id": "cfca3863.d961d8",
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
  "y": 1380,
  "wires": [
    [
      "657bb57c.a3f98c"
    ]
  ],
  "_order": 49
}

Node.template = `
Apple
Orange
Banana
`

module.exports = Node;