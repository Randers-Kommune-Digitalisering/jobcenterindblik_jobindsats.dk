const Node = {
  "id": "2c47d9d9a9d0e924",
  "type": "template",
  "z": "5e932e623c7a6dbb",
  "g": "abac934caf35d9eb",
  "name": "Drop existing table (if exits)",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 470,
  "y": 1000,
  "wires": [
    [
      "8e218bae1e5a019b"
    ]
  ],
  "_order": 133
}

Node.template = `
DROP TABLE IF EXISTS {{newtable}}
`

module.exports = Node;