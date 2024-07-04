console.log("object methods");

const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

Object.keys(car);
// returns keys ['type', 'model', 'color']

Object.values(car);
// returns values ['Fiat', '500', 'white']

Object.entries(car);
// returns array of key & value [Array(2), Array(2), Array(2)]
// 0: (2) ['type', 'Fiat']
// 1: (2) ['model', '500']
// 2: (2) ['color', 'white']

// for...in, loop to return each value in the object
for (const key in obj) {
  console.log(obj[key]); // "Fiat" 500 "white"
}
