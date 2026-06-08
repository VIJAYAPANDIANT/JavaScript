// ==========================================
// TOPIC: Real-time Communication (WebSockets & SSE)
// ==========================================

/*
Definition:
Traditionally, web communication relies on HTTP request-response loops where the client requests data 
and the server responds. For real-time updates (like chat apps, live feeds, or notifications), 
we need persistent connections where the server can push updates to the client immediately.

Core Technologies:
1. WebSockets: Two-way (bi-directional), full-duplex communication over a single TCP connection.
2. Server-Sent Events (SSE): One-way (uni-directional), server-to-client streaming over standard HTTP.

================================================================================
SYNTAX REFERENCE
================================================================================
// WebSockets (Client-side)
const ws = new WebSocket("wss://example.com/socket");
ws.send(JSON.stringify(payload));
ws.onmessage = (event) => { const data = JSON.parse(event.data); };
ws.onopen = (event) => { console.log("Connected"); };
ws.onclose = (event) => { console.log("Closed"); };

// Server-Sent Events (Client-side)
const sse = new EventSource("/sse-endpoint");
sse.onmessage = (event) => { const data = JSON.parse(event.data); };
sse.addEventListener("customEvent", (event) => { ... });
sse.close();
*/


// ==========================================
// 1. WebSockets API
// ==========================================
// WebSockets allow the client and server to send messages to each other at any time.
// Protocol prefix: ws:// (unencrypted) or wss:// (encrypted/secure).

console.log("--- 1. WebSocket Client Setup ---");

/*
// --- Client-side Implementation ---
const socketUrl = "wss://echo.websocket.org"; // Echo server returns whatever you send it
const socket = new WebSocket(socketUrl);

// A. Event: Connection opened
socket.addEventListener("open", (event) => {
    console.log("Connected to WebSocket Server!");
    
    // Send message to the server
    socket.send(JSON.stringify({ user: "Vijay", message: "Hello Server!" }));
});

// B. Event: Message received from server
socket.addEventListener("message", (event) => {
    const data = JSON.parse(event.data);
    console.log("Received from server:", data);
});

// C. Event: Connection closed
socket.addEventListener("close", (event) => {
    console.log("WebSocket Connection closed.");
});

// D. Event: Error occurred
socket.addEventListener("error", (error) => {
    console.error("WebSocket Error:", error);
});
*/


// ==========================================
// 2. Server-Sent Events (SSE)
// ==========================================
// SSE is a standard that allows servers to push data to web pages over a persistent HTTP connection.
// Unlike WebSockets, it is strictly one-way (server to client) and handles reconnection automatically.

console.log("\n--- 2. Server-Sent Events (SSE) Client Setup ---");

/*
// --- Client-side Implementation ---
const sseSource = new EventSource("/api/live-stream-updates");

// A. Listen for generic message events
sseSource.addEventListener("message", (event) => {
    const data = JSON.parse(event.data);
    console.log("New server-side update received:", data);
});

// B. Listen for custom named events sent by the server
sseSource.addEventListener("stockUpdate", (event) => {
    const stock = JSON.parse(event.data);
    console.log(`Stock Update: ${stock.symbol} is now $${stock.price}`);
});

// C. Event: Error or Connection Closed
sseSource.addEventListener("error", (event) => {
    if (sseSource.readyState === EventSource.CLOSED) {
        console.log("SSE Connection was closed by the server.");
    } else {
        console.error("SSE Error occurred.");
    }
});

// D. Close the connection
// sseSource.close();
*/


// ==========================================
// 3. Comparison: WebSockets vs SSE
// ==========================================
/*
+----------------------+----------------------------+----------------------------+
| Feature              | WebSockets                 | Server-Sent Events (SSE)   |
+----------------------+----------------------------+----------------------------+
| Direction            | Bi-directional (2-way)     | Uni-directional (1-way)    |
| Protocol             | Custom WS protocol         | Standard HTTP              |
| Auto-Reconnection    | Manual implementation      | Built-in (automatic)       |
| Firewall Friendly    | Sometimes blocked          | Always allowed (HTTP/80)   |
| Use Case             | Chat apps, multiplayer     | Live dashboards, news      |
|                      | games, editing docs        | feeds, notifications       |
+----------------------+----------------------------+----------------------------+
*/
