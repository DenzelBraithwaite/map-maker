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

  function handleSquareClick(event: any): void {
    const tile = event.detail;
    localStorage.setItem(`square-${tile.id}`, JSON.stringify(tile));
    squares.update($squares => {
      return $squares.map($s => {
        if ($s.id === tile.id) $s = tile;
        return $s;
      });
    });
  }
</script>

<section class="map">
  {#await isReady()}
    <p>Loading...</p>
  {:then}
    {#each $squares as sq (sq.id)}
      <Square {size} {currentColor} {currentItem} tileDetails={sq} on:click={handleSquareClick}/>
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
