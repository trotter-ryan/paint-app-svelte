<script>
  import { color } from './stores.js';

  function handleChange(event) {
    color.set(event.target.value);
  }
</script>

<input id="color-picker" type="color" on:change={handleChange}>

<style>
  input {
    margin: 5px;
  }
</style>
