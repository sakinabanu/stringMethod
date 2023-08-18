/*
STRING MATCHALL() METHOD :
The matchAll() method returns an iterator of results after matching a string against a regular expression.
        str.matchAll(regexp)
regex - A regular expression object (Argument is implicitly converted to regex if it is a non-regex object)
Note: If regex object does not have the /g flag, a TypeError will be thrown.
The g flag is for global search which means this flag indicates that we test the regular expression against all the matches in the string.
Note: The returned iterator's each item will have the following additional properties:
    groups- An object of named capturing groups having keys as the names and values as the captured matches.
    index- The index of search where the result was found.
    input - A copy of the search string.
*/     


const sentence = "I am learning Java from Hyderabad , I am a mediate at Javascript & I know that Java & Javascript are totally opposite."
const Pname = /Java[a-z]*/g
const locations = "Hyderabad"
const space = " "
const bracets = "[]"
const comma = ","
const symbol = " # "

let result = sentence.matchAll(Pname);
console.log(Array.from(result));
/*
[
  [
    'Java',
    index: 14,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    'Javascript',
    index: 53,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    'Java',
    index: 78,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    'Javascript',
    index: 85,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ]
]
*/
let result1 = sentence.matchAll(space);
console.log(Array.from(result1));
/*
[
  [
    ' ',
    index: 1,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 4,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 13,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 18,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 23,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 34,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 36,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 39,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 41,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 49,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 52,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 63,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 65,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 67,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 72,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 77,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 82,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 84,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 95,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 99,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ],
  [
    ' ',
    index: 107,
    input: 'I am learning Java from Hyderabad, I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ]
]
*/
let result2 = sentence.matchAll(locations);
console.log(Array.from(result2));
/*
[
  [
    'Hyderabad',
    index: 24,
    input: 'I am learning Java from Hyderabad , I am a mediate at Javascript & I know that Java & Javascript are totally opposite.',
    groups: undefined
  ]
]
*/