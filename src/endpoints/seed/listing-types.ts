import { RequiredDataFromCollectionSlug } from 'payload'

export const listingTypes: () => RequiredDataFromCollectionSlug<'listing-types'>[] = () => {
  return [
    {
      slug: 'apartment',
      title: 'Apartment',
      description: 'Apartment description',
    },
    {
      slug: 'house',
      title: 'House',
      description: 'House description',
    },
    {
      slug: 'townhouse',
      title: 'Townhouse',
      description: 'Townhouse description',
    },
    {
      slug: 'villa',
      title: 'Villa',
      description: 'Villa description',
    },
    {
      slug: 'unit',
      title: 'Unit',
      description: 'Unit description',
    },
    {
      slug: 'land',
      title: 'Land',
      description: 'Land description',
    },
    {
      slug: 'commercial',
      title: 'Commercial',
      description: 'Commercial description',
    },
    {
      slug: 'industrial',
      title: 'Industrial',
      description: 'Industrial description',
    },
    {
      slug: 'other',
      title: 'Other',
      description: 'Other description',
    },
  ]
}
