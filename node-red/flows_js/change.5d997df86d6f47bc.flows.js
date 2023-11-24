const Node = {
  "id": "5d997df86d6f47bc",
  "type": "change",
  "z": "3ae66a00a235e471",
  "name": "Extract table name",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "flow",
      "to": "payload.table",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 330,
  "y": 300,
  "wires": [
    [
      "3911f9ba84e3262b"
    ]
  ],
  "_order": 84
}

module.exports = Node;