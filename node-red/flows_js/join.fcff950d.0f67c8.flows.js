const Node = {
  "id": "fcff950d.0f67c8",
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
  "reduceExp": "$append($A,[{\t  \"name\": payload,\t  \"index\": $I\t}])",
  "reduceInit": "[]",
  "reduceInitType": "json",
  "reduceFixup": "",
  "x": 980,
  "y": 1900,
  "wires": [
    [
      "6d082a22.2fb214"
    ]
  ],
  "_order": 80
}

module.exports = Node;