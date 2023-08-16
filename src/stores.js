import { writable } from 'svelte/store';

export const DEFAULT_COLOR = "#f15025";

export const color = writable(DEFAULT_COLOR);
