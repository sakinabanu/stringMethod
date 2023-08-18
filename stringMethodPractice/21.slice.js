/*
STRING SLICE() METHOD :
The slice() method extracts and returns a section of a string.
        str.slice(beginIndex, endIndex)
beginIndex - Starting index of the selection
endIndex (optional) - Ending index of the selection (Exclusive) By default, it extracts till the end of the string.
Returns a new string containing the extracted section of the string.
Note: The slice() method does not change the original string.
*/


const n = "Rose , Lily , Lotus , marigold , sunflower";
console.log(n.slice(0,10)); // Rose , Lil
console.log(n.slice(20,40)); // , marigold , sunflow
console.log(n.slice(4,15)); //  , Lily , L
console.log(n.slice(17,23)); // us , m
console.log(n.slice(37,42)); // lower

