import { ListingCard } from '@/components/ListingCard'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const listings = await payload.find({
    collection: 'listings',
    depth: 3,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      address: true,
      bathrooms: true,
      bedrooms: true,
      size: true,
      coverImage: true,
      listingStatus: true,
      listingType: true,
      pricing: true,
      description: true,
    },
  })

  return (
    <main className="container my-16">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {listings.docs.map((listing) => {
            if (typeof listing === 'string') return null
            return <ListingCard listing={listing} key={listing.id} variant="featured" />
          })}
        </div>
      </div>
    </main>
  )
}
