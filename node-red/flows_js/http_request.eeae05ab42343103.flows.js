const Node = {
  "id": "eeae05ab42343103",
  "type": "http request",
  "z": "971a7ae6df987a48",
  "g": "8f670397d0d3fc87",
  "name": "",
  "method": "POST",
  "ret": "txt",
  "paytoqs": "query",
  "url": "https://api.jobindsats.dk/v2/data/y30r21/csv/",
  "tls": "",
  "persist": false,
  "proxy": "",
  "insecureHTTPParser": false,
  "authType": "",
  "senderr": false,
  "headers": [
    {
      "keyType": "other",
      "keyValue": "Authorization",
      "valueType": "other",
      "valueValue": "${TEST_API_KEY}"
    }
  ],
  "x": 470,
  "y": 280,
  "wires": [
    [
      "f8222012250c3e6d",
      "0feb308d74a5aa60"
    ]
  ],
  "_order": 15
}

module.exports = Node;