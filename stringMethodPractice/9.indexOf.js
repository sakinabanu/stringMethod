/*
STRING INDEXOF() METHOD :
The string indexOf() method returns the index of the first occurence of the substring in a string.
        str.indexOf(searchValue, fromIndex);
searchValue - The value to search for in the string. If no string is provided explicitly, "undefined" will be searched.
fromIndex (optional) - The index to start the search at. By default it is 0. If fromIndex < 0, the search starts at index 0.
It returns the first index of the value in the string if it is present at least once.
I returns -1 if the value is not found in the string.
Note: The indexOf() method is case sensitive.
*/


const a = "My favourite language is Javascript."
console.log(a.indexOf("a")); // 4
console.log(a.indexOf("v")); // 5
console.log(a.indexOf("A")); // -1
console.log(a.indexOf("M")); // 0
console.log(a.indexOf("J")); // 25
console.log(a.indexOf("t")); // 10 
console.log(a.indexOf("a" , 20)); // 26
console.log(a.indexOf("a" , 2)); // 4
console.log(a.indexOf("u" , 19)); // -1
console.log(a.indexOf("u" , 15)); // 17
console.log(a.indexOf(" " , 20)); // 21

