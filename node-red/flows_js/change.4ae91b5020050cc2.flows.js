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
  "x": 965,
  "y": 680,
  "wires": [
    [
      "6c62d497ca0b17af",
      "0e146a3063d45d0a"
    ]
  ],
  "icon": "node-red/timer.svg",
  "l": false,
  "_order": 87
}

module.exports = Node;