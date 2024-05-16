<script lang="ts">
  // hooks
  import { createEventDispatcher } from "svelte";
  
  const createEvent = createEventDispatcher();
  let item = '';

  function setItem(i: string): void {
    item = i;
    createEvent('set-item', i);
  }
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<div class="item-palette">
  <div on:click={() => setItem('')} class="square" class:active={item === ''}></div>
  <div on:click={() => setItem('person')} class="square item-bg person-bg" class:active={item === 'person'}></div>
  <div on:click={() => setItem('tree')} class="square" class:active={item === 'tree'}>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-name="Layer 1" viewBox="0 0 598 771" class="item">
      <rect x="270.59" y="569.5" width="57.92" height="197.88" fill="#795548"/>
      <polygon points="301.36 414.49 40.14 650.9 562.59 650.9 301.36 414.49" fill="#009688"/>
      <polygon points="300.76 320.79 73.92 544.61 527.59 544.61 300.76 320.79" fill="#009688"/>
      <polygon points="299.55 239.16 125.81 433.23 473.3 433.23 299.55 239.16" fill="#009688"/>
      <polygon points="299.55 159.84 169.24 333.95 429.86 333.95 299.55 159.84" fill="#009688"/>
      <polygon points="300.76 80.84 210.9 236.49 390.62 236.49 300.76 80.84" fill="#009688"/>
    </svg>
  </div>
  <div on:click={() => setItem('mountain')} class="square item-bg mountain-bg" class:active={item === 'mountain'}></div>
  <div on:click={() => setItem('rock')} class="square item-bg rock-bg" class:active={item === 'rock'}></div>
  <div on:click={() => setItem('bush')} class="square item-bg bush-bg" class:active={item === 'bush'}></div>
  <div on:click={() => setItem('berry-bush')} class="square item-bg berry-bush-bg" class:active={item === 'berry-bush'}></div>
  <div on:click={() => setItem('chest')} class="square item-bg chest-bg" class:active={item === 'chest'}></div>
  <div on:click={() => setItem('house')} class="square item-bg house-bg" class:active={item === 'house'}></div>
  <div on:click={() => setItem('track')} class="square item-bg track-bg" class:active={item === 'house'}></div>
  <h2 class="toolbar-title">Objects</h2>
</div>


<style lang="scss">
  .item-palette {
    position: relative;
    min-height: 70px;
    padding: 4px;
    background-color: #9c9666;
    border-radius: 0.25rem;
    
    display: inline-grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 2px;
    
    .square {
      background-color: var(--white);
      border-radius: 0.25rem;
      width: 30px;
      height: 30px;
      transition: all 0.1s ease-out;

      &:hover {
        cursor: pointer;
        scale: 1.1;
      }
    }

    .item {
      height: 90%;
      width: 90%;
    }
  }

  .toolbar-title {
    font-size: 1.25rem;
    position: absolute;
    bottom: -1.75rem;
    right: 50%;
    transform: translateX(50%);
    }

  .active {
    border: 4px dashed #222;
  }
</style>