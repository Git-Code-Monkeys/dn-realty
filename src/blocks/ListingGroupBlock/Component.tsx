'use client'

import { CMSLink } from '@/components/Link'
import { ListingCard } from '@/components/ListingCard'
import RichText from '@/components/RichText'
import type { ListingGroupBlock as ListingGroupBlockProps } from '@/payload-types'
import { hasText } from '@payloadcms/richtext-lexical/shared'

import React from 'react'

export const ListingGroupBlock: React.FC<ListingGroupBlockProps & { id?: string }> = (props) => {
  const { introContent, listingGroup, link, enableLink } = props

  if (!listingGroup || typeof listingGroup === 'string') return null

  return (
    <>
      <div className="container my-16">
        {introContent && hasText(introContent) ? (
          <RichText data={introContent} enableGutter={false} />
        ) : (
          <>
            <h2 className="text-2xl font-bold">{listingGroup.title}</h2>
          </>
        )}
        {enableLink && link && <CMSLink {...link} className="my-4" />}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {listingGroup.listings?.map((listing) => {
            if (typeof listing === 'string') return null

            return <ListingCard key={listing.id} listing={listing} variant="featured" />
          })}
        </div>
      </div>
    </>
  )
}
