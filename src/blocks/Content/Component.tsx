import RichText from '@/components/RichText'
import { cn } from '@/utilities/ui'
import React from 'react'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { Media } from '@/components/Media'
import { CMSLink } from '../../components/Link'

type ClassNameProps = {
  className?: string
  classNames?: {
    media?: string
    richText?: string
    link?: string
  }
}

export const ContentBlock: React.FC<ContentBlockProps & ClassNameProps> = (props) => {
  const { columns, classNames, className } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <div className={cn('container my-16', className)}>
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size, media } = col

            return (
              <div
                className={cn(
                  `col-span-4 lg:col-span-${colsSpanClasses[size!]}`,
                  {
                    'md:col-span-2': size !== 'full',
                  },
                  classNames?.richText || '',
                )}
                key={index}
              >
                {richText && (
                  <RichText
                    data={richText}
                    enableGutter={false}
                    className={cn({ 'mb-4': !media }, classNames?.richText || '')}
                  />
                )}
                {media && (
                  <Media resource={media} className={cn('mb-4', classNames?.media || '')} />
                )}

                {enableLink && <CMSLink {...link} className={cn(classNames?.link || '')} />}
              </div>
            )
          })}
      </div>
    </div>
  )
}
