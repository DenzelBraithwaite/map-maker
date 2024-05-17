<script lang="ts">
  // stores
  import { squares, getSquares } from '../stores/squares';
  import type { Tile } from '../stores/squares';

  // components
  import { Square } from './index';

  // props
  export let size: string;
  export let currentColor: string;
  export let currentItem: string;

  async function isReady(): Promise<void> {
    await getSquares();
  }
</script>

<section class="map">
  {#await isReady()}
    <p>Loading...</p>
  {:then}
    {#each $squares as sq (sq.id)}
      <Square {size} {currentColor} {currentItem} tileDetails={sq}/>
    {/each}
  {/await}
</section>

<style lang="scss">
  .map {
    position: relative;
    border-radius: 0.25rem;

    display: grid;
    grid-template-columns: repeat(70, 1fr);
  }
</style>
