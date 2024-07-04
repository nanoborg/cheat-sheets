

// Function Declaration - added to the global scope and able to be hoisted, called before it has been read. 

function add(num) {
    return num + 2;
}


// Function Expression
const add = function(num) {
    return num + 2;
}

// Arrow Function Expression
const add = (num) => {
    return num + 2;
}

// Two arguments
const addTogether = (num1, num2) => {
    return num1 + num2;
}


// Concise Arrow Function Expression
const add = num => num + 2;