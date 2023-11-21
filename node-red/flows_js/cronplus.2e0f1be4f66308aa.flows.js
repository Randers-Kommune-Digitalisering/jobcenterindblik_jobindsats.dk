const Node = {
  "id": "2e0f1be4f66308aa",
  "type": "cronplus",
  "z": "971a7ae6df987a48",
  "g": "3af220965c158c58",
  "name": "Auto-loader",
  "outputField": "payload",
  "timeZone": "",
  "storeName": "",
  "commandResponseMsgOutput": "output1",
  "defaultLocation": "",
  "defaultLocationType": "default",
  "outputs": 1,
  "options": [
    {
      "name": "schedule1",
      "topic": "topic1",
      "payloadType": "default",
      "payload": "",
      "expressionType": "cron",
      "expression": "0 0 0 15 * ? *",
      "location": "",
      "offset": "0",
      "solarType": "all",
      "solarEvents": "sunrise,sunset"
    }
  ],
  "x": 190,
  "y": 80,
  "wires": [
    [
      "c57d2ed4e831e878"
    ]
  ],
  "_order": 43
}

module.exports = Node;