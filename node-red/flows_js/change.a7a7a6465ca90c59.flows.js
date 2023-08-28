const Node = {
  "id": "a7a7a6465ca90c59",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "de283ae5f6a3e969",
  "name": "DROP existing table \\n if it exists",
  "rules": [
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "/* DROP the table if it exists */ \"DROP TABLE IF EXISTS \" & tablename",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 680,
  "y": 1620,
  "wires": [
    [
      "7931e3e5d044a061",
      "37ae827fbb181e3e"
    ]
  ],
  "_order": 70
}

module.exports = Node;