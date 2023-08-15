<script>
  import Values from "values.js";
  import { writable } from "svelte/store";
  import { createEventDispatcher, onMount } from 'svelte';
  import { toasts, ToastContainer } from "svelte-toasts";
  import Form  from './Form.svelte'
  import ColorList from "./ColorList.svelte";

    const colors = writable(new Values('#f15025').all(10));
    let dispatch = createEventDispatcher()
    export function addColor(color) {
      dispatch('color-picker', )
      try {
        let newColors = new Values(color).all(10)
        console.log(newColors);
        colors.set(newColors);
      } catch (error) {
        console.log(error.message);
        toasts.error(error.message)
      }
      onMount(() => {
      });
    };
</script>

<main>
  <Form addColor={addColor} />
  <ToastContainer placement='top-center' />
</main>
