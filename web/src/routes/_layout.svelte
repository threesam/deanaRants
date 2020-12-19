<script>
  import Nav from '../components/Nav.svelte'

  export let segment
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    /* background-color: var(--dark-grey); */
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
    color: var(--white);
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
