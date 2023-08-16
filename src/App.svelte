<script>
  import Form from "./Form.svelte";
  import ColorList from "./ColorList.svelte";
</script>

<main class="container">
  <Form />
  <ColorList />
</main>

<style>
  .container {
    padding: 2rem;
    display: grid;
    row-gap: 1.5rem;
    height: 160px;
  }
</style>
