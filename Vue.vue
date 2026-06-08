<!-- 
==========================================
TOPIC: Vue.js (Reactivity & Composition API)
==========================================

Definition:
Vue.js is a progressive, model-view-viewmodel JavaScript framework for building user interfaces.
In Vue 3, the Composition API provides a set of APIs that allow us to author Vue components 
using imported functions instead of declaring options (Options API).

Key Features:
1. Single File Components (SFC): Formatted as template, script, and style blocks in a single file.
2. Reactivity: Enabled via reactive utilities like `ref` and `reactive`.
-->

<template>
  <div class="vue-card">
    <h1>{{ title }}</h1>
    
    <!-- Reactive Count Value -->
    <p>Current Count: {{ count }}</p>
    <button @click="incrementCount">Increment</button>

    <!-- Reactive Object Properties -->
    <div class="user-profile">
      <h3>User: {{ user.name }}</h3>
      <p>Role: {{ user.role }}</p>
    </div>
  </div>
</template>

<script setup>
// The 'setup' attribute in the script tag activates Composition API shortcuts
import { ref, reactive } from 'vue';

// 1. Defining standard state
const title = 'Learning Vue 3 Composition API';

// 2. Reactivity with ref()
// ref() accepts a primitive value and returns a reactive, mutable object. 
// Inside <script>, you access/modify it using .value. In <template>, it is automatically unwrapped.
const count = ref(0);

const incrementCount = () => {
  count.value++; // .value is required in Javascript context
};

// 3. Reactivity with reactive()
// reactive() makes a shallow copy of an object/array reactive. 
// Unlike ref(), it does NOT require accessing property values via .value.
const user = reactive({
  name: 'Vijay',
  role: 'Developer'
});
</script>

<style scoped>
.vue-card {
  border: 1px solid #42b883;
  padding: 20px;
  border-radius: 8px;
  background-color: #f6f6f6;
  max-width: 400px;
}
button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #35495e;
}
</style>
