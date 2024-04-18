<script>
  import { erase } from './stores.js';

  let erase_value;
  erase.subscribe(value => {
    erase_value = value;
  });

  function handleClick(event) {
    erase.update((e) => !e);
  }

  $: text = (erase_value ? "Draw" : "Erase");
</script>

<button id="erase-button" on:click={handleClick}>{text}</button>

<style>
  button {
    margin: 5px;
  }
</style>
