const Node = {
  "id": "c57d2ed4e831e878",
  "type": "http request",
  "z": "971a7ae6df987a48",
  "name": "",
  "method": "POST",
  "ret": "txt",
  "paytoqs": "ignore",
  "url": "https://api.jobindsats.dk/v2/tables/y30r21/json/",
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
  "x": 290,
  "y": 280,
  "wires": [
    [
      "8de7a38fc93395b2"
    ]
  ],
  "_order": 4
}

module.exports = Node;