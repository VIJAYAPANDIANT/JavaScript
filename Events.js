// ==========================================
// TOPIC: Events in JavaScript
// ==========================================

/*
Definition:
An event is an action or occurrence that happens in the browser, which the browser can inform you about (e.g., clicking a button, submitting a form, resizing a window).
Using JavaScript, we can listen for these events and run a block of code (an event handler) in response.

Key Concepts:
1. Event Listeners
2. Event Bubbling (and Capturing)
3. Event Delegation
*/


// ==========================================
// 1. Event Listeners
// ==========================================
// addEventListener() attaches an event handler to an element without overwriting existing event handlers.
// Syntax: element.addEventListener(event, function, useCapture);

// Example: Handling a button click event
const button = document.querySelector("#myButton");

function handleButtonClick(event) {
    console.log("Button clicked!");
    // 'event' (or 'e') is an object containing metadata about the event
    console.log("Event type: " + event.type); // Output: Event type: click
    console.log("Clicked element: ", event.target); // Output: target element node
}

// Attach the listener
// button.addEventListener("click", handleButtonClick);

// Removing an event listener (Note: must refer to the named function, anonymous functions cannot be easily removed)
// button.removeEventListener("click", handleButtonClick);


// ==========================================
// 2. Event Bubbling
// ==========================================
// When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
// This phase is called "bubbling".

/*
Visualizing HTML structure:
<div id="parent">
    <button id="child">Click Me</button>
</div>
*/

// Example:
// document.querySelector("#parent").addEventListener("click", () => {
//     console.log("Parent clicked!");
// });
// 
// document.querySelector("#child").addEventListener("click", (event) => {
//     console.log("Child clicked!");
//     
//     // How to stop bubbling:
//     // event.stopPropagation(); // Prevents the click event from bubbling up to #parent
// });

// Output without stopPropagation() when clicking #child:
// 1. "Child clicked!"
// 2. "Parent clicked!"


// ==========================================
// 3. Event Delegation
// ==========================================
// Event delegation is a pattern of handling events efficiently. 
// Instead of adding an event listener to multiple individual elements, we add a single event listener to their common parent.
// We then use the event.target property to detect which child element was actually clicked.

/*
Visualizing HTML structure:
<ul id="todo-list">
    <li class="item">Item 1</li>
    <li class="item">Item 2</li>
    <li class="item">Item 3</li>
</ul>
*/

// Without delegation: We'd have to loop and attach listeners to every single <li>. 
// If we add new <li> elements dynamically, they won't have listeners.

// With delegation:
// const todoList = document.querySelector("#todo-list");
// 
// todoList.addEventListener("click", function(event) {
//     // Check if the clicked element has the class "item"
//     if (event.target.classList.contains("item")) {
//         console.log("You clicked item: " + event.target.textContent);
//     }
// });
