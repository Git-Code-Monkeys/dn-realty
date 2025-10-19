import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { Content } from '@/blocks/Content/config'
import { slugField } from '@/fields/slug'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'

const ListingGroups: CollectionConfig = {
  slug: 'listing-groups',
  labels: {
    singular: 'Listing Group',
    plural: 'Listing Groups',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            BlocksFeature({ blocks: [Content] }),
          ]
        },
      }),
      label: 'Description',
      required: false,
    },
    {
      name: 'listings',
      type: 'relationship',
      relationTo: 'listings',
      hasMany: true,
      label: 'Listings',
    },
    ...slugField(),
  ],
}

export default ListingGroups
