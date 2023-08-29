const Node = {
  "id": "545c90b81b148523",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "dea84c3a244af9e9",
  "name": "Set static tablename \\n get data from flow",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "Y30R21",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "data",
      "tot": "flow",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 240,
  "y": 480,
  "wires": [
    [
      "8619029b2522b8f5"
    ]
  ],
  "_order": 24
}

module.exports = Node;