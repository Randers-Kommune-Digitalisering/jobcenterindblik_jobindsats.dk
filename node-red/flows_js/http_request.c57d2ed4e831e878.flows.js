const Node = {
  "id": "c57d2ed4e831e878",
  "type": "http request",
  "z": "971a7ae6df987a48",
  "name": "",
  "method": "GET",
  "ret": "obj",
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
  "x": 370,
  "y": 280,
  "wires": [
    [
      "bbb249d5ea503241"
    ]
  ],
  "_order": 4
}

module.exports = Node;