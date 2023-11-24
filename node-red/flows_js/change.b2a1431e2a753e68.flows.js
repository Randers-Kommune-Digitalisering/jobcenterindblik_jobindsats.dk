const Node = {
  "id": "b2a1431e2a753e68",
  "type": "change",
  "z": "3ae66a00a235e471",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "data",
      "tot": "flow",
      "dc": true
    },
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "tablename",
      "tot": "flow",
      "dc": true
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 840,
  "y": 480,
  "wires": [
    [
      "444256e42b5f9b53",
      "f68a38c953074ecb"
    ]
  ],
  "_order": 90
}

module.exports = Node;