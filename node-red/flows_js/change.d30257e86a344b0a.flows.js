const Node = {
  "id": "d30257e86a344b0a",
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
  "x": 940,
  "y": 340,
  "wires": [
    [
      "81e1189cb1c9435f"
    ]
  ],
  "icon": "node-red/db.svg",
  "_order": 28
}

module.exports = Node;