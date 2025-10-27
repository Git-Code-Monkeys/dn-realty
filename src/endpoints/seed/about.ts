import { Media } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'
import { MediaName } from './media'

type AboutArgs = {
  mediaMap: Map<MediaName | null | undefined, Media>
}

export const about: (args: AboutArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap,
}) => {
  return {
    title: 'About',
    hero: {
      type: 'none',
      richText: null,
      links: [],
      media: null,
    },
    layout: [
      {
        blockName: null,

        columns: [
          {
            size: 'half',

            richText: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    tag: 'h6',
                    type: 'heading',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'ABOUT',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },
                  {
                    tag: 'h1',
                    type: 'heading',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'DANNY NATH',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,
                    children: [],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'DN Realty is an independent real estate agency that is expanding quickly with exceptional experience for all your property needs.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'We know that purchasing, selling & investing in real estate can occasionally be difficult and emotionally draining, but they are almost always hugely significant life events.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'We take pride in offering our clients highly individualized service, involving them in every step of the real estate process, and making buying, selling & investing in property as pleasant as possible. ',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        type: 'linebreak',
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: 'We have a deep understanding of real estate procedures thanks to our wide expertise and prosperous real estate background, enabling us to offer our clients a more transparent and sincere service.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'From first-time buyers to seasoned sellers, we assist everyone in making better, more informed selections.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: null,
              },
            },
            media: null,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: '',
              appearance: 'default',
            },
          },
          {
            size: 'half',
            richText: null,

            media: mediaMap.get('about-intro.jpg')?.id as string,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: '',
              appearance: 'default',
            },
          },
        ],
        blockType: 'content',
      },
      {
        blockName: null,

        columns: [
          {
            size: 'full',

            richText: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    tag: 'h2',
                    type: 'heading',
                    format: 'left',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'OUR SERVICES',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textFormat: 1,
                  },

                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,
                    children: [],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: null,
                textFormat: 1,
              },
            },
            media: null,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: '',
              appearance: 'default',
            },
          },
          {
            size: 'half',

            richText: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,
                    children: [],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: null,
              },
            },
            media: mediaMap.get('service-buying.png')?.id as string,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: '',
              appearance: 'default',
            },
          },
          {
            size: 'half',

            richText: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    tag: 'h3',
                    type: 'heading',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Looking into BUYING?',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Begin your property journey with DN Realty, where our expert team is dedicated to guiding you through every aspect of the home-buying process. From understanding your unique needs to exploring the best options, we ensure a smooth and personalised experience.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Our commitment goes beyond just finding a property; we strive to discover a place that resonates with your lifestyle and dreams. With our extensive knowledge of the market and a keen eye for detail, we’re dedicated to finding you a home that not only meets but surpasses your expectations. Trust us to transform your dream of homeownership into a tangible reality.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: null,
              },
            },
            media: null,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: '',
              appearance: 'default',
            },
          },
          {
            size: 'half',
            richText: null,

            media: mediaMap.get('service-selling.png')?.id as string,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: '',
              appearance: 'default',
            },
          },
          {
            size: 'half',

            richText: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    tag: 'h3',
                    type: 'heading',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Considering SELLING?',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'We offer a superior level of service that is unmatched. The greatest agents in the business, we curate with unmatched flair and attention to detail.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'We are here to help you in selling your house at a level you won’t find anywhere else. Let’s connect to help you evaluate and create a worthy value for your house.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: null,
              },
            },
            media: null,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: '',
              appearance: 'default',
            },
          },
          {
            size: 'half',
            richText: null,

            media: mediaMap.get('service-leasing.png')?.id as string,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: '',
              appearance: 'default',
            },
          },
          {
            size: 'half',

            richText: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    tag: 'h3',
                    type: 'heading',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'ABOUT TO LEASE?',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'At DN Realty, our leasing services are designed to provide comprehensive support for property owners. We understand the challenges of finding the right tenants and managing a property.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Our team takes care of everything – from effectively marketing your property to conducting thorough vetting processes for potential tenants. We work tirelessly to ensure a perfect match between your property and reliable tenants, focusing on maximising your investment’s value and minimising any hassles.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Our professional approach and attention to detail mean you can rest easy knowing your property is in capable hands, yielding the best possible returns.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: null,
              },
            },
            media: null,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: '',
              appearance: 'default',
            },
          },
          {
            size: 'half',
            richText: null,

            media: mediaMap.get('service-renting.png')?.id as string,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: '',
              appearance: 'default',
            },
          },
          {
            size: 'half',

            richText: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    tag: 'h3',
                    type: 'heading',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'RENTING YOUR SPACE?',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Trust and communication are the key to our business, and we ensure your property is maintained to the highest standard providing value to your assets.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Choosing to rent out a property is a big decision for any landlord to make. Our experienced team are ready to guide and assist you through the entire property management process with full transparency.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: null,
              },
            },
            media: null,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: '',
              appearance: 'default',
            },
          },
          {
            id: '68f52bade151c0cb93f14e0b',
            size: 'half',
            richText: null,

            media: mediaMap.get('service-appraisal.png')?.id as string,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: '',
              appearance: 'default',
            },
          },
          {
            size: 'half',

            richText: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    tag: 'h3',
                    type: 'heading',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'GETTING AN APPRAISAL?',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Understanding the true value of your property is crucial, and at DN Realty, we provide accurate and comprehensive appraisals tailored to your specific needs.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Our team combines detailed market analysis with local expertise and an understanding of broader market trends to give you a realistic and reliable property valuation. Whether you’re considering selling, refinancing, or need an appraisal for insurance purposes, our thorough approach ensures you have all the information you need to make informed decisions.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Trust DN Realty to deliver a clear, detailed appraisal, helping you understand your property&apos;s market position and potential.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: null,
              },
            },
            media: null,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: '',
              appearance: 'default',
            },
          },
          {
            id: '68f52db1d62699c71e862186',
            size: 'half',
            richText: null,

            media: mediaMap.get('service-staging.png')?.id as string,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: '',
              appearance: 'default',
            },
          },
          {
            size: 'half',

            richText: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    tag: 'h3',
                    type: 'heading',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'STAGING YOUR PROPERTY?',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Elevate your property&apos;s appeal with DN Realty&apos;s professional staging services. Our team of staging experts understands the power of first impressions and utilises a range of techniques to showcase your property at its best.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'We focus on accentuating the positive aspects of your home, creating an inviting and appealing atmosphere for potential buyers. Our staging process is designed to make your property stand out in the competitive market, attracting more interest and leading to quicker, more profitable sales.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'With our expertise in staging, we transform spaces into desirable homes, ensuring they capture the hearts and offers of potential buyers.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: null,
              },
            },
            media: null,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: '',
              appearance: 'default',
            },
          },
        ],
        blockType: 'content',
      },
    ],
    meta: {
      title: 'About',
      image: mediaMap.get('about-intro.jpg')?.id as string,
      description: 'Learn more about DN Realty and our services',
    },
    slug: 'about',
    slugLock: true,
    _status: 'published',
  }
}
