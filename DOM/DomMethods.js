console.log('Dom Methods')

let example = document.querySelector('.example')
const h1 = document.querySelector('h1')

// ====================================================
// Selectors - native JS selectors
// ====================================================
document.getElementsByTagName('') //<--- array of selected
document.getElementById('')
document.querySelector('')
document.querySelectorAll('') //<--- array of selected

// To select any element with a class or id prefix the number with you need to escape the zero in unicode 003 and adding a space to the end.
// Example
// .1 = "\\31 "


// ====================================================
// Properties
// ====================================================
var element = document.querySelector('')
element.textContent
element.value = // value from an input box 
element.tagName = 
element.id = 
element.dataset // (for custom data attributes)
element.style.backgroundColor = 'black'
element.nodeName
element.tagName


// ====================================================
// Nodes
// ====================================================
var element = document.querySelector('')
element.childNodes
element.firstChild
element.lastChild
element.parentNode
element.nextSibling
element.previousSibling


// ====================================================
// Methods
// ====================================================
var element = document.querySelector('')
element.className = ''
element.classList.add()
element.classList.remove()
element.classList.toggle()
element.classList.contains()


var newElement = document.createElement('h1')

document.appendChild(newElement)

document.removeChild(newElement)


// ====================================================
// Attributes
// ====================================================
var element = document.querySelector('')
element.getAttribute('')

// Possible to update the value with this method
//                 name - value
element.setAttribute('id', 1)


// ====================================================
// Forms - .forms returns an array of objects.
// ====================================================
{/* <form id=”my_form” method=”post” action=”abc.html”>

    <input type=”checkbox” value=”one” name=”options” id=”option1” checked=”checked” />

    <input type=”checkbox” value=”two” name=”options” id=”option2” /> Two </br>

    <input type=”checkbox” value=”three” name=”options” id=”option3” /> Three </br>
</form> */}

{/* <form id=”my_form” method=”post” action=”abc.html”>
    <input type=”checkbox” value=”one” name=”options” id=”option2” checked=”checked” />
</form> */}

var arrayOfForms = document.forms // array of forms as objects

var firstForm = arrayOfForms[0] // first element (form - object)

var firstElementFirstForm = firstForm[0] // first kvp (key = 0) form object (input element)

var firstElementAttributeID = firstElementFirstForm.id // key=id value=option1
console.log('firstElementAttributeID:', firstElementAttributeID)


// returns boolean 
// console.log('checkBox.checked :', checkBox.checked )


// ====================================================
// innerHTML
// ====================================================

