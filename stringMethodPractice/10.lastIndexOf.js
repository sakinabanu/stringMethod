/*
STRING LASTINDEXOF() METHOD :
The lastIndexOf() method returns the last index of occurence of a given substring in the string.
        str.lastIndexOf(searchValue, fromIndex);
substr- The value to search for in the given string.
fromIndex (optional) - The index to start searching the string backwards. By default it is +Infinity.
The last index of the value in the string if it is present at least once.
It reads from right to left.
Also when given index value is given it takes it as last of string and searches from there.
Note: The method returns -1 if substring is not found in the given string.
*/


const a = "My favourite language is Javascript."
console.log(a.lastIndexOf("a")); // 28
console.log(a.lastIndexOf("v")); // 27
console.log(a.lastIndexOf("A")); // -1
console.log(a.lastIndexOf("M")); // 0
console.log(a.lastIndexOf("J")); // 25
console.log(a.lastIndexOf("t")); // 34 
console.log(a.lastIndexOf("a" , 20)); // 18
console.log(a.lastIndexOf("a" , 2)); // -1
console.log(a.lastIndexOf("u" , 19)); // 17
console.log(a.lastIndexOf("u" , 15)); // 7
console.log(a.lastIndexOf(" " , 20)); // 12


