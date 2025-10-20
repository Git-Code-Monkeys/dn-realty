import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { slugField } from '@/fields/slug'
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
