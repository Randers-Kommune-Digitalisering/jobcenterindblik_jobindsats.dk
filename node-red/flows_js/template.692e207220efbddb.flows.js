const Node = {
  "id": "692e207220efbddb",
  "type": "template",
  "z": "5e932e623c7a6dbb",
  "g": "b666146e16192d1e",
  "name": "Insert data",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 420,
  "y": 1200,
  "wires": [
    [
      "ef3971c39c0bc268"
    ]
  ],
  "_order": 151
}

Node.template = `
INSERT INTO {{newtable}} 
    ({{{columnnames}}})
VALUES {{{datastring}}}
`

module.exports = Node;