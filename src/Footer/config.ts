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
      type: 'group',
      label: 'Contact Information',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'Phone',
          required: false,
        },
        {
          name: 'email',
          type: 'text',
          label: 'Email',
          required: false,
        },
        {
          label: 'Office Address',
          name: 'officeAddress',
          type: 'group',
          fields: [
            { name: 'street', type: 'text', required: false },
            { name: 'suburb', label: 'Suburb / City', type: 'text', required: false },
            {
              name: 'state',
              type: 'select',
              required: false,
              options: [
                { label: 'New South Wales (NSW)', value: 'NSW' },
                { label: 'Victoria (VIC)', value: 'VIC' },
                { label: 'Queensland (QLD)', value: 'QLD' },
                { label: 'Western Australia (WA)', value: 'WA' },
                { label: 'South Australia (SA)', value: 'SA' },
                { label: 'Tasmania (TAS)', value: 'TAS' },
                { label: 'Australian Capital Territory (ACT)', value: 'ACT' },
                { label: 'Northern Territory (NT)', value: 'NT' },
              ],
              defaultValue: 'NSW',
            },
            { name: 'postcode', type: 'text', required: false },
            {
              name: 'country',
              type: 'text',
              hidden: false,
              defaultValue: 'Australia',
            },
          ],
        },
      ],
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
