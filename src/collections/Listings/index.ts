import type { CollectionConfig } from 'payload'

import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '@/hooks/populatePublishedAt'
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
    defaultColumns: ['title', 'slug', 'updatedAt'],
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
                  name: 'isHidden',
                  type: 'checkbox',
                  label: 'Hide price from public',
                  defaultValue: false,
                },
                {
                  name: 'type',
                  type: 'select',
                  options: [
                    { label: 'Fixed', value: 'fixed' },
                    { label: 'POA (Price on Application)', value: 'poa' },
                  ],
                  required: true,
                  defaultValue: 'fixed',
                  admin: {
                    condition: (_, siblingData) => !siblingData?.isHidden,
                  },
                },
                {
                  name: 'amount',
                  type: 'number',
                  required: false,
                  admin: {
                    condition: (_, siblingData) => {
                      return siblingData?.type === 'fixed' && !siblingData?.isHidden
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
                  admin: {
                    condition: (_, siblingData) => !siblingData?.isHidden,
                  },
                },
                {
                  name: 'currency',
                  type: 'text',
                  defaultValue: 'AUD',
                  admin: {
                    condition: (_, siblingData) => !siblingData?.isHidden,
                  },
                },
              ],
            },
            // Property Address (Street, Suburb, Postcode, etc.)
            {
              name: 'address',
              type: 'group',
              fields: [
                { name: 'street', type: 'text', required: false },
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
                  defaultValue: 'NSW',
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
              name: 'listingType',
              type: 'relationship',
              relationTo: 'listing-types',
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
              required: false,
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
              required: false,
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
        interval: 2000, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}

export default Listings
