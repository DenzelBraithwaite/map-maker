<script lang="ts">
  // Props
  export let size: string;
  export let currentColor: string;
  export let currentItem: string;
  export let drawFastEnabled: boolean;

  type sq = {
    size: string;
    color: string;
    item: string;
    text: string;
  }

  const squareDetails: sq = {
    size: size,
    color: 'white',
    item: '',
    text: 'Hello'
  };

  function clickHandler() {
    squareDetails.color = currentColor;
    squareDetails.item = currentItem;
  }

  function quickDraw() {
    if (drawFastEnabled) squareDetails.color = currentColor;
    if (drawFastEnabled) squareDetails.item = currentItem;
  }
</script>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->

{#if squareDetails.item === 'tree'}
  <div on:click={clickHandler} on:mouseenter={quickDraw} class="square {size} {squareDetails.color}">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-name="Layer 1" viewBox="0 0 598 771">
      <rect x="270.59" y="569.5" width="57.92" height="197.88" fill="#795548"/>
      <polygon points="301.36 414.49 40.14 650.9 562.59 650.9 301.36 414.49" fill="#009688"/>
      <polygon points="300.76 320.79 73.92 544.61 527.59 544.61 300.76 320.79" fill="#009688"/>
      <polygon points="299.55 239.16 125.81 433.23 473.3 433.23 299.55 239.16" fill="#009688"/>
      <polygon points="299.55 159.84 169.24 333.95 429.86 333.95 299.55 159.84" fill="#009688"/>
      <polygon points="300.76 80.84 210.9 236.49 390.62 236.49 300.76 80.84" fill="#009688"/>
    </svg>
  </div> 
{:else if squareDetails.item === 'mountain'}
  <div on:click={clickHandler} on:mouseenter={quickDraw} class="square mountain-bg {size} {squareDetails.color}"></div>
{:else}
  <div on:click={clickHandler} on:mouseenter={quickDraw} class="square {size} {squareDetails.color}"></div>
{/if}

<style lang="scss">
  .square {
    border: 1px solid #1f1f1f;
    transition: all 0.15s ease-out;

    &:hover {
      cursor: pointer;
      scale: 1.1;
      border-style: dashed;
    }
  }
</style>
