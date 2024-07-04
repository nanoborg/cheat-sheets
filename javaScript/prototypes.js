// Prototypes are the object container inside every function.

// prototype is where key functions will be stored like the constructor function

// When creating a Class like object. The object declaration will pass to `this` and stored in the prototype along with any methods

function Object(name, age) {
    this.name, // object.name
    this.age
}

// `new` operator creates a new instance object aka prototype, this will inherit aka __proto__ any methods from the original prototype giving the new instance access to them.
newObject = new Object('Tim', 34)


// Creating a new method for the parent class. Using prototype will give any instance access to the method.
Object.prototype.newMethod = function() {
    console.log('New Method to all instances')
}

console.log(object.name) // 'Tim'



