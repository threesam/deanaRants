export default {
    name: 'recipeSection',
    type: 'object',
    title: 'Recipe Section',
    fields: [
        {
            name: 'sectionName',
            type: 'string',
            title: 'Section Name',
            description: 'Think base, or filling, etc..'
        },
        {
            name: 'ingredientList',
            type: 'ingredientList',
            title: 'Ingredients'
        },
        {
            name: 'heat',
            type: 'heat',
            title: 'Heat?'
        },
        {
            name: 'instructions',
            type: 'bodyPortableText',
            title: 'Method'
        }
    ]
}