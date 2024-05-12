<script lang="ts">
  // components
  import { Square } from './index';

  // props
  export let size: string;
  export let currentColor: string;
  export let drawFastEnabled: boolean;
</script>

<div class="map">
  <!-- 2450 / 70 (cols) -->
  {#each Array(2450) as _}
    <Square {size} {currentColor} {drawFastEnabled}/>
  {/each}
</div>

<style lang="scss">
  .map {
    position: relative;
    border-radius: 0.25rem;

    display: grid;
    grid-template-columns: repeat(70, 1fr);
  }
</style>
