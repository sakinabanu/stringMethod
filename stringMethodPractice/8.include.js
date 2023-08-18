/*
STRING INCLUDE() METHOD :
The includes() method checks if one string can be found inside another string.
         str.includes(searchString, position)
searchString - A string to be searched for within string.
position (optional) - The position within staring to begin searching for searchString. By default, it is 0.
Returns true if searched String is found anywhere within string or else it returns false.   
*/


const message = "JavaScript is intresting language";
// It checks if words in the message is in the string or not.
console.log(message.includes("Java")); // true
console.log(message.includes("ipt is")); // true
console.log(message.includes("Javascript")); // false
console.log(message.includes("LANGUAGE")); // false
console.log(message.includes("intresting", 13 )); // true
console.log(message.includes("JavaScript is", 0 )); // true
console.log(message.includes("JavaScript is", 12 )); // false


const a = "My favourite language is Javascript."
console.log(a.endsWith("is Javascript"));// false
console.log(a.endsWith("my")); // false
console.log(a.endsWith(".")); // true
console.log(a.endsWith("My")); // false
console.log(a.endsWith("Javascript.", 26)); // false
console.log(a.endsWith("Javascript.", 36)); // true
console.log(a.endsWith("My", 2 )); // true
console.log(a.endsWith("My favourite", 0)); // false
