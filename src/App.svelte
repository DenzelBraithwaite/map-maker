<script lang="ts">
  import firebase from './lib/firebase.js';

  // Components
  import { Button, ColorPalette, ItemPalette, Map } from './lib/index';

  let resizeValue = 0;
  let size = 'size-1';
  let currentColor = 'black';
  let currentItem = '';

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

  function changeItem(event: any) {
    currentItem = event.detail;
  }

  function testFirebase() {
  //   fetch('https://api.example.com/data')
  // .then(response => response.json())
  // .then(data => {
  //   console.log('GET response:', data);
  // })
  // .catch(error => {
  //   console.error('Error fetching data:', error);
  // });

    fetch('https://kk-map-maker-default-rtdb.firebaseio.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({test: 'this is a test from map maker!'})
    })
    .then(response => response.json())
    .then(data => {
      console.log('POST response:', data);
    })
    .catch(error => {
      console.error('Error posting data:', error);
    });
  }
</script>

<main>
  <div class="map-container">
    <section class="toolbar">
      <div class="resize-wrapper">
        <h2>Resize (<span class="color-blue">{resizeValue}</span>)</h2>
        <input bind:value={resizeValue} on:change={resizeGrid} step="01" min="0" max="9" type="range" />
      </div>
      <!-- <button class="clear-btn">Clear</button> -->
      <button style="background: none" on:click={testFirebase}>Test Firebase</button>

      <div class="palettes">
        <ItemPalette on:set-item={changeItem}/>
        <ColorPalette on:set-color={changeColor}/>
      </div>
    </section>

    <div class="map">
      <Map {size} {currentColor} {currentItem}/>
    </div>
  </div>
</main>

<style lang="scss">
  main {
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
    border-radius: 0.25rem;

    display: grid;
    grid-template-columns: 100%;
  }

  .map {
    overflow: scroll;
  }

  .palettes {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.5rem;
  }

  .toolbar {
    grid-column: 1 / -1;
    color: var(--white);
    padding: 2.5rem 2rem;
    background-color: #000000b6;
    box-shadow: var(--box-shadow-heavy);
    z-index: 1;
    border-radius: 0 0 0 75px;

    position: absolute;
    right: 0;
    width: 1000px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    .toolbar-title {
      font-size: 1.25rem;
      position: absolute;
      bottom: -1.75rem;
      right: 50%;
      transform: translateX(50%);
    }
  }

  .square {
    padding: 2px;
    border-radius: 0.25rem;
    transition: all 0.15s ease-out;
    z-index: 1;

    &:hover {
      cursor: pointer;
      scale: 1.1;
      border-style: dashed;
    }
  }

  // Utility
  .m-bottom-1 {
    margin-bottom: 1rem;
  }

  .color-blue {
    color: var(--blue);
  }
</style>
