import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'DN REALTY | YOUR LOCAL PROPERTY EXPERTS',
      required: false,
    },
    {
      name: 'companyTagline',
      type: 'text',
      defaultValue: 'DN REALTY BY DANNY NATH',
      required: false,
      admin: {
        description:
          'Company branding text displayed in the footer copyright section. This appears as the signature line alongside the copyright notice.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Content',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }),
          ]
        },
      }),
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'privacyPolicyUrl',
      type: 'text',
      label: 'Privacy Policy Link',
      required: false,
      admin: {
        description:
          'The link to the privacy policy page. This is displayed in the footer copyright section as a link.',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
