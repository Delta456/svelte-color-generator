<script>
  import Form  from './Form.svelte'
  import ColorList from "./ColorList.svelte";

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
</style>
