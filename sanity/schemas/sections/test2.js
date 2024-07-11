import { defineField, defineType } from 'sanity'
import { TextIcon } from '@sanity/icons'

export default defineType({
  name: 'test2',
  title: 'Basic Content 2',
  icon: TextIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'variation',
      title: 'Colour Scheme Variation',
      description:
        'The colour scheme of the section. This will change the background and text color',
      type: 'string',
      options: {
        list: [
          { title: 'Brand Primary', value: 'primary' },
          { title: 'Brand Secondary', value: 'secondary' },
          { title: 'Brand Accent Dark', value: 'accentDark' },
          { title: 'White', value: 'white' },
          { title: 'Grey Light', value: 'greyLight' },
          { title: 'Grey', value: 'grey' },
          { title: 'Grey Dark', value: 'greyDark' },
          { title: 'Brand Primary Light', value: 'primaryLight' },
          { title: 'Brand Secondary Light', value: 'secondaryLight' },
          { title: 'Brand Accent Light', value: 'accentLight' },
        ],
      },
    }),
  ],
  initialValue: {
    variation: 'primary',
  },
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({ title }) {
      return {
        title: title,
        subtitle: 'Basic Content Section',
        icon: TextIcon,
      }
    },
  },
})
