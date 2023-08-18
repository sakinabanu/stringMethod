/*
STRING MATCH() METHOD :
The match() method returns the result of matching a string against a regular expression.
        str.match(regexp)
regexp - A regular expression object. (Argument is implicitly converted to RegExp if it is a non-RegExp object)
Note: If you don't give any parameters, match() returns [""].
*/


const Myself = "My name is Sakina Banu, I am of '22' years old"
const Myname = "Sakina Banu"
const location = "Hyderabad"
const age = "22"
const space = " "
const bracets = "[]"
const comma = ","
const symbol = " # "

console.log(Myself.match(Myname));
/* [
  'Sakina Banu',
  index: 11,
  input: "My name is Sakina Banu, I am of '22' years old.",
  groups: undefined
] */
console.log(Myself.match(location)); // null
console.log(Myself.match(age));
/* [
  '22',
  index: 33,
  input: "My name is Sakina Banu, I am of '22' years old.",
  groups: undefined
] */
console.log(Myself.match(space));
/* [
  ' ',
  index: 2,
  input: "My name is Sakina Banu, I am of '22' years old.",
  groups: undefined
] */
console.log(Myself.match(bracets)); // null
console.log(Myself.match(comma));
/* [
  ',',
  index: 22,
  input: "My name is Sakina Banu, I am of '22' years old",
  groups: undefined
] */
console.log(Myself.match(symbol)); // null
