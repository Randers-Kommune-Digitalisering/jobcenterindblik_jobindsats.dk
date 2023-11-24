const Node = {
  "id": "2325333d3556eb67",
  "type": "change",
  "z": "5e932e623c7a6dbb",
  "g": "80fb5b1757ce0cd1",
  "name": "Opsæt dataskabelon",
  "rules": [
    {
      "t": "set",
      "p": "dataskabelon",
      "pt": "flow",
      "to": "payload ~> $merge()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 470,
  "y": 820,
  "wires": [
    [
      "ec3d69e36ae9e822"
    ]
  ],
  "_order": 145
}

module.exports = Node;