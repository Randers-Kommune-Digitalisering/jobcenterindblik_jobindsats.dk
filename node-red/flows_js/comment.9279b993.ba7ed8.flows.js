const Node = {
  "id": "9279b993.ba7ed8",
  "type": "comment",
  "z": "971a7ae6df987a48",
  "name": "Example: Reduce Mode",
  "info": "",
  "x": 500,
  "y": 1300,
  "wires": [],
  "_order": 53
}

Node.info = `
Join node can be used to reduce message sequence to single value.  In reduce mode, reduce operation for a sequence can be described using JSONata expression with following special variables:
- \`\$A\`: the accumulated value,
- \`\$I\`: index of the message in the sequence,
- \`\$N\`: number of messages in the sequence.

`

module.exports = Node;