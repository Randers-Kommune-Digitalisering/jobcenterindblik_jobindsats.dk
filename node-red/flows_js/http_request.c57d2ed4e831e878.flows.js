const Node = {
  "id": "c57d2ed4e831e878",
  "type": "http request",
  "z": "971a7ae6df987a48",
  "g": "3af220965c158c58",
  "name": "Http-request (tilgælgelige dataperioder)",
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
  "x": 440,
  "y": 340,
  "wires": [
    [
      "8de7a38fc93395b2"
    ]
  ],
  "_order": 30
}

module.exports = Node;