/*
STRING CODEPOINTAT() METHOD : (same as charCodeAt() method)
The codePointAt() method returns an integer that denotes the Unicode point value of a character in the string.
charCodeAt gives the asciii value of a given index element.
https://alpharithms.s3.amazonaws.com/assets/img/ascii-chart/ascii-table-alpharithms-scaled.jpg 
unicode point of character at index 1
It takes index and gives asscii value.
*/
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let result = alphabet.codePointAt(8);

console.log(result); // 73

for (let i = 0; i <= alphabet.length - 1; i++) {
  let out = alphabet.codePointAt(i);
  console.log(out); 
}
/*
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
*/
const color = "Orange"
console.log(color.charCodeAt(0)); // 79
console.log(color.charCodeAt(3)); // 110
console.log(color.charCodeAt(5)); // 101
