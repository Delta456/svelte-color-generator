<script>
  import Form from "./Form.svelte";
  import ColorList from "./ColorList.svelte";

  let color = "#f15025";
</script>

<main class="container">
  <Form bind:color />
  <ColorList bind:color />
</main>

<style>
  .container {
    padding: 2rem;
    display: grid;
    row-gap: 1.5rem;
    height: 160px;
  }
</style>
