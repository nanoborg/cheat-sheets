// Maths methods
Math.random() - //return random number between 0 - 1. Math.random() * X to get a range..
  Math.floor() - //good for using with arrays as it will round to a lower number. Math.floor(Math.random()*2)
  Math.ceil() - // will always round up
  Math.round() - // will round to the nearest number.
  Math.abs();

Math.pow(x, y) - // to the power of
  // can also be 5**5 to get the same result

  Math.sqrt(); // square root

parseInt(); // takes a string as the first argument. Will convert to integer

parseFloat(); // takes a string as the first argument. Will convert to integer preserving decimal places.

Number("1"); // turn string to integer

const num = "1" + num; // this will also convert a string to a integer

// =================
// Modulus - % - remainder after division.
// =================
//
// 24 hour time
19 % 12; // remainder 7

// isEven
4 % 2 === 0; // true

// leap years
year % 4 === 0 || (year % 100 !== 0 && year % 4 === 0);
