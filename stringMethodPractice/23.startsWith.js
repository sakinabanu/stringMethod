/*
STRING STARTSWITH() METHOD :
The startsWith() method returns true if a string begins with specified character(s). If not, it returns false.
        str.startsWith(searchString, position)
searchString - The characters to be searched for at the beginning of str.
position (optional) - The position in str to start searching for searchString. Default value is 0.
Returns true if the given characters are found at the beginning of the string.
Returns false if given characters are not found at the beginning of the string.
Note: The startsWith() method is case sensitive.
*/


const a = "My favourite language is Javascript."
console.log(a.startsWith("The")); // false
console.log(a.startsWith("My favourite")); // true


const Myself = "My name is Sakina Banu. I am of '22' years old"
console.log(Myself.startsWith("I")); // false
console.log(Myself.startsWith("My")); // true


const Myname = "Sakina Banu"
console.log(Myname.startsWith("S")); //true
console.log(Myname.startsWith("Sakina")); // true


const location = "Hyderabad"
console.log(location.startsWith("H")); // true
console.log(location.startsWith("h")); // false
