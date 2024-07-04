// Bubbling events - when handlers on nested elements bubble their way up through the parent elements 

// event.target / e.target - most deeply nested element that caused the event. Use this property to implement event delegation.

// event.currentTarget - when events bubble back to the parent this will target the current element when triggered.

// event.stopPropagation() / e.stopPropagation() - prevents multiple events from bubbling up to the parent.

// event.stopImmediatePropagation / e.stopImmediatePropagation - 


// change elements
e.target.textContent = ''
e.target.style.backgroundColor = 'red'

addEventListener('change', e => {
    e.target.value
 })


 addEventListener('click', e => {
   e.target
 })


 addEventListener('mouseOver', e => {
   
    e.target
 })


 addEventListener('submit', e => { //<-------- use with form another way 
   
   e.preventDefault()

   e.target
 })


 document.querySelector(div)

 const clicked = (e) =>  {
   console.log(`the click was clicked by ${e.target.tagName}, the current element is ${e.currentTarget.tagName}`)
}