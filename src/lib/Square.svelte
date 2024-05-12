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
<!-- TODO: on hover, text visible -->
<!-- <div on:click={clickHandler} on:mouseenter={quickDraw} class="square {size} {squareDetails.color}">
  {#if squareDetails.item === 'tree'}
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-name="Layer 1" viewBox="0 0 598 771">
      <rect x="270.59" y="569.5" width="57.92" height="197.88" fill="#795548"/>
      <polygon points="301.36 414.49 40.14 650.9 562.59 650.9 301.36 414.49" fill="#009688"/>
      <polygon points="300.76 320.79 73.92 544.61 527.59 544.61 300.76 320.79" fill="#009688"/>
      <polygon points="299.55 239.16 125.81 433.23 473.3 433.23 299.55 239.16" fill="#009688"/>
      <polygon points="299.55 159.84 169.24 333.95 429.86 333.95 299.55 159.84" fill="#009688"/>
      <polygon points="300.76 80.84 210.9 236.49 390.62 236.49 300.76 80.84" fill="#009688"/>
    </svg>
  {:else if squareDetails.item === 'mountain'}
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.000000 120.000000" preserveAspectRatio="xMidYMid meet" class="stroke-brown">
      <g transform="translate(0.000000,120.000000) scale(0.100000,-0.100000)">
        <path d="M850 1100 c-6 -11 -16 -59 -21 -108 -6 -48 -18 -100 -26 -117 -19 -38 -53 -75 -68 -75 -7 0 -36 24 -65 53 -75 74 -98 87 -151 87 -39 0 -51 -5 -81 -34 -36 -35 -39 -44 -61 -151 -8 -41 -17 -60 -27 -60 -8 0 -32 26 -52 58 -56 83 -68 80 -190 -43 l-99 -100 6 -288 c4 -158 9 -290 12 -294 2 -5 267 -8 589 -8 l584 0 0 368 0 368 -26 35 c-14 19 -36 54 -49 79 -14 25 -38 61 -54 80 l-30 35 -28 -26 c-15 -15 -33 -25 -40 -22 -6 2 -22 34 -34 71 -36 108 -65 138 -89 92z"/>
      </g>
    </svg>
  {/if}
</div> -->

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
