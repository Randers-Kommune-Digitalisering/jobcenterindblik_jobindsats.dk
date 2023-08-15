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
  "x": 430,
  "y": 460,
  "wires": [
    [
      "b7944ae3e2da52fa"
    ]
  ],
  "_order": 18
}

module.exports = Node;