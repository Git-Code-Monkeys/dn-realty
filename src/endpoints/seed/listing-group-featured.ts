import { RequiredDataFromCollectionSlug } from 'payload'

type ListingGroupFeaturedArgs = {
  listingIds: string[]
}
export const listingGroupFeatured: (
  args: ListingGroupFeaturedArgs,
) => RequiredDataFromCollectionSlug<'listing-groups'> = ({ listingIds }) => {
  return {
    title: 'Featured Listings For Sale',
    slug: 'featured-listings-for-sale',
    slugLock: true,
    listings: listingIds,
  }
}
