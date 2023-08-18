/*
STRING LOCALECOMPARE() METHOD :
The localeCompare() method checks if a given string comes before, after, or is equivalent as another string in sort order.
        str.localeCompare(compareStr, locales, options)
compareStr - The string against which str is compared.
locales and options (optional) - These arguments customize function by specifying what formatting conventions to use.
-1 : if the reference string is sorted before compareStr.
0  : if two strings are equivalent.
1  : if the reference string is sorted after compareStr.
https://alpharithms.s3.amazonaws.com/assets/img/ascii-chart/ascii-table-alpharithms-scaled.jpg 
It take the ascii values and compare them using those values.
*/


const a = "g"
console.log(a.localeCompare("G")); // -1
console.log(a.localeCompare("g")); // 0
console.log(a.localeCompare("0")); // 1


const b = "G"
console.log(b.localeCompare("A")); // 1
console.log(b.localeCompare("-")); // 1
console.log(b.localeCompare("@")); // 1
console.log(b.localeCompare("x")); // -1


const c = "G"
console.log(c.localeCompare("G")); // 0
console.log(c.localeCompare("a")); // 1
console.log(c.localeCompare("A")); // 1
console.log(c.localeCompare(" ")); // 1


const d = "$"
console.log(d.localeCompare("&")); // 1
console.log(d.localeCompare("*")); // 1
console.log(d.localeCompare("!")); // 1
console.log(d.localeCompare("$")); // 0


const e = "g"
console.log(e.localeCompare("z")); // -1
console.log(e.localeCompare("Z")); // -1


const f = "u"
console.log(f.localeCompare("R")); // 1