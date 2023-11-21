const Node = {
  "id": "6aeb8b956510de2a",
  "type": "change",
  "z": "3ae66a00a235e471",
  "g": "4e325ed4084b5f12",
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
  "x": 1110,
  "y": 820,
  "wires": [
    []
  ],
  "_order": 77
}

module.exports = Node;