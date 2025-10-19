'use client'

import type { CarouselBlock as CarouselBlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { cssVariables } from '@/cssVariables'
import { cn } from '@/utilities/ui'
import { Quote } from 'lucide-react'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { ContentBlock } from '../Content/Component'

export const CarouselBlock: React.FC<
  CarouselBlockProps & {
    id?: string
  }
> = (props) => {
  const { type = 'general', items, ...restProps } = props
  const downMd = useMediaQuery(`(max-width: ${cssVariables.breakpoints.md}px)`)
  const downLg = useMediaQuery(`(max-width: ${cssVariables.breakpoints.lg}px)`)

  if (!items || items.length === 0) {
    return null
  }

  const isTestimonial = type === 'testimonial'

  const enableCarousel = (downMd && items.length > 2) || (downLg && items.length > 3)
  return (
    <>
      <ContentBlock
        columns={[restProps]}
        blockType="content"
        classNames={{ richText: 'my-4' }}
        className="my-4"
      />
      <div className="container">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
            active: enableCarousel,
          }}
          className="w-full max-w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4 justify-center pb-8">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  'pl-2 md:pl-4',
                  isTestimonial
                    ? 'basis-full md:basis-1/2 lg:basis-1/3'
                    : 'basis-full md:basis-1/2',
                )}
              >
                <Card
                  className={cn('h-full bg-transparent', isTestimonial && 'rounded-3xl shadow-md')}
                >
                  <CardContent className={cn('p-6', isTestimonial && 'text-left')}>
                    {isTestimonial && (
                      <Quote className="size-10 mb-4 rounded-full bg-primary/10 p-2 text-primary" />
                    )}
                    {item.richText && (
                      <RichText
                        data={item.richText}
                        enableGutter={false}
                        className={cn(
                          'prose-sm',
                          isTestimonial &&
                            'prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0',
                        )}
                      />
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {enableCarousel && (
            <>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </>
          )}
        </Carousel>
      </div>
    </>
  )
}
