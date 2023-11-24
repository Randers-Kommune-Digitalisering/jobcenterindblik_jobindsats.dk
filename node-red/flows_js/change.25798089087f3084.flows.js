const Node = {
  "id": "25798089087f3084",
  "type": "change",
  "z": "5e932e623c7a6dbb",
  "g": "789f8d87a0aa7671",
  "name": "EDS_ConsumptionIndustry",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "EDS_ConsumptionIndustry",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "SELECT HourDK as tidspunkt, Branche as branche, ConsumptionkWh/1000 as forbrug_MWh from EDS_ConsumptionIndustry limit 999",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1480,
  "y": 280,
  "wires": [
    [
      "827f5643878e0def"
    ]
  ],
  "_order": 116
}

module.exports = Node;