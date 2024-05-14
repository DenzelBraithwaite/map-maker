<script lang="ts">
  // components
  import { Square } from './index';

  // props
  export let size: string;
  export let currentColor: string;
  export let currentItem: string;

  type Tile = {
    id: number;
    size?: string;
    color?: string;
    item?: string;
    text?: string;
  }

  let squares: Tile[] = [];
  // 2450 / 70 ( col s)
  for (let i = 1; i <= 2450; i++) {
    squares = [{id: i, color: 'white'}, ...squares];
  }

  function sortHandler(e: any): void {
    squares = e.detail.items;
  }

  // function clearMap(): void {
  //   squares.forEach(sq => sq.color = 'white');
  //   squares = [...squares];
  // }
</script>

<section class="map">
  {#each squares as sq (sq.id)}
    <Square {size} {currentColor} {currentItem}/>
    <!-- <Square {size} {currentColor} {currentItem} square={sq}/> -->
  {/each}
</section>

<style lang="scss">
  .map {
    position: relative;
    border-radius: 0.25rem;

    display: grid;
    grid-template-columns: repeat(70, 1fr);
  }
</style>
