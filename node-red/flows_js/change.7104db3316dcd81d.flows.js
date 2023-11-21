const Node = {
  "id": "7104db3316dcd81d",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "f08f7a1f88557ecd",
  "name": "Compose SQL DROP TABLE statement",
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
  "x": 640,
  "y": 620,
  "wires": [
    [
      "6ba5f585bc5a4924"
    ]
  ],
  "_order": 41
}

module.exports = Node;