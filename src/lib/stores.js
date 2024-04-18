import { writable } from 'svelte/store';

export const color = writable("black");
export const erase = writable(false);
export const width = writable("10");
export const canvasRef = writable(null);