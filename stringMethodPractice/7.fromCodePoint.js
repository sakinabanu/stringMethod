/*
STRING FROMCODEPOINT() METHOD : (Its the same as fromCharCode method)
The fromCodePoint() method returns a string created by using the given sequence of ASCII Table or unicode code points.
The syntax of the fromCodePoint() method is:
        String.fromCodePoint(num1, ..., numN)
The fromCodePoint() method, being a static method, is called using the String class name.
(num1, ..., numN) - A sequence of code values from ASCII table
https://alpharithms.s3.amazonaws.com/assets/img/ascii-chart/ascii-table-alpharithms-scaled.jpg 
*/


let greet = String.fromCodePoint(72, 101, 108, 108, 111);
// printing the characters of the values of ASCII Table.
console.log(greet); // Hello


const college = String.fromCodePoint(67,111,108,108,101,103,101,58);
console.log(college); // College:


const Cname = String.fromCodePoint(76,111,114,100,115,32,73,110,115,116,105,116,117,116,101,32,111,102,32,69,110,103,103,46,32,38,32,84,101,99,104,46);
console.log(Cname); // Lords Institute of Engg. & Tech.

