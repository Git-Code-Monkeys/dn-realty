import { ListingCard } from '@/components/ListingCard'
import configPromise from '@payload-config'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

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
      parking: true,
      description: true,
    },
  })

  return (
    <main className="container my-16">
      <PageClient />
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold">LISTINGS</h1>
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

export function generateMetadata(): Metadata {
  return {
    title: `Listings`,
    description: `Browse our listings`,
    openGraph: {
      title: `Listings`,
      description: `Browse our listings`,
    },
  }
}
