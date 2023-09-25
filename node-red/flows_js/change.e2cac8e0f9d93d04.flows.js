const Node = {
  "id": "e2cac8e0f9d93d04",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "f08f7a1f88557ecd",
  "name": "Generate INSERT statement",
  "rules": [
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "(\t/* Define a set of helper functions */\t$functions := {\t    /* The 'quote' function checks the type of a value.\t       If it's a number, it converts the value to a string withour adding quotes.\t       If it's not a number, it surrounds the value with single quotes. */\t    \"quote\": function($val) { $type($val) = \"number\" ? $string($val) : \"'\" & $val & \"'\" },\t    /* The 'parenthesize' function surrounds a string with parentheses. */\t    \"parenthesize\": function($str) { \"(\" & $str & \")\" }\t};\t\t/* Process the data */\t$data := {\t    /* Get the keys from the first object in the data, surround each key with backticks, and join them with commas. */\t    \"columns\" : data[0].$keys() ~> $map(function($v) { \"`\" & $v & \"`\" }) ~> $join(\", \"),\t    \t    /* For each object in the data, get the values, process each value with the 'quote' function, \t        and join them with commas. */\t    \"values\" : $map(data, function($val, $key) { \t        $each($val, function($val, $key) { \t            $functions.quote($val)\t        }) ~> $join(\", \") \t    /* Then, surround each group of values with parentheses and join them with commas. */    \t    }) ~> $map($functions.parenthesize) ~> $join(\", \")\t};\t\t/* Generate the SQL statement */\t\"INSERT INTO \" & tablename & \" ( \" & $data.columns & \") VALUES \" & $data.values\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 600,
  "y": 740,
  "wires": [
    [
      "d81c856e01177a69"
    ]
  ],
  "_order": 36
}

module.exports = Node;