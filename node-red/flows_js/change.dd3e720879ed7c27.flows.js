const Node = {
  "id": "dd3e720879ed7c27",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "f08f7a1f88557ecd",
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1150,
  "y": 800,
  "wires": [
    []
  ],
  "_order": 43
}

module.exports = Node;