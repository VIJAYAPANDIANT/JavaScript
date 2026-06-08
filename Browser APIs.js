// ==========================================
// TOPIC: Modern Browser APIs (Geolocation, Canvas, & Web Workers)
// ==========================================

/*
Definition:
Browsers provide built-in APIs that extend JavaScript functionality beyond basic programming, 
allowing developers to access device hardware, draw complex 2D/3D visuals, and handle multi-threaded computation.

Key APIs:
1. Geolocation API: Requests device location coordinates.
2. Canvas API: Renders 2D graphic shapes, text, images, and animations via scripting.
3. Web Workers: Spawns background threads to run heavy computations without freezing the browser UI.

================================================================================
SYNTAX REFERENCE
================================================================================
// Geolocation API
navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);

// Canvas 2D Context setup
const ctx = canvas.getContext("2d");
ctx.fillRect(x, y, width, height);
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();

// Web Workers (Main Thread)
const worker = new Worker("worker.js");
worker.postMessage(data);
worker.onmessage = (event) => { console.log(event.data); };

// Web Workers (Worker Thread - worker.js)
self.onmessage = (event) => {
    // perform calculation
    self.postMessage(result);
};
*/


// ==========================================
// 1. Geolocation API
// ==========================================
// Exposes device GPS coordinates through the navigator.geolocation object.

console.log("--- 1. Geolocation API ---");

/*
// --- Client-side implementation ---
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            console.log(`Latitude: ${lat}, Longitude: ${lon}`);
        },
        (error) => {
            console.error("Error retrieving location:", error.message);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
    );
} else {
    console.log("Geolocation is not supported by this browser.");
}
*/


// ==========================================
// 2. Canvas API
// ==========================================
// Provides an HTML element <canvas> and a JS rendering context for drawings.

console.log("\n--- 2. Canvas API ---");

/*
// --- HTML ---
// <canvas id="myCanvas" width="400" height="200"></canvas>

// --- Client-side implementation ---
const canvas = document.getElementById("myCanvas");
if (canvas) {
    const ctx = canvas.getContext("2d"); // Get 2D rendering context

    // A. Draw a Rectangle
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 150, 80); // x, y, width, height

    // B. Draw a Line
    ctx.beginPath();
    ctx.moveTo(200, 10);  // Starting point
    ctx.lineTo(350, 150); // Ending point
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.stroke();         // Execute drawing

    // C. Draw text
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Hello Canvas!", 10, 150);
}
*/


// ==========================================
// 3. Web Workers API
// ==========================================
// Web Workers are scripts that run in a background thread, keeping the main thread (UI thread) fast.
// Communicate with the main thread using messages: `postMessage()` and the `onmessage` listener.

console.log("\n--- 3. Web Workers API ---");

/*
// --- A. File: main.js ---
// Instantiate the worker from a separate JS file
const worker = new Worker("heavy-worker.js");

// Send data to worker
worker.postMessage({ number: 40 });

// Receive calculated result from worker
worker.onmessage = function(event) {
    console.log("Result received from background worker:", event.data); // Output: 102334155
};


// --- B. File: heavy-worker.js (Worker Context) ---
// This file executes in a separate thread. Window/DOM variables are NOT accessible here.
self.onmessage = function(event) {
    const num = event.data.number;
    
    // Expensive computation:
    const result = calculateFibonacci(num);
    
    // Send result back to the main thread
    self.postMessage(result);
};

function calculateFibonacci(n) {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}
*/
