const Node = {
  "id": "8de7a38fc93395b2",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Konverterer streng til JSON-streng",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$substring(payload,1,$length(payload)-1)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 540,
  "y": 320,
  "wires": [
    [
      "d28d4eeb0d5cb2e6"
    ]
  ],
  "_order": 21
}

module.exports = Node;