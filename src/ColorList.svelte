<script>
    import { addColor, saveToClipboard } from "./util.js"
    export let color;
    import { ToastContainer, FlatToast } from "svelte-toasts";

    $: colors = addColor(color);
  console.log("color list: " , colors)
</script>


<section class="colors">
  {#each colors as c, index}
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <article
  class="color-light color"
  style="background-color: {c.hexString()};"
  on:mousedown={() => {saveToClipboard(c.hexString())}}
>
    <p class="percent-value">{c.weight}%</p>
    <p class="color-value">{c.hexString()}</p>
 
</article>

    {/each}
</section>


<ToastContainer placement="top-center" let:data={data}>
  <FlatToast {data} />
</ToastContainer>

<style>
.colors {
  min-height: calc(100vh - 160px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
}

.color {
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  text-transform: none;
}
.color p {
  line-height: 1.5;
  margin-bottom: 0.25rem;
}

.color-light .color-value {
  color: var(--white);
}
.color-light .percent-value {
  color: var(--white);
}
</style>
