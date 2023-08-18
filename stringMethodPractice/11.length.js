/*
STRING LENGTH() METHOD :
The length property returns the number of characters in a string.
        str.length
The length property does not take any parameters.
Note: The String.length property returns the code units in the ASCII table string format. Some rare string characters require two code units to be represented. Due to this, the length property might not always return the number of characters.
*/


const a = "good morning"
console.log(a.length); // 12


const b = "My name is Sakina Banu"
console.log(b.length); // 22


const c = ""
console.log(c.length); // 0


const d = " "
console.log(d.length); // 1


const e = "............................................."
console.log(e.length); //45