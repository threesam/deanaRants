import { format } from 'date-fns'

export default {
    name: 'recipe',
    type: 'document',
    title: 'Recipe',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Titles should be catchy, descriptive, and not too long'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'Some frontends will require a slug to be set to be able to show the post',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published at',
            description: 'This can be used to schedule post for publishing'
        },
        {
            name: 'mainImage',
            type: 'mainImage',
            title: 'Main image'
        },
        {
            name: 'excerpt',
            type: 'excerptPortableText',
            title: 'Excerpt',
            description:
                'This ends up on summary pages, on Google, when people share your post in social media.'
        },
        {
            name: 'sections',
            type: 'array',
            title: 'Sections',
            of: [{ type: 'recipeSection' }]
        },
        {
            name: 'authors',
            title: 'Authors',
            type: 'array',
            of: [
                {
                    type: 'authorReference'
                }
            ]
        },
        {
            name: 'categories',
            type: 'array',
            title: 'Categories',
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'category'
                    }
                }
            ]
        },
    ],
}