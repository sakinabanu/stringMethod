/*
STRING SPLIT() METHOD :
The split() method divides a string into a list of substrings and returns them as an array.
        str.split(separator, limit)
separator (optional) - The pattern (string or regular expression) describing where each split should occur.
limit (optional) - A non-negative integer limiting the number of pieces to split the given string into.
Returns an Array of strings, split at each point where the separator occurs in the given string.
Note: The split() method does not change the original string.
*/


const n = "Rose|Lily|Lotus|marigold|sunflower";
console.log(n.split("|")); // [ 'Rose', 'Lily', 'Lotus', 'marigold', 'sunflower' ]


const o = "ghgghghghghghgggghgghghghggggghgh"
console.log(o.split("h"));
/*[
  'g',    'gg',    'g',
  'g',    'g',     'g',
  'gggg', 'gg',    'g',
  'g',    'ggggg', 'g',
  ''
]*/
console.log(o.split(""));
/*[
  'g', 'h', 'g', 'g', 'h', 'g',
  'h', 'g', 'h', 'g', 'h', 'g',
  'h', 'g', 'g', 'g', 'g', 'h',
  'g', 'g', 'h', 'g', 'h', 'g',
  'h', 'g', 'g', 'g', 'g', 'g',
  'h', 'g', 'h'
]*/


const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(alphabet.split(""));
/*[
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
]*/

