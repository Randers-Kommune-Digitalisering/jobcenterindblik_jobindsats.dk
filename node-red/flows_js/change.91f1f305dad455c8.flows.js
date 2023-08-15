const Node = {
  "id": "91f1f305dad455c8",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "c6d2a8be4c1cd89c",
  "name": "Get database settings from enviroment vars",
  "rules": [
    {
      "t": "set",
      "p": "host",
      "pt": "msg",
      "to": "DB_HOST",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "port",
      "pt": "msg",
      "to": "DB_PORT",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "database",
      "pt": "msg",
      "to": "DB_DATABASE",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "username",
      "pt": "msg",
      "to": "DB_USER",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "password",
      "pt": "msg",
      "to": "DB_PASS",
      "tot": "env",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 990,
  "y": 800,
  "wires": [
    [
      "dbfc95971fd2d70b"
    ]
  ],
  "_order": 32
}

module.exports = Node;