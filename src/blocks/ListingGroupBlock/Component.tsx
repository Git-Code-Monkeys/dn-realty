'use client'

import { ListingCard } from '@/components/ListingCard'
import RichText from '@/components/RichText'
import type { ListingGroupBlock as ListingGroupBlockProps } from '@/payload-types'
import { hasText } from '@payloadcms/richtext-lexical/shared'

import React from 'react'

export const ListingGroupBlock: React.FC<ListingGroupBlockProps & { id?: string }> = (props) => {
  const { introContent, listingGroup } = props
  console.log('🚀 ~ Component.tsx:11 ~ ListingGroupBlock ~ props:', props)

  if (!listingGroup || typeof listingGroup === 'string') return null

  return (
    <>
      <div className="container my-16">
        {introContent && hasText(introContent) ? (
          <RichText data={introContent} enableGutter={false} />
        ) : (
          <>
            <h2 className="text-2xl font-bold">{listingGroup.title}</h2>
            {listingGroup.description && (
              <RichText data={listingGroup.description} enableGutter={false} />
            )}
          </>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {listingGroup.listings?.map((listing) => {
            if (typeof listing === 'string') return null

            return <ListingCard key={listing.id} listing={listing} variant="featured" />
          })}
        </div>
      </div>
    </>
  )
}
