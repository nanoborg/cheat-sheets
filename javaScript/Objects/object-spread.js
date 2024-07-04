console.log("object spread");

console.log("object assign");
const car = {
  make: "vw",
  country: "germany",
};

// create new object using the same key value pairs and adding color
const carDetails = { ...car, color: "white" };
