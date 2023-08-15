const Node = {
  "id": "7ae759fcca49ed12",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "c6d2a8be4c1cd89c",
  "name": "clean",
  "rules": [
    {
      "t": "delete",
      "p": "host",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "port",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "database",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "username",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "password",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "sql",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1250,
  "y": 840,
  "wires": [
    [
      "627cb1595da9432f"
    ]
  ],
  "_order": 33
}

module.exports = Node;