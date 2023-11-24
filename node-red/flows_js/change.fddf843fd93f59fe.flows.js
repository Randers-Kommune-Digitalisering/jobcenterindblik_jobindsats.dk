const Node = {
  "id": "fddf843fd93f59fe",
  "type": "change",
  "z": "5e932e623c7a6dbb",
  "g": "53b8689cf243c43d",
  "name": "global => payload",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "opendataDone",
      "tot": "global"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 880,
  "y": 240,
  "wires": [
    [
      "c581321e1eb0b147"
    ]
  ],
  "_order": 158
}

module.exports = Node;