import { ListingType, Media } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

type ListingsArgs = {
  mediaMap: Map<string | null | undefined, Media>
  listingTypesMap: Map<string | null | undefined, ListingType>
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
  ]
}
