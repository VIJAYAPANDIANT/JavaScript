// ==========================================
// TOPIC: The JavaScript Event Loop & Concurrency Model
// ==========================================

/*
Definition:
JavaScript is single-threaded (executes one statement at a time on a single call stack). 
However, it can execute asynchronous tasks (like timers or network fetches) efficiently by delegating 
those tasks to the browser APIs (Web APIs) or Node.js background workers.
The Event Loop coordinates how and when these asynchronous callback functions are moved onto the call stack for execution.

Core Components:
1. Call Stack: LIFO (Last In, First Out) structure tracking the currently executing function.
2. Web APIs: Browser-provided environments running asynchronous tasks (setTimeout, DOM events, fetch).
3. Microtask Queue: Queue for callbacks with high priority (Promises `.then/catch/finally`, `queueMicrotask`, `MutationObserver`).
4. Callback Queue (Macrotask Queue): Queue for standard asynchronous callbacks (`setTimeout`, `setInterval`, I/O operations).

Execution Priority Rule:
1. Execute all synchronous code in the Call Stack.
2. If the Call Stack is empty, execute ALL callbacks in the Microtask Queue first.
3. Once the Microtask Queue is completely clear, execute the FIRST callback in the Callback (Macrotask) Queue.
4. Repeat.
*/


// ==========================================
// 1. Event Loop Execution Order Demonstration
// ==========================================
console.log("--- Event Loop Sequence Example ---");

// A. Synchronous execution (goes straight to call stack)
console.log("1. Start of Synchronous Script");

// B. Macrotask (delegated to Web APIs, added to Callback Queue after 0ms)
setTimeout(() => {
    console.log("2. Inside setTimeout Callback (Macrotask Queue)");
}, 0);

// C. Microtask (resolved immediately, callback added to Microtask Queue)
Promise.resolve().then(() => {
    console.log("3. Inside Promise.then Callback (Microtask Queue)");
});

// D. Microtask (another high-priority microtask)
queueMicrotask(() => {
    console.log("4. Inside queueMicrotask Callback (Microtask Queue)");
});

// E. Synchronous execution
console.log("5. End of Synchronous Script");


// ==========================================
// 2. Expected Output Analysis
// ==========================================
/*
Expected console output order:
----------------------------------------
1. Start of Synchronous Script
5. End of Synchronous Script
3. Inside Promise.then Callback (Microtask Queue)
4. Inside queueMicrotask Callback (Microtask Queue)
2. Inside setTimeout Callback (Macrotask Queue)
----------------------------------------

Deep Step-by-Step Explanation:
Step 1: "1. Start of Synchronous Script" prints because it is executed immediately on the call stack.
Step 2: `setTimeout` executes on the call stack. The Web API sets a timer of 0ms and moves the callback function to the Callback (Macrotask) Queue.
Step 3: `Promise.resolve().then(...)` runs. The promise resolves, pushing its callback to the Microtask Queue.
Step 4: `queueMicrotask(...)` runs, pushing its callback to the Microtask Queue.
Step 5: "5. End of Synchronous Script" prints as the last piece of synchronous execution.
Step 6: The Call Stack is now empty. The Event Loop checks the Microtask Queue. 
        It finds and executes:
        - "3. Inside Promise.then Callback"
        - "4. Inside queueMicrotask Callback"
Step 7: The Microtask Queue is now empty. The Event Loop checks the Callback Queue (Macrotask Queue) and executes:
        - "2. Inside setTimeout Callback"
*/
