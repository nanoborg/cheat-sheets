const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

// change car type value
car.type = "vw";

// add new key and value
car.doors = 4;

const entry = "doors";

// access value with a variable
car[entry]; // 4

// delete a key value pair, returns "true"
delete car.doors;
