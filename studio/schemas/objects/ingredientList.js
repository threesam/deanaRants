export default {
    name: 'ingredientList',
    type: 'array',
    title: 'Ingredients',
    of: [
        {
            name: 'ingredientItem',
            type: 'ingredientItem',
            title: 'Ingredient'
        },
    ]
}