/*
STRING PADEND() METHOD :
The padEnd() method pads the current string with another string to the end.
        str.padEnd(targetLength, padString)
targetLength - The length of the final string after the current string has been padded.
padString (optional) - The string to pad the current string with. Its default value is " ".
Note : If padString is too long, it will be truncated to meet targetLength.
For targetLength < str.length, the string is returned unmodified.
Returns a string of the specified targetLength with padString applied to the end of the current string.
*/


const a ="Code";
console.log(a.padEnd(10," class")); // Code class
console.log(a.padEnd(10,"s")); // Codessssss
console.log(a.padEnd(10,"*")); // Code******
console.log(a.padEnd(10,"/")); // Code//////


const b = "book";
console.log(b.padEnd(20,"book")); // bookbookbookbookbook
console.log(b.padEnd(10,"kkkssssssssssss")); // bookkkksss
console.log(b.padEnd(9,"ings*")); // bookings*
console.log(b.padEnd(6,"*")); // book**
console.log(b.padEnd(5,"!")); // book!