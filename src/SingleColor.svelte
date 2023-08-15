<script>
import { toasts } from "svelte-toasts";
export let index;
export let color;
const { hex, weight } = color;

  async function saveToClipboard() {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toasts.success('Color copied to clipboard!');
      } catch (error) {
        toasts.error('Failed to copy color to clipboard');
      }
    } else {
      toasts.error('Clipboard access not available');
    }
  }
</script>

<button
  class:color={index > 10}
  class:color-light={index > 10}
  style="background-color: #{hex};"
  on:click={saveToClipboard}
>
  <article>
    <p class="percent-value">{weight}%</p>
    <p class="color-value">#{hex}</p>
  </article>
</button>
