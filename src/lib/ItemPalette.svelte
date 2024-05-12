<script lang="ts">
  // hooks
  import { createEventDispatcher } from "svelte";
  
  const createEvent = createEventDispatcher();
  function setItem(item: string): void {
    createEvent('set-item', item);
  }
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<div class="color-palette">
  <div on:click={() => setItem('')} class="square"></div>
  <div on:click={() => setItem('tree')} class="square">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-name="Layer 1" viewBox="0 0 598 771" class="item">
      <rect x="270.59" y="569.5" width="57.92" height="197.88" fill="#795548"/>
      <polygon points="301.36 414.49 40.14 650.9 562.59 650.9 301.36 414.49" fill="#009688"/>
      <polygon points="300.76 320.79 73.92 544.61 527.59 544.61 300.76 320.79" fill="#009688"/>
      <polygon points="299.55 239.16 125.81 433.23 473.3 433.23 299.55 239.16" fill="#009688"/>
      <polygon points="299.55 159.84 169.24 333.95 429.86 333.95 299.55 159.84" fill="#009688"/>
      <polygon points="300.76 80.84 210.9 236.49 390.62 236.49 300.76 80.84" fill="#009688"/>
    </svg>
  </div>
  <div on:click={() => setItem('mountain')} class="square">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.000000 120.000000" preserveAspectRatio="xMidYMid meet" class="stroke-brown">
      <g transform="translate(0.000000,120.000000) scale(0.100000,-0.100000)">
        <path d="M850 1100 c-6 -11 -16 -59 -21 -108 -6 -48 -18 -100 -26 -117 -19 -38 -53 -75 -68 -75 -7 0 -36 24 -65 53 -75 74 -98 87 -151 87 -39 0 -51 -5 -81 -34 -36 -35 -39 -44 -61 -151 -8 -41 -17 -60 -27 -60 -8 0 -32 26 -52 58 -56 83 -68 80 -190 -43 l-99 -100 6 -288 c4 -158 9 -290 12 -294 2 -5 267 -8 589 -8 l584 0 0 368 0 368 -26 35 c-14 19 -36 54 -49 79 -14 25 -38 61 -54 80 l-30 35 -28 -26 c-15 -15 -33 -25 -40 -22 -6 2 -22 34 -34 71 -36 108 -65 138 -89 92z"/>
      </g>
    </svg>
  </div>
</div>

<style lang="scss">
  .color-palette {
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
</style>