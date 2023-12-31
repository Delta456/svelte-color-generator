import Values from "values.js";
import { toasts } from "svelte-toasts";

export function addColor(color) {
  try {
    const colors = new Values(color).all(10);
    console.log("addColor:", {colors});
    return colors;
  } catch (error) {
    return new Values("#000000").all(10);
  }
}

export async function saveToClipboard(hex) {
  if (!navigator.clipboard) {
    toasts.error("Clipboard access not available");
    return;
  }

  try {
    await navigator.clipboard.writeText(`${hex}`);
    toasts.success("Color copied to clipboard!");
  } catch (error) {
    toasts.error("Failed to copy color to clipboard");
  }
}
