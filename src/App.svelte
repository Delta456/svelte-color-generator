<script>
  import Values from "values.js";
  import { writable } from "svelte/store";
  import { createEventDispatcher, onMount } from 'svelte';
  import { toasts, ToastContainer } from "svelte-toasts";
  import Form  from './Form.svelte'
  import ColorList from "./ColorList.svelte";
  import { addColor } from './util.js';

  let color = '#f15025';  
</script>

<main class="container">
  <Form bind:color={color}/>
  <ColorList bind:color={color}/>
</main>


<style>
  .container {
  padding: 2rem;
  display: grid;
  row-gap: 1.5rem;
  height: 160px;
}

body {
  background: var(--backgroundColor);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  line-height: 1;
  color: var(--textColor);
}
p {
  margin: 0;
}
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  font-family: var(--headingFont);
  font-weight: 400;
  line-height: 1;
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
}
</style>
