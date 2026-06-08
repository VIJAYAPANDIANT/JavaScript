// ==========================================
// TOPIC: Iterators & Generators in JavaScript
// ==========================================

/*
Definition:
1. Iterators: An object is an iterator when it implements a next() method which returns an object with:
   - value: The next value in the sequence.
   - done: A boolean indicating if the sequence is complete.
   Any object that implements the Symbol.iterator method is "iterable" (meaning it can be looped with a for...of loop).

2. Generators: Special functions that can be paused and resumed, allowing them to yield multiple values over time.
   They are written using the `function*` syntax and use the `yield` keyword.
*/


// ==========================================
// 1. Generator Functions & the 'yield' Keyword
// ==========================================
// When called, generator functions do not run their code. Instead, they return a Generator Object.
// Calling generator.next() runs the code until it hits a `yield` statement, pauses, and outputs the yielded value.

console.log("--- Generator Functions ---");

function* simpleGenerator() {
    console.log("Execution started...");
    yield "First Yielded Value"; // Yields value and pauses execution
    
    console.log("Execution resumed...");
    yield "Second Yielded Value"; // Yields value and pauses execution
    
    return "Final Returned Value"; // Execution finishes
}

const generator = simpleGenerator();

// Call next() for the first time
console.log(generator.next()); 
// Output:
// Execution started...
// { value: 'First Yielded Value', done: false }

// Call next() for the second time
console.log(generator.next()); 
// Output:
// Execution resumed...
// { value: 'Second Yielded Value', done: false }

// Call next() for the third time
console.log(generator.next()); 
// Output:
// { value: 'Final Returned Value', done: true }


// ==========================================
// 2. Practical Generator: Infinite ID Sequence
// ==========================================
// Because generators can pause, they can produce infinite sequences without locking or crashing the browser.

console.log("\n--- Infinite Generator ---");

function* idGenerator() {
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
}

const ids = idGenerator();
console.log(ids.next().value); // Output: 1
console.log(ids.next().value); // Output: 2
console.log(ids.next().value); // Output: 3


// ==========================================
// 3. Custom Iterators (Symbol.iterator)
// ==========================================
// We can make any custom object iterable by defining a `[Symbol.iterator]` method.

console.log("\n--- Custom Iterables ---");

const myCollection = {
    items: ["Pen", "Pencil", "Eraser"],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.items.length) {
                    return { value: this.items[index++], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

// Now myCollection can be used in a for...of loop!
for (const item of myCollection) {
    console.log(item);
}
/*
Output:
Pen
Pencil
Eraser
*/
