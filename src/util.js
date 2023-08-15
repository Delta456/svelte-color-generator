import Values from "values.js";
import { createEventDispatcher, onMount } from 'svelte';
import { toasts, ToastContainer } from "svelte-toasts";
import { writable } from "svelte/store";


export function addColor(color) {
    try {
        let colors = new Values(color).all(10);
        console.log(colors)
        return colors
    } catch (error) {
        return new Values('#000000').all(10);
    }
  };

export async function saveToClipboard(hex) {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`${hex}`);
        toasts.success('Color copied to clipboard!');
      } catch (error) {
        toasts.error('Failed to copy color to clipboard');
      }
    } else {
      toasts.error('Clipboard access not available');
    }
}
