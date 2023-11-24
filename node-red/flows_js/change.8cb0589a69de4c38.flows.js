const Node = {
  "id": "8cb0589a69de4c38",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "ac68593c7f39b444",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "payload",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1010,
  "y": 500,
  "wires": [
    [
      "4ae91b5020050cc2"
    ]
  ],
  "_order": 69
}

module.exports = Node;