<script>
    import SingleColor from "./SingleColor.svelte";
  //  import { nanoid } from 'nanoid';

    export let colors;

</script>


<section class="colors">
    {#each colors as color, index (color.id)}
      <SingleColor {color} {index} />
    {/each}
</section>

