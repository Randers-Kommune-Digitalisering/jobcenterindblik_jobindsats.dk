const Node = {
  "id": "4ae91b5020050cc2",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Measure when transformation is done and calculate duration metric",
  "rules": [
    {
      "t": "set",
      "p": "metrics.transformation.done",
      "pt": "msg",
      "to": "",
      "tot": "date"
    },
    {
      "t": "set",
      "p": "metrics.transformation.duration",
      "pt": "msg",
      "to": "\"Duration: \" & (metrics.transformation.done-metrics.transformation.start) & \" miliseconds\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1175,
  "y": 440,
  "wires": [
    [
      "ff0731ad9918635e"
    ]
  ],
  "icon": "node-red/timer.svg",
  "l": false,
  "_order": 38
}

module.exports = Node;