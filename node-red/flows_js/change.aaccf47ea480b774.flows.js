const Node = {
  "id": "aaccf47ea480b774",
  "type": "change",
  "z": "971a7ae6df987a48",
  "d": true,
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "datatypes",
      "pt": "msg",
      "to": "/* WARNING: The input objects must be uniform for this to work */\t/* Map over the first object in the input array */\t$map(data[0], function($v, $k) {\t    /* Iterate over the key-value pairs of the object */\t    $each($v, function($v, $k) {\t        /* Create a new object with the key and MySQL type */\t        {\t            \"key\": $k,\t            /* Map the detected datatype to a valid MySQL datatype using a lookup table */\t            \"mysql_type\": $lookup({\t                \"string\": $type($v) = \"string\" and $match($v, /^\\d+,\\d+$/) ? \"FLOAT\" : \"VARCHAR\",\t                \"number\": \"DOUBLE\",\t                \"boolean\": \"BOOLEAN\",\t                \"null\": \"NULL\"\t            }, $type($v))\t        }\t    })\t})",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "\"CREATE TABLE myTable (\" & $join(datatypes.('`' & key & '` ' & mysql_type), \", \") & \");\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 420,
  "y": 1060,
  "wires": [
    [
      "91f1f305dad455c8"
    ]
  ],
  "_order": 34
}

module.exports = Node;