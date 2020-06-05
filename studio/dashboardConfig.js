export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eda7966163295fb17b08fe0',
                  title: 'Sanity Studio',
                  name: 'deanaRants-studio',
                  apiId: '49ef67a0-98ae-4c2f-b42b-c554871159b2'
                },
                {
                  buildHookId: '5eda7966948e89d9ccd8b4db',
                  title: 'Blog Website',
                  name: 'deanaRants',
                  apiId: '4bd37c60-fbf9-4d27-a5d2-b323ac4aa07c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/salvatoredangelo/deanaRants',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://deanaRants.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
