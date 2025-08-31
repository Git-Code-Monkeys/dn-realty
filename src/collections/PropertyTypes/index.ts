// src/collections/PropertyTypes.ts
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { slugField } from '@/fields/slug'
import type { CollectionConfig } from 'payload'

const PropertyTypes: CollectionConfig = {
  slug: 'property-types',
  labels: {
    singular: 'Property Type',
    plural: 'Property Types',
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
      type: 'textarea',
      required: false,
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media', // To allow icon for each type
    },
    ...slugField(),
  ],
}

export default PropertyTypes
