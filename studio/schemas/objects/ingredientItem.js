export default {
    name: 'ingredientItem',
    type: 'object',
    title: 'Ingredient',
    fields: [
        {
            name: 'ingredientName',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'ingredientAmount',
            type: 'number',
            title: 'Amount',
        },
        {
            name: 'ingredientUnit',
            type: 'array',
            title: 'Unit',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Pinch', value: 'pinch' },
                    { title: 'Teaspoon', value: 'teaspoon' },
                    { title: 'Tablespoon', value: 'tablespoon' },
                    { title: 'Cup', value: 'cup' },
                    { title: 'Ounce', value: 'ounce' },
                    { title: 'Pound', value: 'pound' },
                ]
            }
        }
    ],
    preview: {
        select: {
            title: 'ingredientName',
            amount: 'ingredientAmount',
            unit: 'ingredientUnit'
        },
        prepare(selection) {
            const { title, amount, unit } = selection
            return {
                title,
                subtitle: `${amount} ${unit}`
            }
        }
    }
}