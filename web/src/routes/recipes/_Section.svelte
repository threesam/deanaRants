<script>
 import BlockContent from '@movingbrands/svelte-portable-text'
 import serializers from '../../components/serializers'
 export let section
 
 const { heat, ingredientList, instructions, sectionName: name} = section
 const ingredients = ingredientList.map(ingredient => {
     const {
         ingredientName: name,
         ingredientAmount: amount,
         unit
     } = ingredient
     return {name, amount, unit}
 })
</script>

<style>
    div {
        background: var(--black);
        padding: 1rem;
        margin-bottom: 1rem;
    }
    ul {
        margin: 1rem;
    }
</style>

<div>
    <h2>{name}</h2>
    <ul>
    {#each ingredients as ingredient}
        <li>{`${ingredient.amount} ${ingredient.unit}`} <b>{ingredient.name}</b></li>
    {/each}
    </ul>
  <BlockContent blocks={instructions} {serializers} />
</div>