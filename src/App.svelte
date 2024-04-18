<script>
  import Canvas from './lib/Canvas.svelte'
  import ColorPicker from './lib/ColorPicker.svelte';
  import Erase from './lib/Erase.svelte';
  import WidthSlider from './lib/WidthSlider.svelte';
  import ClearButton from './lib/ClearButton.svelte';

  import { color } from './lib/stores.js';
  import { erase } from './lib/stores.js';

  // let color_value;
  // color.subscribe((value) => {
	// 	color_value = value;
	// });

  // let erase_value;
  // erase.subscribe((value) => {
	// 	erase_value = value;
	// });
</script>

<main>
  <h1>Paint App</h1>

  <div class="paint">
    <ColorPicker />
    <Erase />
    <WidthSlider />
    <ClearButton />
    <Canvas />
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
