const Node = {
  "id": "3ab74e82abed99a7",
  "type": "function",
  "z": "5e932e623c7a6dbb",
  "g": "cdba575c8249e3b4",
  "name": "Loop function",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 830,
  "y": 600,
  "wires": [
    [
      "1c8fd079d781f9a5",
      "999876b37553d9db"
    ]
  ],
  "_order": 127
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.sql=Object.values(msg.datasql)[msg.counter]
  msg.dataset = Object.keys(msg.datasql)[msg.counter].replaceAll("-", "_")
  msg.length=Object.values(msg.datasql).length
  return msg;
}

module.exports = Node;