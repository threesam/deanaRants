<script context="module">
    import client from '../../sanityClient.js'
    export async function preload({params}) {
        const filter = `*[_type == 'recipe']`
        const projection = `{
            ...,
            title,
            "slug": slug.current,
            "image": mainImage.asset->{url, alt},
            "author": authors[0].author->{name, "image": image.asset->url},
            "categories": categories[]->{title, description},
            "sections": sections[]{
                sectionName,
                heat,
                "ingredientList": ingredientList[]{
                    ingredientName,
                    ingredientAmount,
                    "unit": ingredientUnit[0]
                },
                instructions
            }
        }`
        const query = filter + projection
    const recipes = await client
      .fetch(query)
      .catch((err) => this.error(500, err))
    return { recipes }
    }
</script>

<script>
export let recipes
console.log(recipes)
</script>

<style>
    section {
        background: var(--black);
        margin-top: 1rem;
        border-radius: 13px;
        padding: 1rem;
    }

    h2 {
        font-size: 1.2rem;
    }
    img {
        width: 100%;
    }
</style>

<article>
<h1>Recipes</h1>
{#each recipes as recipe}
    <section>
        <a href="recipes/{recipe.slug}"><h2>{recipe.title}</h2></a>
        <img src={`${recipe.image.url}`} alt="">
    </section>
{/each}
</article>