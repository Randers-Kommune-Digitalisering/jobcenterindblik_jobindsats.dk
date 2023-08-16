const Node = {
  "id": "faab89ef8586e7c9",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "fe42eba3f9f607b1",
  "name": "clean up secrets",
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
  "x": 880,
  "y": 960,
  "wires": [
    []
  ],
  "_order": 37
}

module.exports = Node;