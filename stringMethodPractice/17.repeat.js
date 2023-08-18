/*
STRING REPEAT() METHOD :
The repeat() method creates a new string by repeating the given string a specified number of times and returns it.
        str.repeat(count)
count - An integer between 0 and +Infinity, indicating the number of times to repeat the string.
Returns a new string containing the specified number of copies of the given string.
Note: repeat() raises RangeError if repeat count is negative, infinity, or overflows maximum string size.
*/


const s = "Happy brithday! "
console.log(s.repeat(4)); // Happy brithday! Happy brithday! Happy brithday! Happy brithday! 
console.log(s.repeat(20)); // Happy brithday! Happy brithday! Happy brithday! Happy brithday! Happy brithday! Happy brithday! Happy brithday! Happy brithday! Happy brithday! Happy brithday! Happy brithday! Happy brithday! Happy brithday! Happy brithday! Happy brithday! Happy brithday! Happy brithday! Happy brithday! Happy brithday! Happy brithday! 

const a = "java"
console.log(a.repeat(10)); // javajavajavajavajavajavajavajavajavajava
console.log(a.repeat(3)); // javajavajava

