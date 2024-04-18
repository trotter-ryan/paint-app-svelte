<script>
  import { canvasRef } from './stores.js';

  let canvas, ctx;
  canvasRef.subscribe((value) => {
    canvas = value;
  })

  function handleClick(event) {
    ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
  }
</script>

<button id="clear-button" on:click={handleClick}>Clear All</button>

<style>
  button {
    margin: 5px;
  }
</style>
