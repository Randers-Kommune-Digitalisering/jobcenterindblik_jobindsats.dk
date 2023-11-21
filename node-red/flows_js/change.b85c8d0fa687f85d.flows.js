const Node = {
  "id": "b85c8d0fa687f85d",
  "type": "change",
  "z": "3ae66a00a235e471",
  "g": "4e325ed4084b5f12",
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
  "x": 600,
  "y": 640,
  "wires": [
    [
      "2a33ec1ce77c8469"
    ]
  ],
  "_order": 71
}

module.exports = Node;