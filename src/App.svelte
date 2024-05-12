<script lang="ts">
  // Components
  import { Button, ColorPalette, Map } from './lib/index';

  let resizeValue = 4;
  let size = 'size-5';
  let currentColor = 'black';
  let drawFastEnabled = false;

  function resizeGrid() {
    switch (resizeValue) {
      case 0:
        size = 'size-1';
        break;
      case 1:
        size = 'size-2';
        break;
      case 2:
        size = 'size-3';
        break;
      case 3:
        size = 'size-4';
        break;
      case 4:
        size = 'size-5';
        break;
      case 5:
        size = 'size-6';
        break;
      case 6:
        size = 'size-7';
        break;
      case 7:
        size = 'size-8';
        break;
      case 8:
        size = 'size-9';
        break;
      case 9:
        size = 'size-10';
        break;
      default:
        size = 'size-10';
        break;
    }
  }

  function changeColor(event: any) {
    currentColor = event.detail;
  }
  
  $: console.log(drawFastEnabled);
</script>

<main>
  <div class="map-container">
    <div class="toolbar">
      <div class="resize-wrapper">
        <h2>Resize (<span class="color-blue">{resizeValue}</span>)</h2>
        <input bind:value={resizeValue} on:change={resizeGrid} step="01" min="0" max="9" type="range" />
        <h2>Quick Draw</h2>
        <input bind:checked={drawFastEnabled} type="checkbox" />
      </div>

      <div class="color-palette">
        <ColorPalette on:set-color={changeColor}/>
      </div>
    </div>

    <div class="map">
      <Map {size} {currentColor} {drawFastEnabled}/>
    </div>
  </div>
</main>

<style lang="scss">
  main {
    background-color: #344b45;
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: absolute;
    bottom: 50%;
    right: 50%;
    transform: translate(50%, 50%);
  }

  .map-container {
    position: relative;
    width: 100dvw;
    height: 100dvh;
    background-color: #fffdef;
    border-radius: 0.25rem;

    display: grid;
    grid-template-columns: 100%;
  }

  .map {
    overflow: scroll;
  }

  .toolbar {
    grid-column: 1 / -1;
    color: var(--white);
    padding: 0.5rem;
    background-color: #1a1a1a;
    box-shadow: var(--box-shadow-heavy);
    z-index: 1;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
