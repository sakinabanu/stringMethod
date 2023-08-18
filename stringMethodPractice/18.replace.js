/*
STRING REPLACE() METHOD :
The replace() method returns a new string with the specified string/regex replaced.
        str.replace(pattern, replacement)
pattern - either a string or a regex that is to be replaced
replacement - the pattern is replaced with this replacement (can be either a string or a function)
The replace() method returns a new string with the specified pattern replaced.
*/


const Myname = "Sakina Banu"
console.log(Myname.replace('S','A')); // Aakina Banu
console.log(Myname.replace('a','e')); // Sekina Banu
console.log(Myname.replace('k','y')); // Sayina Banu
console.log(Myname.replace('B','H')); // Sakina Hanu

const flower = "rose"
console.log(flower.replace('r','n')); // nose
console.log(flower.replace('s','c')); // roce
console.log(flower.replace('o','a')); // rase
console.log(flower.replace('e','y')); // rosy

