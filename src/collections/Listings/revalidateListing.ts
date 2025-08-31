import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { Listing } from '@/payload-types'
import { revalidatePath, revalidateTag } from 'next/cache'

export const revalidateListing: CollectionAfterChangeHook<Listing> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/listings/${doc.slug}`

      payload.logger.info(`Revalidating listing at path: ${path}`)

      revalidatePath(path)
      revalidateTag('listings-sitemap')
    }

    // If the listing was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/listings/${previousDoc.slug}`

      payload.logger.info(`Revalidating old listing at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('listings-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Listing> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/listings/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('listings-sitemap')
  }

  return doc
}
