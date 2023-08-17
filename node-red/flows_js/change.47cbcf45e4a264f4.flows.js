const Node = {
  "id": "47cbcf45e4a264f4",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "fe42eba3f9f607b1",
  "name": "Create datatypes and generate \\n the SQL statement from msg.data",
  "rules": [
    {
      "t": "set",
      "p": "datatypes",
      "pt": "msg",
      "to": "/* WARNING: The input objects must be uniform for this to work */\t/* Map over the first object in the input array */\t$map(payload[0], function($value, $key) {\t    /* Iterate over the key-value pairs of the object */\t    $each($value, function($value, $key) {\t        /* Create a new object with the key and MariaDB type */\t        {\t            \"key\": $key,\t            /* Map the detected datatype to a valid MariaDB datatype using a lookup table */\t            \"mariadb_type\": $lookup({\t                /* If the value is a string, set the MariaDB type to VARCHAR with a length equal to the maximum length of the values in the data */\t                \"string\": \"VARCHAR(\" & $max($map(payload, function($v, $k, $i) { $length($v[$key]) })) & \")\",\t                /* If the value is a number and is a whole number, set the MariaDB type to DOUBLE. Otherwise, set it to FLOAT */\t                \"number\": $floor($value) = $value ? \"DOUBLE\" : \"FLOAT\",\t                /* If the value is a boolean, set the MariaDB type to BOOLEAN */\t                \"boolean\": \"BOOLEAN\",\t                /* If the value is null, set the MariaDB type to NULL */\t                \"null\": \"NULL\"\t            }, $type($value))\t        }\t    })\t})",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "/* Start of the CREATE TABLE statement */\t\"CREATE TABLE if not exists mytable (\" &  /* Join the column names and their corresponding data types, separated by a comma */ $join(\t   datatypes.(\t       /* Surround the column name with backticks to properly escape it */         '`' &\t       key & '` ' &          /* Add the data type for the column */         mysql_type     \t   ),\t   \", \" \t) &  /* End of the CREATE TABLE statement */ \");\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 240,
  "y": 1020,
  "wires": [
    [
      "40b0404718cae26b"
    ]
  ],
  "_order": 38
}

module.exports = Node;