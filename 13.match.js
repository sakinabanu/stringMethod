//Returns an Array containing the matches, one item for each match.
//Returns null if no match is found.

const str="javaScript and java is a cool language and";
const exp=/java/
const exp1=/and/g //g is used mention all the ands present in string str
console.log(str.match(0))//null
console.log(str.match(exp));
console.log(str.match(exp1));

const str1="My name is Albert. YOUR NAME is Soyuj."

const re=/name\sis\s[a-z][A-Z]+\./gi;

console.log(str1.match(re));

