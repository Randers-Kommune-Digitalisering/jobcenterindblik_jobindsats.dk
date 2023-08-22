const Node = {
  "id": "8619029b2522b8f5",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Measure start time of transformation for metrics",
  "rules": [
    {
      "t": "set",
      "p": "metrics.transformation.start",
      "pt": "msg",
      "to": "",
      "tot": "date"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 395,
  "y": 660,
  "wires": [
    [
      "84e09f687ce4f10e"
    ]
  ],
  "icon": "node-red/timer.svg",
  "l": false,
  "_order": 42
}

module.exports = Node;