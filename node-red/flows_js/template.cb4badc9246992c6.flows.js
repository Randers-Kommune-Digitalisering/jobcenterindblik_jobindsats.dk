const Node = {
  "id": "cb4badc9246992c6",
  "type": "template",
  "z": "5e932e623c7a6dbb",
  "g": "018131b92877fa90",
  "name": "Create new table",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 440,
  "y": 1100,
  "wires": [
    [
      "b4e7d169b5e99fc7"
    ]
  ],
  "_order": 138
}

Node.template = `
CREATE TABLE {{newtable}} (
{{{columns}}}
);
`

module.exports = Node;