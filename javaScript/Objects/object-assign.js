console.log("object assign");
const car = {
  make: "vw",
};

const location = {
  country: "germany",
};

// assign will merge or combing the data from two different objects.
const carDetails = Object.assign(car, location);

// same thing as above but adding another key and value
const carDetails = Object.assign(car, location, { color: "white" });

// making a new copy of carDetails
const copyCarDetails = Object.assign({}, carDetails);
