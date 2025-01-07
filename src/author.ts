import { defineType, defineField } from 'sanity';

export const author = defineType({
  name: 'author',
  type: 'document',
  title: 'Author Name',
  fields: [
    // Bio Field
    defineField({
      name: 'bio',
      type: 'text',
      title: 'Bio',
    }),
    // Image Field
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    }),
    // Author Reference Field
    defineField({
      name: 'author', // field name for reference
      type: 'reference', // fixed typo here
      title: 'Author',
      to: [{ 
        type: 'author'
     }] // references 'author' type
    }),
  ],
});
