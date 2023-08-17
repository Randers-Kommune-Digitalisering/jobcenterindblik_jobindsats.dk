const Node = {
  "id": "6c62d497ca0b17af",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Combine Values in List",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "(\t  /* Define a custom function to extract the values from an object */\t  $values := function($object) {\t    /* Use the $each function to iterate over each key-value pair in the object */\t    $each($object, function($value) { \t      /* Return the value of the current key-value pair */\t      $value\t    })\t  };\t  /* Define a custom function to flatten an array of arrays */\t  $flatten := function($array) {\t    /* Use the $reduce function to concatenate all the arrays into a single array */\t    $reduce($array, function($acc, $value) { \t      /* Append the current array to the accumulator */\t      $append($acc, $value)\t    })\t  };\t  /* Start with the input array in the \"payload\" variable */\t  payload\t    /* Use the $map function to apply the custom $values function to each object in the input array */\t    ~> $map(function($v) { \t      /* Extract the values from the current object */\t      $values($v) \t    })\t    /* Use the custom $flatten function to flatten the resulting nested array into a single array */\t    ~> $flatten()\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 600,
  "y": 820,
  "wires": [
    [
      "9c712a1d184fa0e4"
    ]
  ],
  "_order": 86
}

module.exports = Node;