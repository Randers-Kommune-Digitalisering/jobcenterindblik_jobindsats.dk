const Node = {
  "id": "115f04280bda94e6",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Shorten column names",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$substringAfter(payload, \": \")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 810,
  "y": 680,
  "wires": [
    [
      "c45f4b3f357eade1"
    ]
  ],
  "_order": 48
}

module.exports = Node;