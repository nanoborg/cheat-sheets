# The Virtual DOM

In the `src./index.js` at the top, `ReactDOM` has been imported.

This does not refer to the same DOM from the client.

It refers the virtual DOM which is a key piece to how React works.

What is a **_Virtual DOM_** ? It's a javascript representation of the actual DOM. 

It's more efficient to make changes to a virtual representation of the DOM because changes to plain javascript objects are much faster than changes to actual DOM nodes.

Each time there is a change to the React application, React will update the change to the virtual DOM first, then React will check the **_difference_** between the actual DOM and the virtual DOM.. It's much faster to do this than to natively render the whole page.

In short, the virtual DOM is Reacts way of binding changes in the applications state to the views. It's all written in javascript making easy to write and helps the pages load faster.

The virtual DOM is a staging area for changes.

