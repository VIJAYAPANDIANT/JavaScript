// ==========================================
// TOPIC: Backend Development: Node.js & Express.js
// ==========================================

/*
Definition:
1. Node.js: A JavaScript runtime built on Chrome's V8 engine that allows developers 
   to write backend/server-side code using JavaScript.
2. Express.js: A minimal, unopinionated, fast web application framework for Node.js. 
   It simplifies routing, request handling, and building RESTful APIs.

Key Server Operations:
1. Listening for HTTP Requests
2. Handling routes (GET, POST, etc.)
3. Working with middleware (e.g., body parsing, logging)
*/

// Simulated module imports for IDE awareness
// const express = require("express");
// const app = express();
// const PORT = 5000;


// ==========================================
// 1. Basic Express Server Implementation
// ==========================================
/*
Below is an executable representation of a standard RESTful Express API:

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware: Parse incoming JSON request bodies
app.use(express.json());

// Mock database
let tasks = [
    { id: 1, title: "Learn JavaScript", completed: true },
    { id: 2, title: "Learn Express", completed: false }
];


// ==========================================
// 2. REST API Routes
// ==========================================

// A. GET /api/tasks (Read all tasks)
app.get("/api/tasks", (req, res) => {
    // Send JSON response with HTTP Status 200 (OK)
    res.status(200).json(tasks);
});

// B. GET /api/tasks/:id (Read a specific task)
app.get("/api/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);

    if (!task) {
        return res.status(404).json({ message: "Task not found." }); // Return 404 (Not Found)
    }
    res.status(200).json(task);
});

// C. POST /api/tasks (Create a new task)
app.post("/api/tasks", (req, res) => {
    const { title } = req.body; // Deconstruct from request body

    if (!title) {
        return res.status(400).json({ message: "Title is required." }); // Return 400 (Bad Request)
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        completed: false
    };

    tasks.push(newTask);
    res.status(201).json(newTask); // Return 210 (Created)
});


// ==========================================
// 3. Start Server
// ==========================================
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
*/
