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
      "to": "\"INSERT INTO \" & tablename & \" (\" & $join($keys(payload[0]), \", \") & \") VALUES \" &\t $join(\t   payload.$map(\t       function($v, $i, $a) {\t           return \"(\" & $join(\t               $v.$map(\t                   function($v, $i, $a) { return \"'\" & $v & \"'\"}\t               ),\t               \", \"\t           ) & \")\"\t       }\t   ),\t   \", \"\t)",
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