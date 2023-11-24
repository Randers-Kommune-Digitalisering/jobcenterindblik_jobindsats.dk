const Node = {
  "id": "f01b07260aab2c0a",
  "type": "change",
  "z": "5e932e623c7a6dbb",
  "g": "cdba575c8249e3b4",
  "name": "increase counter",
  "rules": [
    {
      "t": "set",
      "p": "counter",
      "pt": "msg",
      "to": "$$.counter+1",
      "tot": "jsonata",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 600,
  "y": 600,
  "wires": [
    [
      "3ab74e82abed99a7"
    ]
  ],
  "_order": 124
}

module.exports = Node;