const Node = {
  "id": "9bee04e4af6b101e",
  "type": "inject",
  "z": "971a7ae6df987a48",
  "g": "8f670397d0d3fc87",
  "name": "Request-body",
  "props": [
    {
      "p": "payload"
    }
  ],
  "repeat": "",
  "crontab": "",
  "once": false,
  "onceDelay": 0.1,
  "topic": "",
  "payload": "{\"area\":\"*\",\"period\":[\"2020QMAT02\",\"2020QMAT04\",\"2021QMAT02\",\"2021QMAT04\",\"2022QMAT02\",\"2022QMAT04\"],\"_ygrp_y30r21\":[\"Ydelsesgrupper i alt\",\"A-dagpenge mv.\",\"Sygedagpenge mv.\",\"Kontanthjælp mv.\"]}",
  "payloadType": "json",
  "x": 130,
  "y": 440,
  "wires": [
    [
      "eeae05ab42343103"
    ]
  ],
  "_order": 15
}

module.exports = Node;