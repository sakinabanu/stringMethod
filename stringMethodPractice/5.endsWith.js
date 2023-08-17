/*
STRING ENDSWITH() METHOD :
The endsWith() method returns true if a string ends with the specified string. If not, the method returns false.
         str.endsWith(searchString, length);
The endsWith() method takes two parameters:
searchString - The characters to be searched for at the end of str.
length (optional) - It is used as the length of str where searchString is searched. Default value is str.length.

The endswith() method returns:
true - if the given characters are found at the end of the string.
false - if given characters are not found at the end of the string.
*/
const a = "My favourite language is Javascript."
console.log(a.endsWith("is Javascript"));// false
console.log(a.endsWith("language is JAVASCRIPT.")); // false
console.log(a.endsWith("script.")); // true
console.log(a.endsWith("Java")); // false
console.log(a.endsWith("Javascript.", 36)); // true
console.log(a.endsWith("Javascript.", 29)); // false
console.log(a.endsWith("My", 2 )); // true
console.log(a.endsWith("My favourite", 12)); // true


const b = "My name is Sakina Banu"

console.log(b.endsWith("is Sakina"));// false
console.log(b.endsWith("My name is Banu")); // false
console.log(b.endsWith("ina Banu")); // true
console.log(b.endsWith("nu")); // true
console.log(b.endsWith("u", 36)); // true
console.log(b.endsWith("is Saki", 15)); // true
console.log(b.endsWith("is Saki", 13)); // false
console.log(b.endsWith("ame is ", 11)); // true


