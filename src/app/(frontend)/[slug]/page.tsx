import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import { homeStatic } from '@/endpoints/seed/home-static'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { cache } from 'react'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = 'home' } = await paramsPromise
  const url = '/' + slug

  let page: RequiredDataFromCollectionSlug<'pages'> | null

  page = await queryPageBySlug({
    slug,
  })

  // Remove this code once your website is seeded
  if (!page && slug === 'home') {
    page = homeStatic
  }

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  return (
    <article className="pt-16 pb-24">
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}
      <div className="relative">
        <RenderHero {...hero} />
        {/* <div className="absolute bottom-0 left-0 w-full bg-transparent translate-y-1/2 z-50">
          <Card className="container bg-white h-full p-8">
            <Search />
          </Card>
        </div> */}
      </div>
      <RenderBlocks blocks={layout} />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise
  const page = await queryPageBySlug({
    slug,
  })

  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 10,
  })

  const page = result.docs?.[0]
  if (!page) return null
  const populatedLayout = await Promise.all(
    page.layout?.map(async (block) => {
      if (block.blockType === 'listingGroup' && block.listingGroup) {
        try {
          // Get the listing group ID
          const listingGroupId =
            typeof block.listingGroup === 'string' ? block.listingGroup : block.listingGroup.id

          // Fetch the listing group with FULL population
          const populatedListingGroup = await payload.findByID({
            collection: 'listing-groups',
            id: listingGroupId,
            depth: 3, // This ensures listings and their fields are populated
          })

          // If listings are still not populated, manually populate them too
          if (populatedListingGroup.listings) {
            const fullyPopulatedListings = await Promise.all(
              populatedListingGroup.listings.map(async (listingRef) => {
                const listingId = typeof listingRef === 'string' ? listingRef : listingRef.id

                const fullListing = await payload.findByID({
                  collection: 'listings',
                  id: listingId,
                  depth: 2, // Populate all listing fields including address, description, etc.
                })

                return fullListing
              }),
            )

            populatedListingGroup.listings = fullyPopulatedListings
          }

          return {
            ...block,
            listingGroup: populatedListingGroup,
          }
        } catch (error) {
          console.error('Error populating listing group:', error)
          return block // Return original block if population fails
        }
      }
      return block
    }) || [],
  )
  return {
    ...page,
    layout: populatedLayout,
  }
})
