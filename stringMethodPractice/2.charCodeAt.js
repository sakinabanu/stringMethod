/*
STRING CHARCODEAT() METHOD :
The charCodeAt() method returns an integer between 0 and 65535 representing the ASCII TABLE or UTF-16 code unit at the given index.
charCodeAt gives the asciii value of a given index element.
https://alpharithms.s3.amazonaws.com/assets/img/ascii-chart/ascii-table-alpharithms-scaled.jpg 
*/


let names = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let result = names.charCodeAt(0);
console.log(result); // 65

for (let i = 0; i <= names.length - 1; i++) {
  let out = names.charCodeAt(i);
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


const color = "Red"
console.log(color.charCodeAt(0)); // 82
console.log(color.charCodeAt(1)); // 101
console.log(color.charCodeAt(2)); // 100
