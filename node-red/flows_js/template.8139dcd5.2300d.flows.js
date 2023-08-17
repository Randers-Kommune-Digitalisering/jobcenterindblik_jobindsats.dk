const Node = {
  "id": "8139dcd5.2300d",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "data",
  "field": "payload",
  "fieldType": "msg",
  "format": "text",
  "syntax": "plain",
  "template": "",
  "output": "str",
  "x": 700,
  "y": 1900,
  "wires": [
    [
      "c6ff515e.f95fd"
    ]
  ],
  "_order": 79
}

Node.template = `
Apple
Orange
Banana
Kiwi
`

module.exports = Node;