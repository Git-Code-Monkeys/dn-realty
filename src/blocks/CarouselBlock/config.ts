import type { Block } from 'payload'

import { link } from '@/fields/link'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const CarouselBlock: Block = {
  slug: 'carousel',
  interfaceName: 'CarouselBlock',
  fields: [
    {
      name: 'size',
      type: 'select',
      defaultValue: 'oneThird',
      options: [
        {
          label: 'One Third',
          value: 'oneThird',
        },
        {
          label: 'Half',
          value: 'half',
        },
        {
          label: 'Two Thirds',
          value: 'twoThirds',
        },
        {
          label: 'Full',
          value: 'full',
        },
      ],
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'enableLink',
      type: 'checkbox',
    },
    link({
      overrides: {
        admin: {
          condition: (_data, siblingData) => {
            return Boolean(siblingData?.enableLink)
          },
        },
      },
    }),
    {
      name: 'type',
      type: 'select',
      defaultValue: 'general',
      options: [
        {
          label: 'General',
          value: 'general',
        },
        {
          label: 'Testimonial',
          value: 'testimonial',
        },
      ],
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      label: 'Carousel Items',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'richText',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
          label: 'Content',
          required: true,
        },
      ],
    },
  ],
  labels: {
    plural: 'Carousels',
    singular: 'Carousel',
  },
}
