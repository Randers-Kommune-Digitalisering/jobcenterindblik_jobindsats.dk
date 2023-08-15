const Node = {
  "id": "3b44910af8738fc8",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Store data in flow.data",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "flow",
      "to": "payload",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 900,
  "y": 600,
  "wires": [
    [
      "4edcc5ddb578e65b"
    ]
  ],
  "icon": "node-red/db.svg",
  "_order": 27
}

module.exports = Node;