import { writable, derived } from "svelte/store";
import { addColor } from "./util.js";

export const DEFAULT_COLOR = "#f15025";

export const color = writable(DEFAULT_COLOR);

export const colors = derived(
  color,
  $color => {
    const allColors = addColor($color);
    console.log("color list:", allColors);
    return allColors;
  }
);
