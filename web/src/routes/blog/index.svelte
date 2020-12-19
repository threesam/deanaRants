<script context="module">
  import client from '../../sanityClient'
  export async function preload({ params }) {
    const filter = '*[_type == "post" && defined(slug.current) && publishedAt < now()]|order(publishedAt desc)'
    const projection = `{
      ...,
      "image": mainImage.asset->url,
      "alt": mainImage.alt
    }`
    const query = filter + projection
    const posts = await client
      .fetch(query)
      .catch((err) => this.error(500, err))
    return {posts}
  }
</script>

<script>
  export let posts
  console.log(posts)

  function formatDate(date) {
    return new Date(date).toLocaleDateString()
  }
</script>

<style>
  ul {
    margin: 0;
    line-height: 1.5;
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 13px;
    background: var(--black);
  }
  img {
    width: 100%;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="blog/{post.slug.current}"><h3>{post.title}</h3></a>
      ({formatDate(post.publishedAt)})
      <img src="{post.image}" alt="{post.alt}">
    </li>
  {/each}
</ul>
