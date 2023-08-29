const Node = {
  "id": "1a52460a0033b633",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "ac68593c7f39b444",
  "name": "Transform number strings",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "    $type(payload) = \"string\" and $match(payload, /^-?[0-9]+,[0-9]+$/) ? $number($replace(payload, \",\", \".\")) : payload",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 660,
  "y": 460,
  "wires": [
    [
      "483dacdd0c528fd4"
    ]
  ],
  "_order": 26
}

module.exports = Node;