const Node = {
  "id": "f68a38c953074ecb",
  "type": "change",
  "z": "3ae66a00a235e471",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "\"dst_\"&tablename",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1070,
  "y": 480,
  "wires": [
    [
      "149cd91053bda155"
    ]
  ],
  "_order": 68
}

module.exports = Node;