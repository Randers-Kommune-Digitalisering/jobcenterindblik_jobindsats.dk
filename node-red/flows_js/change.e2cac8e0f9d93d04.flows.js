const Node = {
  "id": "e2cac8e0f9d93d04",
  "type": "change",
  "z": "971a7ae6df987a48",
  "d": true,
  "name": "Generate INSERT statement",
  "rules": [
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "(\t  $columns := payload[0].$keys() ~> $map(function($v) { \"`\" & $v & \"`\" }) ~> $join(\", \");\t\t  $values := payload ~> $reduce(function($acc, $v) { \t  $acc & \"(\" & $v.$each(function($v) { $v }) & \"), \"\t}, \"\");\t\t  \"INSERT INTO \" & tablename & \" ( \" & $columns & \") VALUES \" & $values\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 260,
  "y": 1040,
  "wires": [
    []
  ],
  "_order": 57
}

module.exports = Node;