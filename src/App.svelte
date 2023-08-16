<script>
  import Form from "./Form.svelte";
  import ColorList from "./ColorList.svelte";
</script>


<main>
  <Form />
  <ColorList />
</main>


<style>
  main {
    padding: 2rem;
    display: grid;
    row-gap: 1.5rem;
    height: 160px;
  }
</style>
