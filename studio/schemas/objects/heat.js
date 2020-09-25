export default {
    name: 'heat',
    type: 'object',
    title: 'Heat',
    fields: [
        {
            name: 'appliance',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Oven', value: 'oven' },
                    { title: 'Stovetop', value: 'stovetop' },
                    { title: 'Fridge', value: 'fridge' },
                    { title: 'Freezer', value: 'freezer' },
                ]
            }
        },
        {
            name: 'temp',
            type: 'number',
            title: 'Temperature'
        }
    ]
}