const Node = {
  "id": "5fde318f.23897",
  "type": "join",
  "z": "971a7ae6df987a48",
  "name": "",
  "mode": "reduce",
  "build": "string",
  "property": "payload",
  "propertyType": "msg",
  "key": "topic",
  "joiner": ",",
  "joinerType": "str",
  "accumulate": false,
  "timeout": "",
  "count": "2",
  "reduceRight": false,
  "reduceExp": "$A+payload",
  "reduceInit": "0",
  "reduceInitType": "num",
  "reduceFixup": "$A/$N",
  "x": 980,
  "y": 1420,
  "wires": [
    [
      "50977eaf.0490b"
    ]
  ],
  "_order": 56
}

module.exports = Node;