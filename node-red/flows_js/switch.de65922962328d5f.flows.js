const Node = {
  "id": "de65922962328d5f",
  "type": "switch",
  "z": "5e932e623c7a6dbb",
  "g": "53b8689cf243c43d",
  "name": "Open Data Done?",
  "property": "opendataDone",
  "propertyType": "global",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 640,
  "y": 200,
  "wires": [
    [
      "8d6ba9e52ec92ff2"
    ],
    [
      "b87783269ee5fd37",
      "fddf843fd93f59fe"
    ]
  ],
  "_order": 156
}

module.exports = Node;