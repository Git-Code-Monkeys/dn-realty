import { Card } from '@/components/ui/card'
import { Listing } from '@/payload-types'
import Image from 'next/image'
import { Media } from '../Media'
import { Badge } from '../ui/badge'

interface ListingCardProps {
  listing: Pick<
    Listing,
    | 'id'
    | 'coverImage'
    | 'title'
    | 'address'
    | 'pricing'
    | 'bedrooms'
    | 'bathrooms'
    | 'size'
    | 'listingStatus'
    | 'listingType'
    | 'parking'
  >
  variant: 'standard' | 'featured'
}
export function ListingCard({ listing, variant }: ListingCardProps) {
  const formatPrice = (pricing: typeof listing.pricing) => {
    if (!pricing) return null
    if (pricing.isHidden) return null
    if (pricing.type === 'poa') return 'Price on Application'

    const formatter = new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: pricing.currency || 'AUD',
      maximumFractionDigits: 0,
    })

    const amount = formatter.format(pricing.amount || 0)

    switch (pricing.period) {
      case 'week':
        return `${amount}/week`
      case 'month':
        return `${amount}/month`
      default:
        return amount
    }
  }
  if (variant === 'standard') {
    return (
      <Card className="relative h-96 overflow-hidden group cursor-pointer border-0 shadow-md hover:shadow-2xl transition-all duration-300">
        <Image
          src={
            typeof listing.coverImage === 'object'
              ? (listing.coverImage.url ?? '')
              : (listing.coverImage ?? '')
          }
          alt={
            typeof listing.coverImage === 'object'
              ? (listing.coverImage.alt ?? listing.title)
              : (listing.coverImage ?? '')
          }
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Card>
    )
  }
  return (
    <Card className="relative h-[420px] rounded-3xl overflow-hidden group cursor-pointer border-0 shadow-md hover:shadow-2xl transition-all duration-300">
      {/* Background Image */}
      {typeof listing.coverImage === 'object' && (
        <Media
          resource={listing.coverImage}
          alt={listing.coverImage.alt ?? listing.title}
          size="33vw"
          fill
          imgClassName="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 opacity-90 group-hover:opacity-70 transition-opacity duration-300" />

      {/* Listing Status */}
      <div className="absolute top-4 left-4">{getListingStatusBadge(listing.listingStatus)}</div>
      {/* Listing Type */}
      <div className="absolute top-4 right-4">{getListingTypeBadge(listing.listingType)}</div>
      {/* Content Container */}
      <Card className="absolute bottom-4 left-0 right-0 p-6 flex flex-col justify-end transform transition-transform duration-300 group-hover:-translate-y-2 mx-4 rounded-xl">
        {/* Title & Address */}
        <div className="space-y-2 flex flex-col items-center">
          <h3 className="text-xl font-bold text-card-foreground drop-shadow-2xl line-clamp-2">
            {listing.title}
          </h3>

          {listing.address && (
            <p className="text-card-foreground/90 text-sm drop-shadow-lg line-clamp-1">
              📍{' '}
              {`${listing.address.street ? `${listing.address.street}, ` : ''}${listing.address.suburb}`}
            </p>
          )}
          <p className="text-lg font-medium text-card-foreground drop-shadow-2xl line-clamp-2">
            {formatPrice(listing.pricing)}
          </p>

          {/* Features and Pricing */}
          <div className="flex items-center gap-4 text-card-foreground/80 text-sm flex-wrap justify-center">
            {listing.bedrooms && <span>🛏 {listing.bedrooms}</span>}
            {listing.bathrooms && <span>🚿 {listing.bathrooms}</span>}
            {listing.size && <span>📐 {listing.size}</span>}
            {listing.parking && <span>🅿️ {listing.parking}</span>}
          </div>
        </div>
      </Card>
    </Card>
  )
}

function getListingStatusBadge(listingStatus: Listing['listingStatus']) {
  let badgeLabel = ''
  switch (listingStatus) {
    case 'for-sale':
      badgeLabel = 'For Sale'
      break
    case 'for-rent':
      badgeLabel = 'For Rent'
      break
    case 'sold':
      badgeLabel = 'Sold'
      break
    case 'leased':
      badgeLabel = 'Leased'
      break
    case 'off-market':
      badgeLabel = 'Off Market'
      break
    default:
      badgeLabel = ''
      break
  }
  return <Badge variant="default">{badgeLabel}</Badge>
}

function getListingTypeBadge(listingType: string | Listing['listingType']) {
  if (typeof listingType === 'string') {
    return <Badge variant="default">{listingType}</Badge>
  }
  return <Badge variant="default">{listingType.title}</Badge>
}
