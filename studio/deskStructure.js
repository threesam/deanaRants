import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'
import MdStar from 'react-icons/lib/md/star'
import MdBeach from 'react-icons/lib/md/beach-access'
import MdTimer from 'react-icons/lib/md/timer'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings', 'recipe'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Recipes')
        .icon(MdTimer)
        .schemaType('recipe')
        .child(S.documentTypeList('recipe').title('Recipes')),
      S.listItem()
        .title('Blog posts')
        .icon(MdBeach)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .icon(MdStar)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
