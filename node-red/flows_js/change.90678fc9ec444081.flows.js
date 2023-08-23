const Node = {
  "id": "90678fc9ec444081",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "511acc4de97f097a",
  "name": "Get database settings \\n from enviroment vars \\n and set query DROP TABLE Y30R21",
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
    },
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "DROP TABLE Y30R21",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 610,
  "y": 1540,
  "wires": [
    [
      "0a5ac97b558a0ce3"
    ]
  ],
  "_order": 54
}

module.exports = Node;