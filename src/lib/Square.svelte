<script lang="ts">
  // Props
  export let size: string;
  export let currentColor: string;
  export let drawFastEnabled: boolean;

  type sq = {
    size: string;
    color: string;
    text: string;
  }

  const squareDetails: sq = {
    size: size,
    color: 'white',
    text: 'Hello'
  };

  function changeColor() {
    squareDetails.color = currentColor;
  }

  function quickDraw() {
    if (drawFastEnabled) squareDetails.color = currentColor;
  }

  $:console.log(squareDetails.color);
</script>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->

<!-- TODO: on hover, text visible -->
<div on:click={changeColor} on:mouseenter={quickDraw} class="square {size} {squareDetails.color}"></div>

<style lang="scss">
  .square {
    border: 1px solid black;
    transition: all 0.5s ease-out;

    &:hover {
      cursor: pointer;
      scale: 1.1;
      border-style: dashed;

    }
  }

  // Square sizes
  .size-1 {
    width: 30px;
    height: 30px;
  }

  .size-2 {
    width: 40px;
    height: 40px;
  }

  .size-3 {
    width: 50px;
    height: 50px;
  }

  .size-4 {
    width: 60px;
    height: 60px;
  }

  .size-5 {
    width: 70px;
    height: 70px;
  }

  .size-6 {
    width: 80px;
    height: 80px;
  }

  .size-7 {
    width: 90px;
    height: 90px;
  }

  .size-8 {
    width: 100px;
    height: 100px;
  }

  .size-9 {
    width: 110px;
    height: 110px;
  }

  .size-10 {
    width: 120px;
    height: 120px;
  }

  // bg colors
  .black {
    background-color: var(--black);
  }

  .white {
    background-color: var(--white);
  }

  .dark-grey {
    background-color: var(--dark-grey);
  }

  .grey {
    background-color: var(--grey);
  }

  .maroon {
    background-color: var(--maroon);
  }

  .brown {
    background-color: var(--brown);
  }

  .red {
    background-color: var(--red);
  }

  .pink {
    background-color: var(--pink);
  }

  .orange {
    background-color: var(--orange);
  }

  .gold {
    background-color: var(--gold);
  }

  .yellow {
    background-color: var(--yellow);
  }

  .beige {
    background-color: var(--beige);
  }

  .green {
    background-color: var(--green);
  }

  .light-green {
    background-color: var(--light-green);
  }

  .blue {
    background-color: var(--blue);
  }

  .light-blue {
    background-color: var(--light-blue);
  }

  .indigo {
    background-color: var(--indigo);
  }

  .light-indigo {
    background-color: var(--light-indigo);
  }

  .purple {
    background-color: var(--purple);
  }

  .light-purple {
    background-color: var(--light-purple);
  }
</style>
