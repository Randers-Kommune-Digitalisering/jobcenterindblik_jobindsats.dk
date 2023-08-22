const Node = {
  "id": "e41738029d1d1c23",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "8f670397d0d3fc87",
  "name": "Danner data-request",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"area\": \"*\",\t    \"period\": payload[0].Period,\t    \"_ygrp_y30r21\": [\t        \"Ydelsesgrupper i alt\",\t        \"A-dagpenge mv.\",\t        \"Sygedagpenge mv.\",\t        \"Kontanthjælp mv.\"\t    ]\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 220,
  "y": 460,
  "wires": [
    [
      "eeae05ab42343103"
    ]
  ],
  "_order": 28
}

module.exports = Node;