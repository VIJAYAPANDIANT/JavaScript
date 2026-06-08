// ==========================================
// TOPIC: State Management (Redux, Zustand, & Pinia)
// ==========================================

/*
Definition:
In complex, nested component structures, sharing data/state between components using props 
can become tedious (prop-drilling). Global state management libraries create a single "source of truth" 
store that any component can subscribe to or dispatch actions to.

Featured Libraries:
1. Redux (Toolkit): The industry-standard library, structured with strict patterns (actions, reducers).
2. Zustand: A modern, minimalist, hook-based state management library for React.
3. Pinia: The official, lightweight Vue 3 state management library (replacing Vuex).
*/


// ==========================================
// 1. Redux Toolkit (React)
// ==========================================
/*
Redux is built on dispatching actions to a reducer function to update a central store.

--- store.js ---
import { configureStore, createSlice } from "@redux/toolkit";

// createSlice creates actions and reducers in one step
const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1; // Immer library handles safe draft mutation under the hood
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
});

// Export Actions
export const { increment, decrement } = counterSlice.actions;

// Configure global Store
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});


--- React Usage Component ---
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./store";

function ReduxCounter() {
    const count = useSelector((state) => state.counter.value); // Read state
    const dispatch = useDispatch(); // Dispatch actions

    return <button onClick={() => dispatch(increment())}>Count: {count}</button>;
}
*/


// ==========================================
// 2. Zustand (React - Modern & Minimalist)
// ==========================================
/*
Zustand defines a hook containing state variables and modifier functions. No complex providers needed.

--- store.js ---
import { create } from "zustand";

const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 }))
}));


--- React Usage Component ---
function ZustandCounter() {
    const { count, increment } = useStore(); // Simple hooks-based access

    return <button onClick={increment}>Count: {count}</button>;
}
*/


// ==========================================
// 3. Pinia (Vue 3)
// ==========================================
/*
Pinia uses Vue 3 reactivity elements (`ref`, `reactive`) to define global stores.

--- store.js ---
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0);
    function increment() {
        count.value++;
    }
    return { count, increment };
});


--- Vue Component Usage ---
<template>
  <button @click="store.increment">Count: {{ store.count }}</button>
</template>

<script setup>
import { useCounterStore } from './store';
const store = useCounterStore();
</script>
*/
