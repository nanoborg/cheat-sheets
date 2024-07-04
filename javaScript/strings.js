console.log("strings");

// ====================================================
// String Template - back ticks ``
// ====================================================
console.log(`test ${test}`);

// ====================================================
// Variables - Test variables for this document
// ====================================================
integer = 1;
string = "";
var word = "string";

// ====================================================
// Methods 19
// ====================================================

string.split(""); // string can be split split into an array. using separator
string.slice(0, 3); // copy characters from start of end using negatives numbers
string.indexOf();
string.includes();
string.replace();
string.trim();
string.concat();
string.length; // get the length of the string
string.substring(0, 5); // starting position and end, this would give the first 5 chars
string.substr(0, 6); // starting position and length, good for getting 'n' of characters start or finish.
string.replace("x", "new"); // replace character with a new one
string.replace("x", array[0]);
string.charAt(0); // returns the character at specified index
string.charCodeAt(0); // returns the unicode for the character at specified index
string.endsWith(""); // matches the last character with a parameter, returns boolean
string.startsWith(""); // matches the first character with a parameter, returns boolean
string.match(""); // returns an array of properties relating to the substring using regex.
string.toUpperCase(); // transform string to upper case
string.toLowerCase(); // transform string to lower case
string.repeat(n); // repeat the string x amount of times.

String.fromCharCode(97); // get the ASCII character for that code. In this case 'a'

integer.toString(); // convert integer to string.

parseInt(); // takes a string as the first argument. Will convert to integer

parseFloat(); // takes a string as the first argument. Will convert to integer preserving decimal places.

Number("1"); // turn string to integer
