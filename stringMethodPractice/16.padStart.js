/*
STRING PADSTART() METHOD :
The padStart() method pads the current string with another string to the start.
        str.padStart(targetLength, padString)
targetLength - The length of the final string after the current string has been padded.
padString (optional) - The string to pad the current string with. Its default value is " ".
Note : If padString is too long, it will be truncated from the end to meet targetLength.
For targetLength < str.length, the string is returned unmodified.
Returns a String of the specified targetLength with padString applied from the start.
*/

const a ="Code";
console.log(a.padStart(10,"class ")); // class Code
console.log(a.padStart(10,"s")); // ssssssCode
console.log(a.padStart(10,"*")); // ******Code
console.log(a.padStart(10,"/")); // //////Code


const b = "book";
console.log(b.padStart(20,"book")); // bookbookbookbookbook
console.log(b.padStart(10,"mmyyyy")); // mmyyyybook
console.log(b.padStart(9,"loves")); // lovesbook
console.log(b.padStart(6,"*")); // **book
console.log(b.padStart(5,"!")); // !book

