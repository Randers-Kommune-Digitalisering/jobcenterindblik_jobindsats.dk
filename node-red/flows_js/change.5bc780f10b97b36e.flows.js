const Node = {
  "id": "5bc780f10b97b36e",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Create datatypes and generate the SQL statement",
  "rules": [
    {
      "t": "set",
      "p": "datatypes",
      "pt": "msg",
      "to": "/* WARNING: The input objects must be uniform for this to work */\t/* Map over the first object in the input array */\t$map(data[0], function($v, $k) {\t    /* Iterate over the key-value pairs of the object */\t    $each($v, function($v, $k) {\t        /* Create a new object with the key and MySQL type */\t        {\t            \"key\": $k,\t            /* Map the detected datatype to a valid MySQL datatype using a lookup table */\t            \"mysql_type\": $lookup({\t                \"string\": $type($v) = \"string\" and $match($v, /^\\d+,\\d+$/) ? \"FLOAT\" : \"VARCHAR(255)\",\t                \"number\": \"DOUBLE\",\t                \"boolean\": \"BOOLEAN\",\t                \"null\": \"NULL\"\t            }, $type($v))\t        }\t    })\t})",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "/* Start of the CREATE TABLE statement */\t\"CREATE TABLE myTable (\" &  /* Join the column names and their corresponding data types, separated by a comma */ $join(\t   datatypes.(\t       /* Surround the column name with backticks to properly escape it */         '`' &\t       key & '` ' &          /* Add the data type for the column */         mysql_type     \t   ),\t   \", \" \t) &  /* End of the CREATE TABLE statement */ \");\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 210,
  "y": 1000,
  "wires": [
    []
  ],
  "_order": 38
}

module.exports = Node;