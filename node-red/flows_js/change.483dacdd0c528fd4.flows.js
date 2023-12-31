const Node = {
  "id": "483dacdd0c528fd4",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "ac68593c7f39b444",
  "name": "Shorten column names",
  "rules": [
    {
      "t": "set",
      "p": "parts.key",
      "pt": "msg",
      "to": "$substringAfter(parts.key, \": \")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 660,
  "y": 500,
  "wires": [
    [
      "c45f4b3f357eade1"
    ]
  ],
  "_order": 34
}

module.exports = Node;