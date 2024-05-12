<script lang="ts">
  // hooks
  import { createEventDispatcher } from "svelte";
  
  const createEvent = createEventDispatcher();
  function setColor(color: string): void {
    createEvent('set-color', color);
  }
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<div class="color-palette">
  <div on:click={() => setColor('black')} class="square bg-black"></div>
  <div on:click={() => setColor('dark-grey')} class="square bg-dark-grey"></div>
  <div on:click={() => setColor('maroon')} class="square bg-maroon"></div>
  <div on:click={() => setColor('red')} class="square bg-red"></div>
  <div on:click={() => setColor('orange')} class="square bg-orange"></div>
  <div on:click={() => setColor('yellow')} class="square bg-yellow"></div>
  <div on:click={() => setColor('green')} class="square bg-green"></div>
  <div on:click={() => setColor('blue')} class="square bg-blue"></div>
  <div on:click={() => setColor('indigo')} class="square bg-indigo"></div>
  <div on:click={() => setColor('purple')} class="square bg-purple"></div>
  <div on:click={() => setColor('white')} class="square bg-white"></div>
  <div on:click={() => setColor('grey')} class="square bg-grey"></div>
  <div on:click={() => setColor('brown')} class="square bg-brown"></div>
  <div on:click={() => setColor('pink')} class="square bg-pink"></div>
  <div on:click={() => setColor('gold')} class="square bg-gold"></div>
  <div on:click={() => setColor('beige')} class="square bg-beige"></div>
  <div on:click={() => setColor('light-green')} class="square bg-light-green"></div>
  <div on:click={() => setColor('light-blue')} class="square bg-light-blue"></div>
  <div on:click={() => setColor('light-indigo')} class="square bg-light-indigo"></div>
  <div on:click={() => setColor('light-purple')} class="square bg-light-purple"></div>
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
      border-radius: 0.25rem;
      width: 30px;
      height: 30px;
      transition: all 0.1s ease-out;

      &:hover {
        cursor: pointer;
        scale: 1.1;
      }
    }
  }

  // bg colors
  .bg-black {
    background-color: var(--black);
  }

  .bg-white {
    background-color: var(--white);
  }

  .bg-dark-grey {
    background-color: var(--dark-grey);
  }

  .bg-grey {
    background-color: var(--grey);
  }

  .bg-light-grey {
    background-color: var(--light-grey);
  }

  .bg-maroon {
    background-color: var(--maroon);
  }

  .bg-brown {
    background-color: var(--brown);
  }

  .bg-red {
    background-color: var(--red);
  }

  .bg-pink {
    background-color: var(--pink);
  }

  .bg-orange {
    background-color: var(--orange);
  }

  .bg-gold {
    background-color: var(--gold);
  }

  .bg-yellow {
    background-color: var(--yellow);
  }

  .bg-beige {
    background-color: var(--beige);
  }

  .bg-green {
    background-color: var(--green);
  }

  .bg-light-green {
    background-color: var(--light-green);
  }

  .bg-blue {
    background-color: var(--blue);
  }

  .bg-light-blue {
    background-color: var(--light-blue);
  }

  .bg-indigo {
    background-color: var(--indigo);
  }

  .bg-light-indigo {
    background-color: var(--light-indigo);
  }

  .bg-purple {
    background-color: var(--purple);
  }

  .bg-light-purple {
    background-color: var(--light-purple);
  }
</style>