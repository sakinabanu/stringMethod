//Split is used to split the string into character array.

const string="hanzala"

console.log(string.split(""));//['h','a','n','z','a','l','a']

const str1="shaikh is a good boy. javascript is the scripting language"
console.log(str1.split("."));//[ 'shaikh is a good boy', ' javascript is the scripting language' ]


const str2="java ; python ; c++"
let pattern=/\s*(?:;|$)\s*/
const hey= str2.split(pattern)
console.log(hey);


