<script context="module">
  export async function preload({ params, query }) {
    const key = 'key=7d237e6e-4e5d-4a68-a659-060a0cb7076f'
    const res = await this.fetch(
      `https://holidayapi.com/v1/holidays?${key}&country=US&year=2019`,
    )
    const posts = await res.json()
    return { posts }
  }
</script>

<script>
  import { fade, blur } from 'svelte/transition'
  export let posts
  posts = posts.holidays
  // console.log(posts)
</script>

<style>
  section {
    position: relative;
  }
  h1,
  h2 {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: lowercase;
    font-weight: 700;
  }

  h2 {
    color: var(--accent);
    margin: 1rem;
  }
  div {
    height: 60vh;
  }
  img {
    height: 100%;
    width: 100%;
    filter: invert() opacity(25%);
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Diana</title>
</svelte:head>

<section>
  <h1 in:blur={{ duration: 2000 }}>Diana D'Angelo</h1>

  <h2 in:fade>Coming Soon...</h2>

  <div in:fade>
    <img src="deana-leaf.svg" alt="a leaf" />
  </div>
</section>
