// ==========================================
// TOPIC: Document Object Model (DOM) in JavaScript
// ==========================================

/*
Definition:
The Document Object Model (DOM) is a programming interface for web documents. 
It represents the page structure so that programs can change the document structure, style, and content. 
The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

Core Areas:
1. Selecting Elements
2. Creating Elements
3. Modifying Elements (Content, Attributes, Styles)

================================================================================
SYNTAX REFERENCE
================================================================================
// Selecting
document.querySelector(selector);
document.querySelectorAll(selector);
document.getElementById(id);
document.getElementsByClassName(className);

// Creating & Appending
let el = document.createElement(tagName);
parentElement.appendChild(el);
parentElement.removeChild(el);

// Modifying Content
el.textContent = "text";
el.innerHTML = "<span>html</span>";

// Attributes & Classes
el.setAttribute(name, value);
el.getAttribute(name);
el.classList.add(className);
el.classList.remove(className);
el.classList.toggle(className);

// CSS inline styles
el.style.styleProperty = "value"; // e.g. el.style.color = "red";
*/


// ==========================================
// 1. Selecting Elements
// ==========================================
// JavaScript provides several methods to select elements from the DOM.

// A. querySelector: Selects the FIRST element matching a CSS selector.
// Example: Selecting an element with class "heading"
const mainHeading = document.querySelector(".heading"); 
// Output/Result: Returns the first matching Element object, or null if not found.

// B. querySelectorAll: Selects ALL elements matching a CSS selector (returns a NodeList).
const listItems = document.querySelectorAll("li"); 
// Output/Result: Returns a static NodeList containing all matching <li> elements.

// C. getElementById: Selects a single element by its 'id' attribute.
const submitBtn = document.getElementById("submit-btn");

// D. getElementsByClassName: Selects elements by their 'class' name (returns an HTMLCollection).
const items = document.getElementsByClassName("item-list");


// ==========================================
// 2. Creating Elements
// ==========================================
// You can build new HTML elements dynamically in memory before adding them to the page.

// A. document.createElement(tagName): Creates a new element of the specified tag type.
const newParagraph = document.createElement("p");

// B. Node.appendChild(childNode): Appends a node as the last child of a parent node.
const container = document.querySelector("#container");
// container.appendChild(newParagraph); // Adds newParagraph inside container

// C. Element.insertAdjacentElement(position, element): Inserts a given element node at a specified position.
// Positions: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
// example: mainHeading.insertAdjacentElement('afterend', newParagraph);


// ==========================================
// 3. Modifying Elements
// ==========================================

// A. Modifying Content:
// - textContent: Sets or returns the text content of the node and its descendants. (Safe from XSS)
newParagraph.textContent = "This is a dynamically created paragraph!";

// - innerHTML: Sets or returns the HTML markup contained within the element. (Use carefully to avoid XSS)
// container.innerHTML = "<h2>New Subtitle</h2>";

// B. Modifying Attributes:
// - setAttribute(name, value): Sets the value of an attribute on the specified element.
newParagraph.setAttribute("class", "dynamic-text highlight");

// - getAttribute(name): Returns the value of a specified attribute.
const pClass = newParagraph.getAttribute("class"); 
console.log(pClass); // Output: "dynamic-text highlight"

// - removeAttribute(name): Removes an attribute.
// newParagraph.removeAttribute("class");

// C. Modifying Styles (CSS):
// - style.property: Modifies inline styles directly.
newParagraph.style.color = "blue";
newParagraph.style.fontSize = "18px";
newParagraph.style.backgroundColor = "#f0f0f0";

// - classList: Add, remove, or toggle CSS classes (Highly recommended over direct inline styling)
newParagraph.classList.add("active");    // Adds class "active"
newParagraph.classList.remove("active"); // Removes class "active"
newParagraph.classList.toggle("hidden"); // Toggles class "hidden" (adds if missing, removes if present)
