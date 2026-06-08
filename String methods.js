// ==========================================
// TOPIC: String Methods in JavaScript
// ==========================================

/*
Definition:
In JavaScript, strings are primitive, immutable sequences of characters. 
JavaScript provides built-in methods to manipulate and format text. Because strings are immutable, 
these methods do not modify the original string; instead, they return a new string.

Key Features & Methods:
1. Template Literals (ES6)
2. Extracting Parts of Strings (slice, substring, substr)
3. Splitting & Joining Strings (split)
4. Other essential methods (toLowerCase, toUpperCase, replace, trim, includes)
*/


// ==========================================
// 1. Template Literals (ES6)
// ==========================================
// Uses backticks (``) instead of single or double quotes.
// Allows formatting clean multiline strings and string interpolation (embedding expressions).

console.log("--- Template Literals ---");
let username = "Vijay";
let age = 21;

// String Interpolation:
let greeting = `Hello, my name is ${username} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is Vijay and I am 21 years old.

// Multiline strings:
let multilineText = `This is line 1.
This is line 2.
This is line 3.`;
console.log(multilineText);


// ==========================================
// 2. Extracting Parts of Strings: slice()
// ==========================================
// slice(start, end) extracts a part of a string and returns the extracted part in a new string.
// - Parameters: 'start' (inclusive), 'end' (exclusive).
// - Supports negative indices (counts from the end of the string).

console.log("\n--- String.prototype.slice() ---");
let sampleStr = "JavaScript Tutorial";

let part1 = sampleStr.slice(0, 10); 
console.log(part1); // Output: JavaScript (indices 0 to 9)

let part2 = sampleStr.slice(11); 
console.log(part2); // Output: Tutorial (from index 11 to end)

let part3 = sampleStr.slice(-8); 
console.log(part3); // Output: Tutorial (extracts last 8 characters)


// ==========================================
// 3. Splitting Strings: split()
// ==========================================
// split(separator) divides a string into an ordered list of substrings, 
// puts these substrings into an array, and returns the array.

console.log("\n--- String.prototype.split() ---");
let sentence = "HTML,CSS,JavaScript,React";

// Split by comma
let skillsArray = sentence.split(",");
console.log(skillsArray); // Output: [ 'HTML', 'CSS', 'JavaScript', 'React' ]

// Split by space
let sentenceWords = "Learning JS is fun".split(" ");
console.log(sentenceWords); // Output: [ 'Learning', 'JS', 'is', 'fun' ]

// Split into single characters
let wordChars = "Code".split("");
console.log(wordChars); // Output: [ 'C', 'o', 'd', 'e' ]


// ==========================================
// 4. Other Essential String Methods
// ==========================================
console.log("\n--- Other String Methods ---");
let phrase = "   Hello JavaScript!   ";

// toLowerCase() & toUpperCase()
console.log(phrase.toUpperCase()); // Output: "   HELLO JAVASCRIPT!   "
console.log(phrase.toLowerCase()); // Output: "   hello javascript!   "

// trim(): Removes whitespace from both ends of a string
let trimmedPhrase = phrase.trim();
console.log(trimmedPhrase); // Output: "Hello JavaScript!"

// replace(searchFor, replaceWith): Replaces matching text
let newPhrase = trimmedPhrase.replace("JavaScript", "World");
console.log(newPhrase); // Output: "Hello World!"

// includes(searchString): Returns true if searchString is found inside the string
console.log(trimmedPhrase.includes("Java")); // Output: true
console.log(trimmedPhrase.includes("Python")); // Output: false
