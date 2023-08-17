const Node = {
  "id": "6b0fae73c7215211",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "len",
      "pt": "msg",
      "to": "$number($length(payload))",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 690,
  "y": 1320,
  "wires": [
    []
  ],
  "_order": 52
}

module.exports = Node;