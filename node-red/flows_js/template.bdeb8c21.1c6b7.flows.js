const Node = {
  "id": "bdeb8c21.1c6b7",
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
  "y": 1760,
  "wires": [
    [
      "c0d43ff4.291d8"
    ]
  ],
  "_order": 67
}

Node.template = `
{ 
    "Apple": 80,
    "Orange": 100,
    "Banana": 50
}
`

module.exports = Node;