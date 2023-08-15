<script>
  export let color;
  function handleSubmit(event) {
    event.preventDefault();
    color = event.target.value;
  }
</script>

<section class="container" style="--color:{color}">
  <h3>Color Generator</h3>
  <form class="color-form" on:submit={handleSubmit}>
    <input type="color" bind:value={color} />
    <input type="text" bind:value={color} placeholder="#f15025" />
  </form>
</section>

<style>
  input[type="color"] {
    height: 42px;
    background-color: var(--color);
    border-color: var(--color);
    border-width: 0;
    padding: 0;
  }

  input[type="text"] {
    border-color: transparent;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border-top-left-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
  }

  .color-form {
    display: flex;
    flex-wrap: wrap;
  }

  .color-form > input {
    margin-right: 1rem;
  }
  .container {
    display: flex;
    align-items: center;
  }

  .container > * {
    margin-right: 2rem;
  }

  h3 {
    margin: 0;
    font-family: var(--headingFont);
    font-weight: 400;
    line-height: 1;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
</style>
