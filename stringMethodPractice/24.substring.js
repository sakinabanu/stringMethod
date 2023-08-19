/*
STRING SUBSTRING() METHOD :
The substring() method returns a specified part of the string between start and end indexes.
        str.substring(indexStart, indexEnd)
indexStart - The index of the first character to start including in the returned substring.
indexEnd (optional) - The index before which to stop extraction. (Exclusive) If omitted, it extracts till the end of the string.
Notes:
Any argument value < 0 is treated as 0.
Any argument value > str.length is treated as str.length.
Any NaN argument value is treated as 0.
If indexStart is greater than indexEnd, the two arguments are swapped, i.e. str.substring(a, b) will be str.substring(b, a).
Returns a new string containing the specified part of the given string.
Note: substring() does not change the original string.
*/


const a = "My favourite language is Javascript."
console.log(a.substring(0,12)); // My favourite
console.log(a.substring(13,21)); // language
console.log(a.substring(0,25)); // My favourite language is 
console.log(a.substring(24,35)); //  Javascript
console.log(a.substring(12,25)); //  language is 

const n = "Rose , Lily , Lotus , marigold , sunflower , daisy";
console.log(n.substring(0,4));
console.log(n.substring(7,11));
console.log(n.substring(14,19));
console.log(n.substring(22,30));
console.log(n.substring(33,42));
console.log(n.substring(45,50));
console.log(n.substring(0,11));
console.log(n.substring(14,30));
console.log(n.substring(33,50));
