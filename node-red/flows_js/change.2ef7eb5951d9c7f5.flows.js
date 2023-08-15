const Node = {
  "id": "2ef7eb5951d9c7f5",
  "type": "change",
  "z": "971a7ae6df987a48",
  "d": true,
  "name": "Rens komma fra kolonner",
  "rules": [
    {
      "t": "set",
      "p": "columns",
      "pt": "msg",
      "to": "$substring(columns, 0, $length(columns) - 2)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 570,
  "y": 1160,
  "wires": [
    [
      "87fdfac3f0d99186"
    ]
  ],
  "_order": 39
}

module.exports = Node;