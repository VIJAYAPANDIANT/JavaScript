// ==========================================
// TOPIC: Asynchronous JavaScript (Promises & Async/Await)
// ==========================================

/*
Definition:
JavaScript is single-threaded (executes one line of code at a time). However, we often need to run long-running tasks 
(like calling a server or loading a file) without blocking the rest of the application.
Asynchronous JS lets us kick off a task, continue running other code, and handle the task's completion later.

Core Asynchronous Patterns:
1. Promises (resolve, reject, then, catch, finally)
2. Async/Await (modern, synchronous-looking shorthand for handling Promises)
*/


// ==========================================
// 1. Promises
// ==========================================
// A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// States: 
// - Pending: Initial state, neither fulfilled nor rejected.
// - Fulfilled: Operation completed successfully.
// - Rejected: Operation failed.

console.log("--- Promises ---");

// Creating a promise
const fetchUserData = new Promise((resolve, reject) => {
    let success = true; // Simulate server success
    
    console.log("Fetching user data asynchronously...");
    setTimeout(() => {
        if (success) {
            resolve({ id: 1, name: "Vijay" }); // Operation succeeded, send data
        } else {
            reject("Error: Failed to fetch user data."); // Operation failed
        }
    }, 1500);
});

// Consuming a promise
fetchUserData
    .then((data) => {
        console.log("Promise Fulfilled! User:", data); 
        // Output after 1.5s: Promise Fulfilled! User: { id: 1, name: 'Vijay' }
    })
    .catch((error) => {
        console.error("Promise Rejected:", error);
    })
    .finally(() => {
        console.log("Promise settled (completed or failed). Done.");
    });


// ==========================================
// 2. Async / Await (ES2017+)
// ==========================================
// 'async' functions always return a Promise.
// 'await' pauses the execution of an async function until a Promise resolves or rejects. 
// It allows writing async code that looks and behaves like synchronous code.

console.log("\n--- Async/Await ---");

// A simulation of an asynchronous database call
function getProductDetails(productId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productId === 101) {
                resolve({ id: 101, title: "JavaScript Book", price: 29.99 });
            } else {
                reject("Product not found");
            }
        }, 1000);
    });
}

// An async function to execute the flow sequentially
async function displayProductDetails() {
    try {
        console.log("Requesting product...");
        
        // Wait for product details to resolve
        const product = await getProductDetails(101);
        console.log("Product fetched:", product);
        // Output: Product fetched: { id: 101, title: 'JavaScript Book', price: 29.99 }

        // Attempting to fetch a wrong product to test rejection handling
        const wrongProduct = await getProductDetails(999);
        console.log("This line won't execute because of rejection");
    } catch (error) {
        // Errors thrown in await are caught here in the catch block
        console.error("Caught error in async/await:", error); 
        // Output: Caught error in async/await: Product not found
    } finally {
        console.log("Finished product fetch operation.");
    }
}

// Invoke the async function
displayProductDetails();
