const Node = {
  "id": "7c8a4816.500ed8",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "data",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "plain",
  "template": "",
  "output": "json",
  "x": 700,
  "y": 1420,
  "wires": [
    [
      "7f64da1f.611014"
    ]
  ],
  "_order": 55
}

Node.template = `
[
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]
`

module.exports = Node;