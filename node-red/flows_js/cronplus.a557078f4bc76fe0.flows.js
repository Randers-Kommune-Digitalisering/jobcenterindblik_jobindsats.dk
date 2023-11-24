const Node = {
  "id": "a557078f4bc76fe0",
  "type": "cronplus",
  "z": "5e932e623c7a6dbb",
  "g": "53b8689cf243c43d",
  "name": "Scheduled run",
  "outputField": "payload",
  "timeZone": "",
  "persistDynamic": false,
  "commandResponseMsgOutput": "output1",
  "outputs": 1,
  "options": [
    {
      "name": "schedule1",
      "topic": "topic1",
      "payloadType": "default",
      "payload": "",
      "expressionType": "cron",
      "expression": "0 0 4 ? * TUE,WED,THU,FRI,SAT *",
      "location": "",
      "offset": "0",
      "solarType": "all",
      "solarEvents": "sunrise,sunset"
    }
  ],
  "x": 130,
  "y": 240,
  "wires": [
    [
      "152d7d891a5517bc"
    ]
  ],
  "_order": 154
}

module.exports = Node;