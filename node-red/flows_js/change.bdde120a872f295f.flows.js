const Node = {
  "id": "bdde120a872f295f",
  "type": "change",
  "z": "5e932e623c7a6dbb",
  "g": "789f8d87a0aa7671",
  "name": "opendata_biogas",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "opendata_biogas",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "SELECT  cast(     concat(aarstal,\"-01-01\") as DATE    ) as År,   aarstal, husdyrsgoedning_biogas, lokalt_potentiale, andel   from opendata_biogas ",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1450,
  "y": 240,
  "wires": [
    [
      "827f5643878e0def"
    ]
  ],
  "_order": 114
}

module.exports = Node;