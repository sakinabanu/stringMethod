/*
STRING TRIM() METHOD :
The trim() method removes whitespace from both ends of a string.
        str.trim() 
The trim() method does not take in any parameters.
trim() Return Value
Returns a new string representing the str stripped of whitespace from both ends.
Notes:
Whitespace is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
The trim() method does not change the original string.
*/



const n = " Rose                        ";
console.log(n.trim()); // Rose