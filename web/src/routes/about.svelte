<script context="module">
  import client from '../sanityClient'
  export function preload({ params, query }) {
    return client
      .fetch(
        '*[_type == "author"]{name, "image": image.asset->url, "alt": image.alt, "bio": bio[0].children[0].text}',
      )
      .then((author) => {
        return { author }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
  export let author
  author = author[0]
  const { name, image, alt, bio } = author
</script>

<style>
  img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    filter: brightness(50%);
  }
</style>

<svelte:head>
  <title>About Deana</title>
</svelte:head>

<h1>About {name}</h1>
<img src={`${image}?fit=crop&crop=entropy`} {alt} />
<p>{bio}</p>
