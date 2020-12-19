<script context="module">
    
    import client from '../../sanityClient.js'
    export async function preload({params}) {
        const {slug} = params
        const filter = `*[_type == 'recipe' && slug.current == $slug][0]`
        const projection = `{
            ...,
            title,
            "image": mainImage.asset->url,
            "alt": mainImage.alt,
            "slug": slug.current,
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
                "instructions": instructions[]{
                    ...,
                }
            }
        }`
        const query = filter + projection
        const recipe = await client
        .fetch(query, { slug })
        .catch((err) => this.error(500, err))
        return { recipe }
    }
</script>

<script>
import imageUrlBuilder from '@sanity/image-url'
import myConfiguredSanityClient from '../../sanityClient'

const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source) {
  return builder.image(source)
}

import Section from './_Section.svelte'

export let recipe

const {title, image, alt, author, sections } = recipe
console.log(recipe)
</script>

<style>
div {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
}
div h2, div img {
    display: inline-block;
    margin: 0;
}
div img {
    border-radius: 100%;
    margin-right: 0.5rem;
}
img {
    max-width: 100%;
}
a {
    color: var(--dark-grey);
}
</style>

<article>
    <a href="/recipes">All Recipes</a>

    <h1>{title}</h1>
    <img src="{image}" alt="{alt}">

    <div>
        <img src={urlFor(author.image).width(50).height(50)} alt="{author.name}">
        <h2>by {author.name}</h2>
    </div>

    {#each sections as section}
        <Section {section} />
    {/each}

</article>