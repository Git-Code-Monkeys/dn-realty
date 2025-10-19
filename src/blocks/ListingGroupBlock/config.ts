import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Block } from 'payload'
import { Content } from '../Content/config'

export const ListingGroupBlock: Block = {
  slug: 'listingGroup',
  interfaceName: 'ListingGroupBlock',
  fields: [
    {
      name: 'introContent',
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
      label: 'Intro Content',
    },
    {
      name: 'listingGroup',
      type: 'relationship',
      relationTo: 'listing-groups',
      label: 'Listing Group',
      required: true,
    },
  ],
}
