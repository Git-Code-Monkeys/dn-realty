import type { TeamMember as TeamMemberType } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { MailIcon, PhoneIcon } from 'lucide-react'
import React from 'react'
import { Media } from '../Media'
import RichText from '../RichText'
import { SocialMedia } from '../SocialMedia'

export const TeamMember: React.FC<TeamMemberType> = (props) => {
  const { name, role, image, bio, socialLinks, phone, email } = props
  return (
    <div
      className={cn('w-full grid grid-cols-1 gap-4', {
        'md:grid-cols-2': image && typeof image === 'object',
      })}
    >
      {image && typeof image === 'object' && (
        <Media
          resource={image}
          imgClassName="h-full min-h-96 max-h-96 object-cover"
          // pictureClassName="w-full"
          // className="w-full"
        />
      )}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start flex-col gap-2">
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <h3 className="text-2xl font-semibold">{name}</h3>
              <span className="text-gray-500 dark:text-gray-400">|</span>
              <p className="text-sm text-gray-600 dark:text-gray-500">{role}</p>
              {socialLinks && socialLinks.length > 0 && (
                <span className="text-gray-500 dark:text-gray-400">|</span>
              )}
              <div className="flex gap-2">
                {socialLinks?.map((link) => (
                  <SocialMedia key={link.id} {...link} />
                ))}
              </div>
            </div>
            <div className="space-y-0.5">
              {phone && (
                <p className="text-sm text-gray-600 dark:text-gray-500 flex gap-2 items-center">
                  <PhoneIcon className="size-5" />
                  <a href={`tel:${phone}`} className="hover:underline">
                    {phone}
                  </a>
                </p>
              )}
              {email && (
                <p className="text-sm text-gray-600 dark:text-gray-500 flex gap-2 items-center">
                  <MailIcon className="size-5" />
                  <a href={`mailto:${email}`} className="hover:underline">
                    {email}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
        <RichText data={bio} enableGutter={false} className="mx-0" />
      </div>
    </div>
  )
}
