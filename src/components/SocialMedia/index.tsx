import type { TeamMember } from '@/payload-types'
import Image from 'next/image'

type SocialMediaProps = NonNullable<TeamMember['socialLinks']>[number] & {
  className?: string
  showLabel?: boolean
}

const socialMediaMap: Record<SocialMediaProps['socialMedia'], { label: string; iconPath: string }> =
  {
    facebook: {
      label: 'Facebook',
      iconPath: '/socials/facebook.png',
    },
    instagram: {
      label: 'Instagram',
      iconPath: '/socials/instagram.png',
    },
    x: {
      label: 'X',
      iconPath: '/socials/x.png',
    },
    linkedin: {
      label: 'LinkedIn',
      iconPath: '/socials/linkedin.png',
    },
    tiktok: {
      label: 'TikTok',
      iconPath: '/socials/tiktok.png',
    },
    youtube: {
      label: 'Youtube',
      iconPath: '/socials/youtube.png',
    },
  }

export const SocialMedia: React.FC<SocialMediaProps> = (props) => {
  const { url, socialMedia, className, showLabel = false } = props
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
      <Image
        src={socialMediaMap[socialMedia].iconPath}
        alt={socialMediaMap[socialMedia].label}
        width={24}
        height={24}
      />
      {showLabel && socialMediaMap[socialMedia].label}
    </a>
  )
}
