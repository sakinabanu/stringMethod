/*
STRING CHARAT() METHOD :
The charAt() method returns the character at the specified index in a string.
It gives the values of given index from the string.
Index ===> value
*/
let names = "SAKINA' 'BANU";
let o = names.charAt(0)
console.log(o);  // S
let p = names.charAt(3)
console.log(p);  // I
let q = names.charAt(6)
console.log(q);  // '
let r = names.charAt(9)
console.log(r);  // B

// We can also use this method 
console.log(names[1]); // A
console.log(names[5]); // A
console.log(names[8]); // '

// let e = 123444321
// let f = e.charAt(0)
// console.log(f); // error : it doesnto accept numbers because they are not strings.

let d = "123444321";
let a = d.charAt(2); 
let b = d.charAt(5); 
let c = d.charAt(8); 
console.log(a); // 3
console.log(b); // 4
console.log(c); // 1