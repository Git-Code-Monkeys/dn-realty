import { ListingType, Media } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'
import { ListingTypeSlug } from './listing-types'
import { MediaName } from './media'

type ListingsArgs = {
  mediaMap: Map<MediaName | null | undefined, Media>
  listingTypesMap: Map<ListingTypeSlug | null | undefined, ListingType>
}

export const listings: (args: ListingsArgs) => RequiredDataFromCollectionSlug<'listings'>[] = ({
  mediaMap,
  listingTypesMap,
}) => {
  return [
    {
      slug: '4692-divi-way',
      slugLock: true,
      _status: 'published',
      title: '4692 Divi Way',
      pricing: {
        isHidden: false,
        type: 'fixed',
        amount: 650000,
        period: 'total',
        currency: 'AUD',
      },
      address: {
        street: 'Pebble Beach',
        suburb: 'CA',
        state: 'NSW',
        postcode: '93953',
      },
      listingType: listingTypesMap.get('house')?.id as string,
      bedrooms: 3,
      bathrooms: 2.5,
      size: '2015 sqft',
      parking: 2,
      description: {
        root: {
          type: 'root',
          format: '',
          indent: 0,
          version: 1,

          children: [
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'Some description about the listing, which will be displayed in the detail page.',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              textStyle: '',
              textFormat: 0,
            },
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,
              children: [],
              direction: null,
              textStyle: '',
              textFormat: 0,
            },
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'This field is a Rich Text Editor.',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
                {
                  type: 'linebreak',
                  version: 1,
                },

                {
                  mode: 'normal',
                  text: 'So,',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              textStyle: '',
              textFormat: 0,
            },
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'You can bold the text,',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 1,
                  version: 1,
                },
              ],
              direction: 'ltr',
              textStyle: '',
              textFormat: 1,
            },
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'You can italic the text,',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 2,
                  version: 1,
                },
              ],
              direction: 'ltr',
              textStyle: '',
              textFormat: 2,
            },
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'You can underline the text,',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 8,
                  version: 1,
                },
              ],
              direction: 'ltr',
              textStyle: '',
              textFormat: 8,
            },
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'You can extend features if needed!',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              textStyle: '',
              textFormat: 0,
            },
          ],
          direction: 'ltr',
        },
      },
      coverImage: mediaMap.get('4692-divi-way-cover.jpg')?.id as string,
      listingStatus: 'for-sale',
      gallery: [],
    },
    {
      slug: '2467-monarch-ave-unit-3',
      slugLock: true,
      _status: 'published',
      title: '2467 Monarch Ave Unit 3',
      pricing: {
        isHidden: false,
        type: 'fixed',
        amount: 2800,
        period: 'month',
        currency: 'AUD',
      },
      address: {
        street: 'Carmel',
        suburb: 'CA',
        postcode: '93940',
        state: 'NSW',
      },
      listingType: listingTypesMap.get('house')?.id as string,
      bedrooms: 3,
      bathrooms: 1,
      size: '2,000 sqft',
      listingStatus: 'for-sale',
      coverImage: mediaMap.get('2467-monarch-ave-unit-3-cover.jpg')?.id as string,
      gallery: [],
      description: null,
    },
    {
      title: '157 Bloom Blvd',
      slug: '157-bloom-blvd',
      slugLock: true,
      _status: 'published',
      pricing: {
        isHidden: false,
        type: 'fixed',
        amount: 650000,
        period: 'total',
        currency: 'AUD',
      },
      address: {
        street: 'Carmel',
        suburb: 'CA',
        postcode: '93923',
        state: 'WA',
      },
      listingType: listingTypesMap.get('house')?.id as string,
      bedrooms: 3,
      bathrooms: 1,
      size: '2,000 sqft',
      listingStatus: 'for-sale',
      coverImage: mediaMap.get('157-bloom-blvd-cover.jpg')?.id as string,
      gallery: [],
      description: null,
    },
    {
      title: 'Extra 2 SE of 12th',
      slug: 'extra-2-se-of-12th',
      slugLock: true,
      _status: 'published',
      pricing: {
        isHidden: false,
        type: 'fixed',
        amount: 1200000,
        period: 'total',
        currency: 'AUD',
      },
      address: {
        street: 'San Jose',
        suburb: 'CA',
        postcode: '93921',
        state: 'NSW',
      },
      listingType: listingTypesMap.get('house')?.id as string,
      bedrooms: 3,
      bathrooms: 3.5,
      size: '3,886 sqft',
      listingStatus: 'for-sale',
      coverImage: mediaMap.get('extra-2-se-of-12th-cover.jpg')?.id as string,
      gallery: [],
      description: null,
    },
    {
      title: '22 Great Western Highway',
      slug: '22-great-western-highway',
      slugLock: true,
      _status: 'published',
      pricing: {
        isHidden: true,
      },
      address: {
        street: '',
        suburb: 'Parramatta',
        postcode: '2150',
        state: 'NSW',
      },
      listingType: listingTypesMap.get('house')?.id as string,
      bedrooms: 1,
      bathrooms: 1,
      parking: 1,
      size: null,
      listingStatus: 'for-sale',
      coverImage: mediaMap.get('22-great-western-highway-cover.jpg')?.id as string,
      gallery: [],
      description: null,
    },
  ]
}
