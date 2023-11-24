const Node = {
  "id": "569c302fab8c2bec",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "f08f7a1f88557ecd",
  "name": "Compose SQL CREATE TABLE statement",
  "rules": [
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "/* This function composes a SQL statement string that creates the database table. It depends on a valid datatypes input  */ \t\"CREATE TABLE \" & tablename & \" (\" & $join(\t   datatypes.('`' & key & '` ' & mariadb_datatype),\t   \", \"\t) & \");\"\t",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 650,
  "y": 680,
  "wires": [
    [
      "d263e0e74d046899"
    ]
  ],
  "info": "",
  "_order": 65
}

Node.info = `
This code takes an array of objects (the ‘payload’) and generates a new array of objects where each object has a ‘key’ property (the original key)
 and a ‘mariadb_type’ property (the corresponding MariaDB data type).

The data type is determined based on the type of the original value and whether it matches certain conditions 
(e.g., if it’s a string, number, boolean, null, or ISO date). 
 - For strings, a VARCHAR data type with a length of 255 is used. 
 - For numbers, either DOUBLE or FLOAT is used depending on whether it’s a whole number or not. 
 - For booleans and null values, BOOLEAN and NULL are used respectively.
 - Finally, if the value matches an ISO date format, DATE is used.
`

module.exports = Node;