const Node = {
  "id": "2",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "mytable",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "columns",
      "pt": "msg",
      "to": "$keys(payload[0])",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "datatypes",
      "pt": "msg",
      "to": "$map(\t   msg.columns,\t   function($v, $i, $a) { $type(payload[0][$v]) }\t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "columndefinitions",
      "pt": "msg",
      "to": "$join($map($zip(msg.columns, msg.datatypes), function($v, $i, $a) { $v[0] & ' ' & $v[1] }), ', ')",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "'CREATE TABLE ' & msg.tablename & ' (' & msg.columndefinitions & ')'",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 460,
  "y": 800,
  "wires": [
    [
      "3576edeecbbb87af",
      "6118c3b5532890ba"
    ]
  ],
  "_order": 28
}

module.exports = Node;