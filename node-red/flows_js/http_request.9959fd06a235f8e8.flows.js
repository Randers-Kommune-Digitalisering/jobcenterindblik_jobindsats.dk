const Node = {
  "id": "9959fd06a235f8e8",
  "type": "http request",
  "z": "971a7ae6df987a48",
  "g": "eb4a10a8b24cb174",
  "name": "",
  "method": "GET",
  "ret": "txt",
  "paytoqs": "ignore",
  "url": "https://api.jobindsats.dk/v2/tables/csv",
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
  "x": 430,
  "y": 100,
  "wires": [
    [
      "a7f0759aa6dc6e64"
    ]
  ],
  "_order": 16
}

module.exports = Node;