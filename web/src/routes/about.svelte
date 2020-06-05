<script>
  import { onMount } from 'svelte'

  let canvas

  onMount(() => {
    function setup() {
      canvas = createCanvas(200, 200)
    }

    function draw() {
      background(200, 200, 0)
    }
  })
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>

<div id="sketch" />
