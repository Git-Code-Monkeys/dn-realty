import { RequiredDataFromCollectionSlug } from 'payload'

export const listingTypes = [
  {
    slug: 'apartment' as const,
    title: 'Apartment',
    description: 'Apartment description',
  },
  {
    slug: 'house' as const,
    title: 'House',
    description: 'House description',
  },
  {
    slug: 'townhouse' as const,
    title: 'Townhouse',
    description: 'Townhouse description',
  },
  {
    slug: 'villa' as const,
    title: 'Villa',
    description: 'Villa description',
  },
  {
    slug: 'unit' as const,
    title: 'Unit',
    description: 'Unit description',
  },
  {
    slug: 'land' as const,
    title: 'Land',
    description: 'Land description',
  },
  {
    slug: 'commercial' as const,
    title: 'Commercial',
    description: 'Commercial description',
  },
  {
    slug: 'industrial' as const,
    title: 'Industrial',
    description: 'Industrial description',
  },
  {
    slug: 'other' as const,
    title: 'Other',
    description: 'Other description',
  },
] as const satisfies RequiredDataFromCollectionSlug<'listing-types'>[]

export type ListingTypeSlug = (typeof listingTypes)[number]['slug']
