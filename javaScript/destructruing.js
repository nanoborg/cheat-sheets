console.log('Destructuring Test')

// How to destructure array and objects.

// 1. Array

const numbers = [1,2,3,4,5]

let [a, b] = numbers
// It will automatically pull values from the start of the array.

let [a, , b] = numbers
// Skip an element by leaving a space in the assignment.

let [a, ...b] = numbers
// Assign the first element to 'a' and the rest of the array to 'b'




// 2. Objects

const car = {
    make: 'vw',
    model: 'golf',
    engine: 'turbo'
}

let {engine} = car
// Create engine variable using 'engine' as key to get the value from car object

let {make, model} = car
// Create two variables from the car object.

let {engine: typeOfEngine} = car
// Same process as before but, Re-assign engine to typeOfEngine.