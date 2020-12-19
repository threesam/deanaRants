<script>
  export let segment
</script>

<style>
  nav {
    border-bottom: 0.125rem solid var(--light-grey);
    font-weight: 300;
    padding: 0 1rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 0.125rem;
    background-color: var(--black);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>

    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
    </li>

    <li>
      <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
    </li>

    <li>
      <a
        rel="prefetch"
        class={segment === 'blog' ? 'selected' : ''}
        href="blog">
        blog
      </a>
    </li>

     <li>
      <a
        rel="prefetch"
        class={segment === 'recipes' ? 'selected' : ''}
        href="recipes">
        recipes
      </a>
    </li>

  </ul>
</nav>
