const Node = {
  "id": "235dec0f2444e882",
  "type": "template",
  "z": "3ae66a00a235e471",
  "name": "bil54",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 290,
  "y": 80,
  "wires": [
    [
      "dc0e480623b3afa6"
    ]
  ],
  "_order": 56
}

Node.template = `
{
    "table": "bil54",
    "format": "CSV",
    "variables": [
        {
            "code": "OMRÅDE",
            "values": [
                "730"
            ]
        },
        {
            "code": "Tid",
            "values": [
                "*"
            ]
        },
        {
            "code": "BILTYPE",
            "values": [
                "*"
            ]
        },
        {
            "code": "BRUG",
            "values": [
                "*"
            ]
        },
        {
            "code": "DRIV",
            "values": [
                "*"
            ]
        }
    ]
}
`

module.exports = Node;