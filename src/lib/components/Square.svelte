<script lang="ts">
  // hooks
  import { createEventDispatcher } from 'svelte';

  // Types
  import type { Tile } from '../stores/squares';

  // Props
  export let size: string;
  export let currentColor: string;
  export let currentItem: string;
  export let tileDetails: Tile;
  
  const createEvent = createEventDispatcher();

  function clickHandler(event: any) {
    event.preventDefault();
    if (event.type === 'dragenter') event.dataTransfer.setDragImage(new Image(), 0, 0);
    tileDetails.color = currentColor;
    tileDetails.item = currentItem;
    createEvent('click', tileDetails);
  }
</script>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->

{#if tileDetails.item === 'person'}
  <div draggable={true} on:touchstart={event => clickHandler(event)} on:dragenter={event => clickHandler(event)} on:click={event => clickHandler(event)} class:border-light={['black', 'maroon'].includes(tileDetails.color)} class:border-none={!tileDetails.border} class="square item-bg person-bg {size} {tileDetails.color}"></div>
  {:else if tileDetails.item === 'tree'}
  <div draggable={true} on:touchstart={event => clickHandler(event)} on:dragenter={event => clickHandler(event)} on:click={event => clickHandler(event)} class:border-light={['black', 'maroon'].includes(tileDetails.color)} class:border-none={!tileDetails.border} class="square item-bg tree-bg {size} {tileDetails.color}"></div>
{:else if tileDetails.item === 'mountain'}
  <div draggable={true} on:touchstart={event => clickHandler(event)} on:dragenter={event => clickHandler(event)} on:click={event => clickHandler(event)} class:border-light={['black', 'maroon'].includes(tileDetails.color)} class:border-none={!tileDetails.border} class="square item-bg mountain-bg {size} {tileDetails.color}"></div>
{:else if tileDetails.item === 'rock'}
  <div draggable={true} on:touchstart={event => clickHandler(event)} on:dragenter={event => clickHandler(event)} on:click={event => clickHandler(event)} class:border-light={['black', 'maroon'].includes(tileDetails.color)} class:border-none={!tileDetails.border} class="square item-bg rock-bg {size} {tileDetails.color}"></div>
{:else if tileDetails.item === 'bush'}
  <div draggable={true} on:touchstart={event => clickHandler(event)} on:dragenter={event => clickHandler(event)} on:click={event => clickHandler(event)} class:border-light={['black', 'maroon'].includes(tileDetails.color)} class:border-none={!tileDetails.border} class="square item-bg bush-bg {size} {tileDetails.color}"></div>
{:else if tileDetails.item === 'berry-bush'}
  <div draggable={true} on:touchstart={event => clickHandler(event)} on:dragenter={event => clickHandler(event)} on:click={event => clickHandler(event)} class:border-light={['black', 'maroon'].includes(tileDetails.color)} class:border-none={!tileDetails.border} class="square item-bg berry-bush-bg {size} {tileDetails.color}"></div>
{:else if tileDetails.item === 'chest'}
  <div draggable={true} on:touchstart={event => clickHandler(event)} on:dragenter={event => clickHandler(event)} on:click={event => clickHandler(event)} class:border-light={['black', 'maroon'].includes(tileDetails.color)} class:border-none={!tileDetails.border} class="square item-bg chest-bg {size} {tileDetails.color}"></div>
{:else if tileDetails.item === 'house'}
  <div draggable={true} on:touchstart={event => clickHandler(event)} on:dragenter={event => clickHandler(event)} on:click={event => clickHandler(event)} class:border-light={['black', 'maroon'].includes(tileDetails.color)} class:border-none={!tileDetails.border} class="square item-bg house-bg {size} {tileDetails.color}"></div>
{:else if tileDetails.item === 'track'}
  <div draggable={true} on:touchstart={event => clickHandler(event)} on:dragenter={event => clickHandler(event)} on:click={event => clickHandler(event)} class:border-light={['black', 'maroon'].includes(tileDetails.color)} class:border-none={!tileDetails.border} class="square item-bg track-bg {size} {tileDetails.color}"></div>
{:else}
  <div draggable={true} on:touchstart={event => clickHandler(event)} on:dragenter={event => clickHandler(event)} on:click={event => clickHandler(event)} class:border-light={['black', 'maroon'].includes(tileDetails.color)} class:border-none={!tileDetails.border} class="square {size} {tileDetails.color}"></div>
{/if}

<style lang="scss">
  .square {
    border: 1px solid #1f1f1f2e;
    cursor: cell;
    // touch-action: none;
    
    &:hover,
    &:active {
      scale: 1.1;
      border: 4px dashed #1f1f1f;
    }
  }

  .border-light {
    border: 1px solid #6767679d;
  }

  .border-none {
    border: 1px solid transparent;
  }
</style>
