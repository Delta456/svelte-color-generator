<script>
    import addColor from './App.svelte';

    let color = '';
  
    function handleSubmit(event) {
      event.preventDefault();
      new addColor(color);
    }
  </script>
  
  <section class="container">
    <h4>color generator</h4>
    <form class="color-form" on:submit={handleSubmit}>
      <input type="color" bind:value={color} />
      <input type="text" bind:value={color} placeholder="#f15025" />
      <button class="btn" type="submit" style="background: {color}">
        submit
      </button>
    </form>
  </section>
