<script>
  import { width } from './stores.js';

  let defaultValue = 20;

  function handleChange(event) {
    width.set(event.target.value);
  }
</script>

<input id="width-slider" type="range" min="1" max="50" bind:value={defaultValue}
  on:change={handleChange}>

<style>
  input {
    margin: 5px;
  }
</style>
