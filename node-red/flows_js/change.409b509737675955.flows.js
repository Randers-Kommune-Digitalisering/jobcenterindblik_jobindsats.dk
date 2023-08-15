const Node = {
  "id": "409b509737675955",
  "type": "change",
  "z": "971a7ae6df987a48",
  "d": true,
  "name": "Remove data prefix from columns in jobcenter data",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "{\t   \"data\": data.(\t       $merge(\t           $map(\t               $keys($),\t               function($v, $i, $a) {\t                   {\t                       ($split($v, \": \")[-1]): $lookup($, $v)                 \t                   }             \t               }\t           )         \t       )     \t   ) \t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 290,
  "y": 1300,
  "wires": [
    [
      "5dc457a6f69dafb1"
    ]
  ],
  "_order": 40
}

module.exports = Node;