// ==========================================
// TOPIC: Fetch API, RESTful APIs, & JSON
// ==========================================

/*
Definition:
Most modern web applications interact with backend servers. This communication is done using APIs (Application Programming Interfaces).
1. REST (Representational State Transfer) is a common architectural style for web services. 
   It uses standard HTTP methods: GET (read), POST (create), PUT (update), DELETE (delete).
2. JSON (JavaScript Object Notation) is the lightweight format used for exchanging data.
3. Fetch API is a built-in browser interface that allows us to make HTTP requests.
*/


// ==========================================
// 1. Working with JSON (Parse & Stringify)
// ==========================================
// JSON is a text format that looks like a JavaScript object, but it must be parsed to be manipulated in code.

console.log("--- JSON Operations ---");

const rawJSON = '{"name": "Vijay", "age": 21, "skills": ["JS", "HTML"]}';

// JSON.parse(): Converts a JSON string into a JavaScript Object
const userObj = JSON.parse(rawJSON);
console.log(userObj.name); // Output: Vijay
console.log(typeof userObj); // Output: object

// JSON.stringify(): Converts a JavaScript Object/Array into a JSON String
const stringified = JSON.stringify(userObj);
console.log(stringified); // Output: '{"name":"Vijay","age":21,"skills":["JS","HTML"]}'
console.log(typeof stringified); // Output: string


// ==========================================
// 2. Fetch API: GET Request
// ==========================================
// Fetch returns a Promise. First, we resolve it to extract the headers and format it as JSON, 
// then we access the actual data.

console.log("\n--- Fetch GET Request ---");

async function fetchPost() {
    try {
        // Fetching a mock post resource from public API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        
        // Check if the response was successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json(); // Parses the response body as JSON
        console.log("Fetched Data:", data);
        /*
        Output structure:
        Fetched Data: {
          userId: 1,
          id: 1,
          title: '...',
          body: '...'
        }
        */
    } catch (error) {
        console.error("Fetch GET Failed:", error);
    }
}

// fetchPost(); // (Uncomment in browser or Node.js environment with fetch support to execute)


// ==========================================
// 3. Fetch API: POST Request
// ==========================================
// Used to send new data to a server. We must specify:
// - method: 'POST'
// - headers: 'Content-Type': 'application/json'
// - body: JSON string of the object we want to send

console.log("\n--- Fetch POST Request ---");

async function createPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Learning Fetch",
                body: "I am building REST API requests in JavaScript.",
                userId: 1
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Created Post Confirmation:", data);
        /*
        Output structure:
        Created Post Confirmation: {
          title: 'Learning Fetch',
          body: 'I am building REST API requests in JavaScript.',
          userId: 1,
          id: 101 // Server created ID
        }
        */
    } catch (error) {
        console.error("Fetch POST Failed:", error);
    }
}

// createPost(); // (Uncomment in browser or Node.js environment with fetch support to execute)
