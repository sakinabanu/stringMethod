/*
STRING FROMCHARCODE() METHOD :
The fromCharCode() method returns a string created from the specified sequence of ASCII Table or UTF-16 code units.
The syntax of the fromCharCode() method is:
        String.fromCharCode(num1, ..., numN)
The fromCharCode() method, being a static method, is called using the String class name.
(num1, ..., numN) -  A sequence of ASCII Table values.
fromCharCode is used to convert the ASCII numbers to characters which are assigned to the particular numbers.
https://alpharithms.s3.amazonaws.com/assets/img/ascii-chart/ascii-table-alpharithms-scaled.jpg 
*/


let str = String.fromCharCode(72, 69, 76, 76, 79);
// printing characters from the given values
console.log(str);


const Myname = String.fromCharCode(83, 97, 107, 105, 110, 97);
console.log(Myname);


const Surname = String.fromCharCode(66, 97, 110, 117);
console.log(Surname);


const Myage = String.fromCharCode(50, 50);
console.log(Myage);


const Myphone = String.fromCharCode(55, 55, 48, 50, 54, 55, 52, 55, 52, 52);
console.log(Myphone);