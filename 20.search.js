//it take regular expersion and retrun index of first apperence

const str="The search() method searches for a match between a given string and a regular expression."

const exp=/[A-z]/
console.log(str.search(exp));//0
//passing non-regression
console.log(str.search("method"));//i will retrun index 13
console.log(str.search("for"));//29

