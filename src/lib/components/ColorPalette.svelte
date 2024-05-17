<script lang="ts">
  // hooks
  import { createEventDispatcher } from "svelte";
  
  // Props
  export let fillModeEnabled: boolean;

  const createEvent = createEventDispatcher();
  let color = 'black';

  function setColor(c: string): void {
    color = c;
    createEvent('set-color', c);

    if (fillModeEnabled) createEvent('fill-screen', color);
  }
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<div class="color-palette">
  <div on:click={() => setColor('black')} class="square bg-black" class:active-light={color === 'black'}></div>
  <div on:click={() => setColor('dark-grey')} class="square bg-dark-grey" class:active-light={color === 'dark-grey'}></div>
  <div on:click={() => setColor('maroon')} class="square bg-maroon" class:active-light={color === 'maroon'}></div>
  <div on:click={() => setColor('red')} class="square bg-red" class:active-light={color === 'red'}></div>
  <div on:click={() => setColor('orange')} class="square bg-orange" class:active-light={color === 'orange'}></div>
  <div on:click={() => setColor('yellow')} class="square bg-yellow" class:active-dark={color === 'yellow'}></div>
  <div on:click={() => setColor('green')} class="square bg-green" class:active-light={color === 'green'}></div>
  <div on:click={() => setColor('blue')} class="square bg-blue" class:active-light={color === 'blue'}></div>
  <div on:click={() => setColor('indigo')} class="square bg-indigo" class:active-light={color === 'indigo'}></div>
  <div on:click={() => setColor('purple')} class="square bg-purple" class:active-light={color === 'purple'}></div>
  <div on:click={() => setColor('white')} class="square bg-white" class:active-dark={color === 'white'}></div>
  <div on:click={() => setColor('grey')} class="square bg-grey" class:active-dark={color === 'grey'}></div>
  <div on:click={() => setColor('brown')} class="square bg-brown" class:active-light={color === 'brown'}></div>
  <div on:click={() => setColor('pink')} class="square bg-pink" class:active-light={color === 'pink'}></div>
  <div on:click={() => setColor('gold')} class="square bg-gold" class:active-light={color === 'gold'}></div>
  <div on:click={() => setColor('beige')} class="square bg-beige" class:active-dark={color === 'beige'}></div>
  <div on:click={() => setColor('light-green')} class="square bg-light-green" class:active-light={color === 'light-green'}></div>
  <div on:click={() => setColor('light-blue')} class="square bg-light-blue" class:active-light={color === 'light-blue'}></div>
  <div on:click={() => setColor('light-indigo')} class="square bg-light-indigo" class:active-light={color === 'light-indigo'}></div>
  <div on:click={() => setColor('light-purple')} class="square bg-light-purple" class:active-light={color === 'light-purple'}></div>
</div>

<style lang="scss">
  .color-palette {
    position: relative;
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

  .toolbar-title {
    font-size: 1.25rem;
    position: absolute;
    bottom: -1.75rem;
    right: 50%;
    transform: translateX(50%);
  }

  .active-dark {
    border: 4px dashed #222;
  }

  .active-light {
    border: 4px dashed #eee;
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