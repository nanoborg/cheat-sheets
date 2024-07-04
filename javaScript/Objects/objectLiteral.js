console.log('Object literal')

// Object literal is the syntax used to assign a variable to an object. It does not need to use the constructor. This is the same for Array literals. 

// An object can created with out using the object constructor method

// New object using the constructor function
let obj = new object({name: 'Tim'})

// Object literal
let obj = {
    name: 'Tim'
}

// using a variable to set the value in an object

const carName = 'vw'

const car = {
    name: carName,
    color: 'white'
}

console.log(car.name) // vw
console.log(car.color)


