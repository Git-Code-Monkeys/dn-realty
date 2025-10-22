import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { FixedToolbarFeature } from 'node_modules/@payloadcms/richtext-lexical/dist/features/toolbars/fixed/server'
import { InlineToolbarFeature } from 'node_modules/@payloadcms/richtext-lexical/dist/features/toolbars/inline/server'
import { CollectionConfig } from 'payload'

export const TeamMembers: CollectionConfig<'team-members'> = {
  slug: 'team-members',

  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ['name', 'role', 'image', 'bio', 'socialLinks'],
    useAsTitle: 'name',
  },
  orderable: true,
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'text' },
    { name: 'phone', type: 'text' },
    { name: 'email', type: 'text' },

    { name: 'image', type: 'upload', relationTo: 'media' },
    {
      name: 'bio',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        { name: 'url', type: 'text', required: true },
        {
          name: 'socialMedia',
          type: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'X', value: 'x' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'TikTok', value: 'tiktok' },
            { label: 'Youtube', value: 'youtube' },
          ],
          required: true,
        },
      ],
    },
  ],
}
