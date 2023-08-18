/*
STRING REPLACEALL() METHOD :
The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
        str.replaceAll(pattern, replacement)
pattern - either a substring or a regex that is to be replaced
replacement - the pattern is replaced with this replacement (can be either a string or a function)
The replaceAll() method returns a new string, with all matches of a pattern replaced by a replacement.
Note: A RegExp without the global ("g") flag will throw a TypeError.
*/


const Myname = "Sakina Banu"
console.log(Myname.replaceAll('a','e')); // Sekine Benu


const s = "sunaunzunduneunguntunwunvun"
console.log(s.replaceAll('u','a')); // sanaanzandaneangantanwanvan


const j = "boost and rebot"
console.log(j.replaceAll('o','u')); // buust and rebut
console.log(j.replaceAll('a','e')); // boost end rebot
console.log(j.replaceAll('t','l')); // boosl and rebol

