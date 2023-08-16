/* The localeCompare() method checks if a given string comes before, after, 
or is equivalent as another string in sort order.*/

const str="z".localeCompare("a");
console.log(str);//1

const str1="a".localeCompare("z");
console.log(str1);//-1

const str2="z".localeCompare("z");
console.log(str2);//0