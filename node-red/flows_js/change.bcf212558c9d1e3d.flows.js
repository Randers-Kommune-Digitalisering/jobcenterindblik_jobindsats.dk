const Node = {
  "id": "bcf212558c9d1e3d",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Get columnnames from data",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$keys(payload)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 480,
  "y": 680,
  "wires": [
    [
      "d07dbe2c91a28656"
    ]
  ],
  "_order": 46
}

module.exports = Node;