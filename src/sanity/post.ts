import { defineType, defineField, defineArrayMember } from 'sanity';

export const post = defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    // Title Field
    defineField({
      name: 'title',
      type: 'string',
      title: 'Post Title',
      validation: (Rule) => Rule.required(),
    }),

    // Slug Field
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // Summary Field
    defineField({
      name: 'summary',
      type: 'string',
      title: 'Summary',
      validation: (Rule) => Rule.required(), // Optional validation
    }),
    


    //image
    defineField({
        name: 'image',
        type: 'image',
        title: 'image',
        options: {
          hotspot: true
        }
      }),

      //block for text
      defineField({
        name: 'content',
        type: 'array',
        title: 'Content',
        of:[
            defineArrayMember({
                type:'block'
            })
        ]
      }),


  ],
});
