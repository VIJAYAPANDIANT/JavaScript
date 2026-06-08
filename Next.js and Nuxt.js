// ==========================================
// TOPIC: Meta-Frameworks: Next.js & Nuxt.js (SSR, SSG, & Routing)
// ==========================================

/*
Definition:
Standard React or Vue applications render client-side (CSR), meaning the browser downloads a blank 
HTML shell and runs JS to build the interface. This can impact SEO performance.
Meta-frameworks solve this by rendering pages on the server (Server-Side Rendering) or compiling 
pages during the build process (Static Site Generation).

Key Strategies:
1. SSR (Server-Side Rendering): HTML is generated on the server for EVERY incoming request.
2. SSG (Static Site Generation): HTML is compiled once during the build process, serving static pages instantly.
3. File-based Routing: Pages are automatically mapped to URLs based on your directory layout.
*/


// ==========================================
// 1. Next.js (React Meta-Framework)
// ==========================================
/*
Next.js features the "App Router" (directory: /app) where folders map to routes.

A. File-Based Routing structure:
- app/page.js         --> Renders "/"
- app/about/page.js   --> Renders "/about"
- app/posts/[id]/page.js --> Renders dynamic route "/posts/101"

B. Server Component Example (SSR/SSG by default):
// app/posts/[id]/page.js
export default async function PostPage({ params }) {
    // Dynamic params resolution
    const { id } = params;

    // Fetching data directly on the server (very secure, directly accesses database or API)
    const res = await fetch(`https://api.example.com/posts/${id}`, {
        next: { revalidate: 3600 } // Incremental Static Regeneration (ISR) - revalidates every hour
    });
    const post = await res.json();

    return (
        <article className="post-container">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </article>
    );
}
*/


// ==========================================
// 2. Nuxt.js (Vue Meta-Framework)
// ==========================================
/*
Nuxt is the Vue counterpart to Next.js, featuring automatic code splitting and file-system routing.

A. Routing structure:
- pages/index.vue       --> Renders "/"
- pages/about.vue       --> Renders "/about"
- pages/posts/[id].vue  --> Renders dynamic route "/posts/:id"

B. Server Component Page (pages/posts/[id].vue):
<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;

// useFetch automatically fetches and caches data server-side
const { data: post } = await useFetch(`https://api.example.com/posts/${id}`);
</script>
*/
