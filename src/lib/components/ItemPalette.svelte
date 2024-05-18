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
  <div on:click={() => setItem('mountain')} class="square item-bg mountain-bg" class:active={item === 'mountain'}></div>
  <div on:click={() => setItem('rock')} class="square item-bg rock-bg" class:active={item === 'rock'}></div>
  <div on:click={() => setItem('tree')} class="square item-bg tree-bg" class:active={item === 'tree'}></div>
  <div on:click={() => setItem('bush')} class="square item-bg bush-bg" class:active={item === 'bush'}></div>
  <div on:click={() => setItem('berry-bush')} class="square item-bg berry-bush-bg" class:active={item === 'berry-bush'}></div>
  <div on:click={() => setItem('chest')} class="square item-bg chest-bg" class:active={item === 'chest'}></div>
  <div on:click={() => setItem('house')} class="square item-bg house-bg" class:active={item === 'house'}></div>
  <div on:click={() => setItem('track')} class="square item-bg track-bg" class:active={item === 'track'}></div>
</div>


<style lang="scss">
  .item-palette {
    position: relative;
    height: 70px;
    padding: 4px;
    background-color: #9c9666;
    border-radius: 4px;
    
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