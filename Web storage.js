// ==========================================
// TOPIC: Web Storage in JavaScript (localStorage, sessionStorage, & Cookies)
// ==========================================

/*
Definition:
Web storage mechanisms allow web applications to store data locally within the user's browser. 
This is essential for saving session state, user preferences, and shopping carts.

Key Mechanisms:
1. localStorage: Stores data with no expiration date. Data persists even when the browser is closed.
2. sessionStorage: Stores data for the duration of the page session (data is lost when tab is closed).
3. Cookies: Small text files stored in the browser, sent automatically with HTTP requests to the server.
*/


// ==========================================
// 1. localStorage API
// ==========================================
// Stores data as key-value pairs (both keys and values must be strings).
// Storage limit: ~5MB.

console.log("--- 1. localStorage API ---");

// A. Storing Data:
localStorage.setItem("theme", "dark");

// Storing objects (must be stringified to JSON first):
const userSettings = { volume: 80, language: "en" };
localStorage.setItem("settings", JSON.stringify(userSettings));

// B. Reading Data:
const theme = localStorage.getItem("theme");
console.log("Theme:", theme); // Output: Theme: dark

const settingsStr = localStorage.getItem("settings");
if (settingsStr) {
    const settingsObj = JSON.parse(settingsStr);
    console.log("Volume:", settingsObj.volume); // Output: Volume: 80
}

// C. Removing Data:
// localStorage.removeItem("theme"); // Removes only "theme" key
// localStorage.clear(); // Removes ALL keys from local storage for the domain


// ==========================================
// 2. sessionStorage API
// ==========================================
// Shares the exact same API syntax as localStorage, but data is cleared when the browser tab closes.

console.log("\n--- 2. sessionStorage API ---");

sessionStorage.setItem("session_token", "temp_xyz_987");
console.log("Session Token:", sessionStorage.getItem("session_token"));


// ==========================================
// 3. Document Cookies
// ==========================================
// Cookies are primarily used for tracking, session management, and Server communication.
// Storage limit: ~4KB. 
// Can be set with attributes like: 
// - max-age (expiry in seconds)
// - path (directories cookie is accessible on)
// - Secure (only sent over HTTPS)
// - SameSite (Strict/Lax/None for CSRF defense)

console.log("\n--- 3. Document Cookies ---");

// A. Writing a Cookie (syntax involves a special assignment string):
document.cookie = "username=Vijay; max-age=3600; path=/; SameSite=Strict; Secure";

// B. Reading Cookies (returns a single string of all cookies separated by semicolon):
console.log("Raw Cookie String:", document.cookie); // Output: "username=Vijay; theme=dark"

// Helper function to read a specific cookie value:
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}
console.log("Parsed Username Cookie:", getCookie("username")); // Output: Vijay

// C. Deleting a Cookie: Set its max-age to 0 or an expiration date in the past
document.cookie = "username=; max-age=0; path=/;";
