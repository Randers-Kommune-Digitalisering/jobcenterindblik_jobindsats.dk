const Node = {
  "id": "efcff8e01904e992",
  "type": "change",
  "z": "3ae66a00a235e471",
  "name": "bol102",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "bol102",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "query",
      "pt": "msg",
      "to": "{\"table\":\"BOL102\",\"format\":\"CSV\",\"variables\":[{\"code\":\"AMT\",\"values\":[\"730\"]},{\"code\":\"OPVARMNING\",\"values\":[\"*\"]},{\"code\":\"Tid\",\"values\":[\"*\"]},{\"code\":\"ANVENDELSE\",\"values\":[\"*\"]},{\"code\":\"OPFØRELSESÅR\",\"values\":[\"*\"]},{\"code\":\"BEBO\",\"values\":[\"*\"]}]}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 370,
  "y": 120,
  "wires": [
    [
      "2851f8f6621c1a9a"
    ]
  ],
  "_order": 106
}

module.exports = Node;