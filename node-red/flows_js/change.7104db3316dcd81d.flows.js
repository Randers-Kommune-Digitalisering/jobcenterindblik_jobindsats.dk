const Node = {
  "id": "7104db3316dcd81d",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "f08f7a1f88557ecd",
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
  "x": 220,
  "y": 820,
  "wires": [
    [
      "214961241538a58d",
      "ee5ab2c4a5187fbf"
    ]
  ],
  "_order": 55
}

module.exports = Node;