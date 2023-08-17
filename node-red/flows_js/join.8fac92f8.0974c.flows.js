const Node = {
  "id": "8fac92f8.0974c",
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
  "reduceExp": "$append($A,[payload])",
  "reduceInit": "[]",
  "reduceInitType": "json",
  "reduceFixup": "max($A)",
  "x": 980,
  "y": 1580,
  "wires": [
    [
      "5bf98f81.6db17"
    ]
  ],
  "_order": 64
}

module.exports = Node;