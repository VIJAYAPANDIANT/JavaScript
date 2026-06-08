// ==========================================
// TOPIC: Alternative Frameworks: Svelte & Angular
// ==========================================

/*
Definition:
While React and Vue are highly popular, Svelte and Angular represent two unique, alternative 
approaches to building modern web applications.

1. Svelte:
   Svelte is a radical compiler. Instead of doing work in the browser (like using a Virtual DOM 
   to compare differences), Svelte compiles your code to tiny, framework-free vanilla JS 
   at build time. This results in faster initial loading speeds and low memory overhead.

2. Angular:
   Developed by Google, Angular is a robust, opinionated, TypeScript-based framework designed for 
   building enterprise-scale applications. It provides a full set of built-in features including 
   routing, forms validation, dependency injection, and HTTP requests out of the box.

================================================================================
SYNTAX REFERENCE
================================================================================
// Svelte syntax
<script>
  let count = 0; // State is reactive by assignment
  $: doubled = count * 2; // Reactive statement
</script>
<button on:click={() => count++}>{count}</button>

// Angular syntax
@Component({
  selector: 'app-root',
  template: `<button (click)="increment()">{{ count }}</button>`
})
export class AppComponent {
  count = 0;
  increment() { this.count++; }
}
*/


// ==========================================
// 1. Svelte Example Structure (.svelte)
// ==========================================
/*
Svelte files are clean, standard HTML/JS documents. Variable declarations are reactive by default.

--- Svelte Component: Counter.svelte ---
<script>
  let count = 0; // Standard variable (automatically reactive!)

  function increment() {
    count += 1;
  }
</script>

<main>
  <h1>Svelte Counter</h1>
  <button on:click={increment}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
  </button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
  }
  button {
    background: #ff3e00;
    color: white;
  }
</style>
*/


// ==========================================
// 2. Angular Example Structure (.ts)
// ==========================================
/*
Angular components utilize TypeScript decorators to couple HTML templates, CSS styles, 
and application logic classes together.

--- Angular Component: counter.component.ts ---
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter-container">
      <h1>Angular Counter</h1>
      <p>Current Count: {{ count }}</p>
      <button (click)="increment()">Increment</button>
    </div>
  `,
  styles: [`
    .counter-container { padding: 20px; }
    button { background-color: #dd0031; color: white; border: none; }
  `]
})
export class CounterComponent {
  count: number = 0; // State variable

  increment() {
    this.count++;
  }
}
*/
