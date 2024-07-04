console.log("Array info")
// =========================
// Popular Array Methods 25
// =========================
.forEach() // automatically loop over elements
.map() // return a new array looping over every element
.filter() // return a new array from matching certain conditions
.reduce() // return a new object by condensing the information into a new form
Array.from() // create a shallow copy of an array or turn a string into an array,
.includes() // generic equal to comparison on every element in the array, return boolean
.push() // add an element to the last of the array
.pop() // remove element from the last position
.shift() // add an element to the first position of the array
.unshift() // remove and element from the first position of the array
.slice() // choose elements to copy from an array, positions including, upto
.splice() // position to insert new element, number to replace, 'element'
.indexOf() // get the index of first matched element, return -1 if none match
.join() // joint array using a separator
.flat() // put all nested array elements on the same level
.flatMap() // new array looping over nested array and keeping to the same level
... // spread, allows to separately spread out every element in array.
.reverse() // reveres the order of the array
.sort() // default ascending order, call back fn and use a - b comparison for numbers
.length // property containing the num of elements in the array
.every() // call back fn, return true if every element matches the logic.
.some() // call back fn, return true if some of the elements match the logic
.concat() // join 2 arrays by adding the array to be added as the argument
.find() // call back fn, to find the first element that matches some condition
.fill()

// duplicates

let letters = ["A", "B", "A", "B", "C"]

// method 1.
// This is best used for arrays that are larger
let noDuplicates = [...new Set(letters)] 

// method 2.
// indexOf(letter) will ignore any other instances of the letter. Therefor matching the next first instance of characters with the index.

letters.filter((letter, index) => {
    return letters.indexOf(letter) === index
}) 


arr = []
numbers = [1,2,3,4,5]
numbers2 = [1,2,3,4,5]

var add = function (num) {
    num + 1
    return
}

arr.forEach(add) //loop through the array


// =================
// Methods
// =================

arr.join('') // turn array into string using the separator

arr.concat(numbers2)// create new array joining two array into one

arr.indexOf("string") // return index of a certain element, if not available return -1

arr.pop(0) // remove element using index number

arr.push()// push what ever data into the last position

arr.shift(0)// remove element from start of the array
arr.split('')

arr.unshift()// add element to start of the array

arr.slice(0,3)//create new array. include and not include.

arr.splice(index, 1, "string", ojbect or variable)

arr.sort()// converts strings - default ascending order, numbers require a - b comparison through a function.

arr.reverse()// reverse the order of the array

arr.includes("element")//return boolean value if in array.

arr.filter( fn )// new array, if a condition is evaluated true

Array.isArray(arr) // check to see if array is an array boolean

arr.findIndex(elem => elem.id === id) // find the index within the array that matches the condition

// =================
// Loops
// =================
for (let i = 0; i < 10; i++) {
    return arr[i] + 1
}

for (const elem of array) {
    console.log(elem)
}


// =================
// forEach 
// =================
arr.forEach(function(elem, index, array) {
    console.log(`elem:${elem}, index: ${index}, arry: ${array}`)
    
    })

arr.forEach(elem => {
    console.log(elem)
});


// =================
// map
// =================
arr.map(elem => {condition {
    console.log(elem)
}}

// =================
// filter
// =================
arr.filter(elem => elem === true) // filter in true
arr.filter(elem => !elem === false) // filter in false


// =================
// reduce
// =================

// Total
arr.reduce((acc, cur) => { // iterate through the array with an accumulator(total), current
    return acc + cur
})

// Tally
.reduce((total,currentValue) => {
    total[currentValue] = (total[currentValue] || 0) + 1
}, {})

// Flat
.reduce((total, currentValue) => {
    return total.concat(currentValue)
}, [])

// Filter
.reduce((total, curr) => {
    if (curr > 10) {
        total.push(curr)
    }
    return total
}, [])

// Map 
.reduce((total, curr) => {
   total.push(curr * 2) 
},[])