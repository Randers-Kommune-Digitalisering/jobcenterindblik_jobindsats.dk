const Node = {
  "id": "805c900a.c6b7c",
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
  "reduceRight": true,
  "reduceExp": "$append($A,[payload])",
  "reduceInit": "[]",
  "reduceInitType": "json",
  "reduceFixup": "",
  "x": 980,
  "y": 1740,
  "wires": [
    [
      "f8be3623.b8e358"
    ]
  ],
  "_order": 72
}

module.exports = Node;