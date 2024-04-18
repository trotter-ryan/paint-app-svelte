<script>
  import { setContext, onMount } from "svelte";

  import { color, erase, width, canvasRef } from './stores.js';

  let color_value;
  color.subscribe((value) => {
		color_value = value;
	});

  let erase_value;
  erase.subscribe((value) => {
		erase_value = value;
	});

  let width_value;
  width.subscribe((value) => {
		width_value = value;
	});

  let canvas, ctx;
  let isDrawing;

  onMount(() => {
    canvasRef.set(canvas);
		ctx = canvas.getContext('2d');
    isDrawing = false;
	});

  function handleMove(event) {
    if (isDrawing) {
      ctx.lineWidth = width_value;
      erase_value ? ctx.strokeStyle = "white" : ctx.strokeStyle = color_value;

      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
    }
  };

  function handleMouseDown() {
    ctx.beginPath();
    isDrawing = true;
  }

  function handleMouseUp() {
    isDrawing = false;
  }
</script>

<canvas bind:this={canvas}
  id="canvas-element" width="800" height="600"
  on:mousemove={handleMove}
  on:mousedown={handleMouseDown}
  on:mouseup={handleMouseUp}
  on:mouseleave={handleMouseUp}
>
</canvas>

<style>
  canvas {
    display: block;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    margin: auto;
    margin-top: 5px;
    background-color: white;
  }
</style>
