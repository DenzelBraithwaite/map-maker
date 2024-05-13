<script lang="ts">
  // components
  import { Square } from './index';

  // props
  export let size: string;
  export let currentColor: string;
  export let currentItem: string;

  type Square = {
    id: number;
    size?: string;
    color?: string;
    item?: string;
    text?: string;
  }

  let squares: Square[] = [];
  // 2450 / 70 ( col s)
  for (let i = 1; i <= 2450; i++) {
    squares = [{id: i}, ...squares];
  }

  function sortHandler(e: any): void {
    squares = e.detail.items;
  }
</script>

<section class="map">
  {#each squares as s (s.id)}
  <Square {size} {currentColor} {currentItem}/>
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
