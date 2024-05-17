<script lang="ts">
  import firebase from './lib/firebase.js';

  // stores
  import { squares } from './lib/stores/squares';

  // Components
  import { Button, ColorPalette, ItemPalette, Map } from './lib/components/index';

  let resizeValue = 0;
  let bordersVisible = false || Boolean(JSON.parse(localStorage.getItem('borders-visible')));
  let fillModeEnabled = false;
  let size = 'size-1';
  let currentColor = 'black';
  let currentItem = '';
  let firebaseUrl = 'https://kk-map-maker-default-rtdb.firebaseio.com/';

  function testFirebase() {
    fetch(firebaseUrl)
    .then(response => response.json())
    .then(data => {
      console.log('GET response:', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

    // fetch(firebaseUrl, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   },
    //   body: JSON.stringify({test: 'this is a test from map maker!'})
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('POST response:', data);
    // })
    // .catch(error => {
    //   console.error('Error posting data:', error);
    // });
  }

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

  function clearScreen(): void {
    $squares.forEach(s => {
      localStorage.setItem(`square-${s.id}`, JSON.stringify({id: s.id, size: s.size, color: 'beige', border: s.border, item: ''}));
    });
    squares.update($squares => {
      return $squares.map(s => {
        s.color = 'beige';
        s.item = '';
        return s;
      });
    });
  }

  function fillScreen(event: any): void {
    const selectedColor = event.detail;
    $squares.forEach(s => {
      localStorage.setItem(`square-${s.id}`, JSON.stringify({id: s.id, size: s.size, color: selectedColor, border: s.border, item: ''}));
    });
    squares.update($squares => {
      return $squares.map(s => {
        s.color = selectedColor;
        return s;
      });
    });
  }

  function toggleBorders(): void {
    localStorage.setItem('borders-visible', JSON.stringify(bordersVisible));
    $squares.forEach(s => {
      localStorage.setItem(`square-${s.id}`, JSON.stringify({id: s.id, size: s.size, color: s.color, border: bordersVisible, item: ''}));
    });
    squares.update($squares => {
      return $squares.map(s => {
        s.border = bordersVisible;
        return s;
      });
    });
  }
</script>

<main>
  <div class="map-container">
    <section class="toolbar">
      <!-- <button on:click={testFirebase}>Test Firebase</button> -->
      <div class="toolbar-wrapper">
        <button on:click={clearScreen} class="toolbar-btn">Clear</button>

        <h2 class="toolbar-title">Borders
          <input bind:checked={bordersVisible} on:change={toggleBorders} type="checkbox"/>
        </h2>
        <h2 class="toolbar-title">Fill
          <input bind:checked={fillModeEnabled} type="checkbox"/>
        </h2>

        <h2 class="toolbar-title">Zoom (<span class="color-blue">{resizeValue}</span>)
          <input bind:value={resizeValue} on:change={resizeGrid} step="01" min="0" max="9" type="range" />
        </h2>

        <div class="palettes">
          <ItemPalette on:set-item={changeItem}/>
          <ColorPalette {fillModeEnabled} on:set-color={changeColor} on:fill-screen={fillScreen}/>
        </div>
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

  .toolbar {
    color: var(--white);
    background-color: #000000b6;
    box-shadow: var(--box-shadow-heavy);
    z-index: 1;
    border-radius: 10px;
    max-width: 90dvw;

    position: absolute;
    right: 50%;
    transform: translateX(50%);
    
    display: flex;
    align-items: center;
    gap: 16px;

    .toolbar-title {
      font-size: 1.125rem;
    }

    .toolbar-wrapper {
      padding: 1.25rem 1.25rem 1.5rem;
      overflow-x: scroll;
      display: flex;
      align-items: center;
      gap: 16px;

      .palettes {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 0.5rem;
      }

      .toolbar-btn {
        padding: 0.5rem;
        background-color: var(--red);
        border: none;
        border-radius: 4px;
        color: var(--white);

        &:hover {
          cursor: pointer;
          scale: 1.05;
          background-color: #f45858;
        }
      }
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
