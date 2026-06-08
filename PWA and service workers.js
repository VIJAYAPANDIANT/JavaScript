// ==========================================
// TOPIC: Progressive Web Apps (PWAs) & Service Workers
// ==========================================

/*
Definition:
Progressive Web Apps (PWAs) are web applications that use modern web capabilities to deliver an 
app-like experience to users. They can be installed on the user's device and work offline or 
on low-quality networks.

Three Core Pillars of a PWA:
1. Manifest File (webmanifest: defines installation meta, icons, theme colors)
2. HTTPS (security requirement for running Service Workers)
3. Service Worker (a background script running independently of the web page to intercept network requests)
*/


// ==========================================
// 1. Registering a Service Worker
// ==========================================
// A Service Worker must be registered from the main app thread.

console.log("--- 1. Service Worker Registration ---");

/*
// --- In your main app.js file ---
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js")
            .then((registration) => {
                console.log("Service Worker registered successfully with scope:", registration.scope);
            })
            .catch((error) => {
                console.error("Service Worker registration failed:", error);
            });
    });
}
*/


// ==========================================
// 2. Service Worker Life Cycle & Caching (service-worker.js)
// ==========================================
// Service Workers act as a network proxy. They listen to events like 'install', 'activate', and 'fetch'.

console.log("\n--- 2. Service Worker Code (e.g., service-worker.js) ---");

/*
const CACHE_NAME = "v1_static_cache";
const ASSETS_TO_CACHE = [
    "/",
    "/index.html",
    "/styles.css",
    "/app.js",
    "/offline.html"
];

// A. Install Event: Cache essential assets immediately
self.addEventListener("install", (event) => {
    console.log("Service Worker: Installing...");
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Service Worker: Caching files...");
            return cache.addAll(ASSETS_TO_CACHE);
        }).then(() => self.skipWaiting()) // Forces the waiting service worker to become active
    );
});

// B. Activate Event: Clean up old caches
self.addEventListener("activate", (event) => {
    console.log("Service Worker: Activating...");
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log("Service Worker: Clearing Old Cache", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// C. Fetch Event (Cache-First / Offline Fallback Strategy):
// Intercept HTTP requests. Return cached version if offline, otherwise fetch from internet.
self.addEventListener("fetch", (event) => {
    console.log("Service Worker: Fetching", event.request.url);
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Return from cache if found, otherwise make network call
            return cachedResponse || fetch(event.request).catch(() => {
                // If both fail (user is offline and resource not cached), show custom offline fallback page
                return caches.match("/offline.html");
            });
        })
    );
});
*/


// ==========================================
// 3. Web App Manifest File (manifest.json)
// ==========================================
// A JSON file containing configuration data that allows browsers to install the app.

console.log("\n--- 3. Sample manifest.json ---");
/*
{
  "short_name": "JSApp",
  "name": "JavaScript Learning Portal",
  "icons": [
    {
      "src": "/images/icon-192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/images/icon-512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": "/index.html",
  "background_color": "#121212",
  "theme_color": "#f7df1e",
  "display": "standalone",
  "orientation": "portrait"
}
*/
