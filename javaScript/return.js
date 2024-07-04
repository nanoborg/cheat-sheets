console.log('returns from functions')

// {}
// ()
// Single Expression

// Need a return or you will get undefined

// Curly Brackets - need return
const addTogether = (num1, num2) => {
    return num1 + num2; // <-- need 
}


// Parentheses - auto return over multiple lines. This will set the semi colon to end after the closing parentheses );
const carObject = (name) => ({
    make: name,
    color: 'white',
    doors: 4
})


// Single Expression - one line will automatically return with no syntax
const addTogether = (num1, num2) => num1 + num2;

