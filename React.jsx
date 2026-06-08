// ==========================================
// TOPIC: React.js (JSX, State, & Hooks)
// ==========================================

/*
Definition:
React is a popular open-source JavaScript library developed by Meta for building user interfaces, 
specifically single-page applications. It allows developers to create reusable UI components.

Core Concepts:
1. JSX (JavaScript XML): Syntactic extension allowing HTML to be written inside JavaScript.
2. State: Reactive data structure holding component information that triggers re-renders on change.
3. React Hooks (introduced in v16.8): Functions allowing functional components to tap into state and lifecycle events.
*/

// Simulated React import for IDE type awareness
// import React, { useState, useEffect } from "react";


// ==========================================
// 1. JSX Syntax Demonstration
// ==========================================
/*
JSX Rules:
- Must return a single root element (often wrapped in a fragment: <></>).
- Use camelCase for attributes (e.g., className instead of class, onClick instead of onclick).
- JavaScript expressions are written inside curly braces { }.
*/

function WelcomeCard(props) {
    const greeting = "Hello, Developer!";
    return (
        <div className="card-container">
            <h2>{greeting}</h2>
            <p>Welcome back, {props.username}.</p>
        </div>
    );
}


// ==========================================
// 2. State & Hooks (useState, useEffect)
// ==========================================

function CounterApp() {
    // A. useState Hook: Declares a state variable (count) and a setter function (setCount)
    // Syntax: const [state, setState] = useState(initialValue);
    const [count, setCount] = useState(0);

    // B. useEffect Hook: Performs side effects (API calls, event subscriptions, DOM manipulation)
    // It accepts a callback function and a dependency array.
    useEffect(() => {
        document.title = `Clicked ${count} times`;
        
        // Clean-up function (runs when component unmounts or before rerun)
        return () => {
            console.log("Cleaning up effect...");
        };
    }, [count]); // Dependency array: Effect runs only when 'count' changes

    const handleIncrement = () => {
        setCount(count + 1); // Triggers re-render
    };

    return (
        <div className="counter-box">
            <p>You clicked {count} times</p>
            <button onClick={handleIncrement}>
                Click Me
            </button>
        </div>
    );
}
