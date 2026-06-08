// ==========================================
// TOPIC: JavaScript Performance Optimization
// ==========================================

/*
Definition:
Writing functional code is only the first step. Ensuring that our code runs efficiently, 
uses memory wisely, and provides a smooth user experience (UX) is crucial. 
Performance optimization techniques help minimize unnecessary computations and network requests.

Key Techniques:
1. Debouncing (Grouping multiple sequential calls into a single call after a delay)
2. Memoization (Caching the results of expensive function calls)
3. Lazy Loading (Delaying the initialization/loading of resources until needed)

================================================================================
SYNTAX REFERENCE
================================================================================
// Basic Debounce Implementation
function debounce(func, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

// Basic Memoization Cache Pattern
function memoize(fn) {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Dynamic Imports (Lazy Loading Modules)
button.addEventListener("click", () => {
    import("./module.js").then((module) => {
        module.runFunc();
    });
});
*/


// ==========================================
// 1. Debouncing
// ==========================================
// Debouncing ensures that a function is not called repeatedly in quick succession. 
// It waits for a specified period of inactivity before executing the function.
// Common Use Case: Search auto-complete inputs, window resize event handlers.

console.log("--- 1. Debouncing ---");

function debounce(func, delay) {
    let timerId;
    
    return function(...args) {
        // Clear the previous timer if the function is invoked before the delay ends
        clearTimeout(timerId);
        
        // Start a new timer
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example usage:
const processSearch = (query) => {
    console.log(`API Call sent for: ${query}`);
};

const debouncedSearch = debounce(processSearch, 300);

// Simulating rapid typing:
debouncedSearch("a");   // Timer starts
debouncedSearch("ap");  // Timer cleared, new timer starts
debouncedSearch("app"); // Timer cleared, final timer starts
// Output (after 300ms of inactivity): "API Call sent for: app" (Only one call is made!)


// ==========================================
// 2. Memoization
// ==========================================
// Memoization is an optimization technique used primarily to speed up computer programs 
// by storing the results of expensive function calls and returning the cached result 
// when the same inputs occur again.

console.log("\n--- 2. Memoization ---");

function memoize(func) {
    const cache = {}; // Object to store computed arguments and results
    
    return function(...args) {
        const key = JSON.stringify(args); // Create unique cache key from arguments
        if (key in cache) {
            console.log("Fetching from cache...");
            return cache[key];
        }
        
        console.log("Calculating fresh result...");
        const result = func.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Simple expensive function (Fibonacci calculation)
const slowFibonacci = (n) => {
    if (n <= 1) return n;
    return slowFibonacci(n - 1) + slowFibonacci(n - 2);
};

const memoizedFib = memoize(slowFibonacci);

console.log(memoizedFib(30)); // Output: Calculating fresh result... 832040
console.log(memoizedFib(30)); // Output: Fetching from cache... 832040 (instantaneous!)


// ==========================================
// 3. Lazy Loading
// ==========================================
// Lazy loading is a strategy to identify resources as non-blocking (non-critical) 
// and load them only when they are needed (e.g., when an image enters the viewport, 
// or when a user clicks a button to load a heavy feature).

/*
Common Implementation Patterns:

A. Image Lazy Loading in HTML:
<img src="placeholder.jpg" data-src="heavy-image.jpg" class="lazy" alt="Lazy Image">

Using Intersection Observer API in JS:
const lazyImages = document.querySelectorAll('img.lazy');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src; // Swap placeholder for real image
            image.classList.remove('lazy');
            observer.unobserve(image); // Stop observing once loaded
        }
    });
});

lazyImages.forEach(image => imageObserver.observe(image));


B. Code-Splitting (Dynamic Imports):
Importing modules dynamically only when requested.
button.addEventListener("click", async () => {
    // Heavy module loaded on-demand
    const { heavyFunction } = await import("./heavyModule.js");
    heavyFunction();
});
*/
