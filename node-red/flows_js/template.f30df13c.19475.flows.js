const Node = {
  "id": "f30df13c.19475",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "data",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "plain",
  "template": "",
  "output": "json",
  "x": 590,
  "y": 1640,
  "wires": [
    [
      "71d7c0e0.c0316"
    ]
  ],
  "_order": 61
}

Node.template = `
[ 
    "Apple",
    "Orange",
    "Banana"
]
`

module.exports = Node;