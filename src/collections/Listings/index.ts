import type { CollectionConfig } from 'payload'

import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '@/hooks/populatePublishedAt'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { revalidateDelete, revalidateListing } from './revalidateListing'

const Listings: CollectionConfig = {
  slug: 'listings',
  labels: {
    singular: 'Listing',
    plural: 'Listings',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'pricing', 'address'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'posts',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'posts',
        req,
      }),
  },
  access: {
    read: authenticatedOrPublished, // public access to listings
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    coverImage: true,
    pricing: true,
    status: true,
    propertyType: true,
    bedrooms: true,
    bathrooms: true,
    size: true,
    meta: {
      image: true,
      description: true,
    },
  },
  fields: [
    // Listing Title
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    // Status (for Sale, Rent, etc.)
    {
      name: 'listingStatus',
      type: 'select',
      options: [
        { label: 'For Sale', value: 'for-sale' },
        { label: 'For Rent', value: 'for-rent' },
        { label: 'Sold', value: 'sold' },
        { label: 'Leased', value: 'leased' },

        { label: 'Off Market', value: 'off-market' },
      ],
      defaultValue: 'for-sale',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },

    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            // Pricing (fixed with period like 'per week', 'per month', etc.)
            {
              name: 'pricing',
              type: 'group',
              fields: [
                {
                  name: 'type',
                  type: 'select',
                  options: [
                    { label: 'Fixed', value: 'fixed' },
                    { label: 'POA (Price on Application)', value: 'poa' },
                  ],
                  required: true,
                  defaultValue: 'fixed',
                },
                {
                  name: 'amount',
                  type: 'number',
                  required: false,
                  admin: {
                    condition: (data) => {
                      return data?.pricing?.type === 'fixed'
                    },
                  },
                },
                {
                  name: 'period',
                  type: 'select',
                  options: [
                    { label: 'Total (Sale)', value: 'total' },
                    { label: 'Per Week', value: 'week' },
                    { label: 'Per Month', value: 'month' },
                  ],
                  defaultValue: 'total',
                },
                {
                  name: 'currency',
                  type: 'text',
                  defaultValue: 'AUD',
                },
              ],
            },
            // Property Address (Street, Suburb, Postcode, etc.)
            {
              name: 'address',
              type: 'group',
              fields: [
                { name: 'street', type: 'text', required: true },
                { name: 'suburb', label: 'Suburb / City', type: 'text', required: false },
                {
                  name: 'state',
                  type: 'select',
                  required: true,
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
                },
                { name: 'postcode', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'Features',
          fields: [
            // Property Type (House, Apartment, etc.)
            {
              name: 'propertyType',
              type: 'relationship',
              relationTo: 'property-types',
              required: true,
            },
            // Number of Bedrooms
            {
              name: 'bedrooms',
              type: 'number',
              min: 0,
              required: true,
            },
            // Number of Bathrooms
            {
              name: 'bathrooms',
              type: 'number',
              min: 0,
              required: true,
            },
            // Size of the Property (Square Meters or Acres)
            {
              name: 'size',
              type: 'text', // "450sqm" or "1.2 acres"
              required: true,
              admin: {
                description:
                  'The size of the property in square meters or acres. Eg. 450sqm or 1.2 acres',
              },
            },
            // Number of Parking Spaces
            {
              name: 'parking',
              type: 'number',
              min: 0,
            },

            // Property Features (e.g., Pool, Garden, Air Conditioning)
            {
              name: 'Additional Features',
              type: 'array',
              fields: [{ name: 'feature', type: 'text' }],
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            // Detailed Description of the Listing
            {
              name: 'description',
              type: 'richText',
              required: true,
            },
          ],
        },
        {
          label: 'Media',
          fields: [
            // Cover Image (main listing photo)
            {
              name: 'coverImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            // Additional Images (Gallery)
            {
              name: 'gallery',
              type: 'array',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },

    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },

    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidateListing],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}

export default Listings
