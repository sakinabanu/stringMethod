/*
STRING SEARCH() METHOD :
The search() method searches for a match between a given string and a regular expression.
        str.search(regexp)
regExp - A regular expression object (Argument is implicitly converted to regExp if it is a non-regExp object)
Returns the index of the first match between the regular expression and the given string
Returns -1 if no match was found.
*/


const n = "Rose , Lily , Lotus , marigold , sunflower";

console.log(n.search("sunflower")); // 33
console.log(n.search("Lily")); // 7
console.log(n.search("jasmine")); // -1
console.log(n.search("daisy")); // -1
console.log(n.search("Lotus")); // 14
console.log(n.search("Rose")); // 0


