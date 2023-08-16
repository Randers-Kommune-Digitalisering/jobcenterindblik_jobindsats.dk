const Node = {
  "id": "f01d3faac64639d8",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "dea84c3a244af9e9",
  "name": "Remove data prefix from columns in jobcenter data",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "data.(     /* Iterate over each object in the `data` array */     $merge(         /* Iterate over the keys of each object */         $map($keys($), function($v, $i, $a) {             {                 /* Split the key on the \":\" character and select the last element of the resulting array */                 ($split($v, \":\")[-1]):                  /* Use the `$lookup` function to retrieve the value for each key */                 $lookup($, $v)             }         })     ) )",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 930,
  "y": 640,
  "wires": [
    [
      "8d53466e4b287882"
    ]
  ],
  "info": "",
  "_order": 40
}

Node.info = `
This expression uses the \$map function to iterate over the keys of each object in the data array and apply a transformation function to each key. The transformation function uses the \$split function to split the key on the “:” character and then selects the last element of the resulting array using the [-1] index. This effectively removes all text before the “:” character in the key. The transformed key is then combined with its corresponding value using the \$lookup function to retrieve the value for each key. The \$merge function is then used to merge all of the transformed key-value pairs into a single object for each element in the data array.

The result of this expression will be an array of transformed objects.
`

module.exports = Node;