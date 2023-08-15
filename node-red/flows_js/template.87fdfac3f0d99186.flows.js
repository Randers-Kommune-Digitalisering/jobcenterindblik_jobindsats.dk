const Node = {
  "id": "87fdfac3f0d99186",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "Forespørgsel ↓\\n Opret tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 890,
  "y": 1120,
  "wires": [
    [
      "a5e27c6d536da1fc"
    ]
  ],
  "_order": 40
}

Node.template = `
{{#datatypes}}
  {{key}}{{#isNotLast}}, {{/isNotLast}}
{{/datatypes}}

`

module.exports = Node;