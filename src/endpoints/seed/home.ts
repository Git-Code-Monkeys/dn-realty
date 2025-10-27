import type { Media } from '@/payload-types'
import type { RequiredDataFromCollectionSlug } from 'payload'

type PageReference = {
  contactPageId: string
  ourTeamPageId: string
  aboutPageId: string
}
type LayoutImages = {
  introImage: Media
}
type HomeArgs = {
  heroImage: Media
  metaImage: Media
  layoutImages: LayoutImages
  pageReferences: PageReference
  listingGroups: {
    featuredListingGroupId: string
  }
}
export const home: (args: HomeArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
  pageReferences,
  layoutImages,
  listingGroups,
}) => {
  return {
    slug: 'home',
    _status: 'published',
    hero: {
      type: 'highImpact',
      links: [
        {
          id: '68b3d97d22454e1fa8b1b09e',

          link: {
            type: 'reference',
            newTab: null,

            reference: {
              relationTo: 'pages',
              value: pageReferences.contactPageId,
            },
            url: '/contact',
            label: 'Call Now For Free Appraisal',
            appearance: 'default',
          },
        },
      ],
      media: heroImage.id,
      richText: {
        root: {
          type: 'root',
          format: '',
          indent: 0,
          version: 1,

          children: [
            {
              tag: 'h1',
              type: 'heading',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'UNLOCK YOUR PROPERTY POTENTIAL IN SOUTH WESTERN SYDNEY',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 1,
                  version: 1,
                },
              ],
              direction: 'ltr',
              textFormat: 1,
            },
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'Welcome to DN Realty, where your property aspirations in South Western Sydney are our top priority. Spearheaded by Danny Nath, a seasoned realtor with a deep connection to the local community, we specialise in turning real estate dreams into reality. Whether you’re buying, selling, or exploring investment opportunities, DN Realty is your trusted partner, offering personalised service and expert insights in one of Australia’s most vibrant property markets.',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              textStyle: '',
              textFormat: 0,
            },
          ],
          direction: 'ltr',
          textFormat: 1,
        },
      },
    },
    layout: [
      {
        blockName: 'Introduction',
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
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: "G' day!",
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    tag: 'h2',
                    type: 'heading',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: "I'm Danny.",
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                      {
                        type: 'linebreak',
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: 'A proud local Realtor with over 10 Years of Experience.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'As a realtor with over 18 years of experience, I bring a wealth of knowledge and a passion for real estate to every deal. My commitment to my clients goes beyond transactions; I strive to build lasting relationships, ensuring each client’s journey is as seamless and successful as possible. Whether you’re buying, selling, or investing, I’m here to guide you every step of the way with expertise and integrity',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textStyle: '',
                    textFormat: 0,
                  },

                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,
                    children: [],
                    direction: 'ltr',
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: 'ltr',
              },
            },
            media: null,
            enableLink: true,
            link: {
              type: 'reference',
              newTab: null,
              reference: {
                relationTo: 'pages',
                value: pageReferences.ourTeamPageId,
              },
              url: null,
              label: 'Meet the Team',
              appearance: 'default',
            },
          },
          {
            size: 'half',
            richText: null,
            media: layoutImages.introImage?.id,
            enableLink: null,
            link: {
              type: 'reference',
              newTab: null,
              reference: {
                relationTo: 'pages',
                value: pageReferences.ourTeamPageId,
              },
              url: null,
              label: 'Learn More',
              appearance: 'default',
            },
          },
        ],
        blockType: 'content',
      },
      {
        blockName: 'Services',

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
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Services',
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
                        text: 'Buy, Sell, List, Stage, Inspect, Appraise, you name it!',
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
                direction: 'ltr',
              },
            },
            media: null,
            enableLink: true,
            link: {
              type: 'custom',
              newTab: null,

              reference: {
                relationTo: 'pages',

                value: pageReferences.aboutPageId,
              },
              url: '/about#services',
              label: 'All Services',
              appearance: 'outline',
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
                        text: 'Find Your Dream Home',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Discover the perfect place to call home with our dedicated team. We listen to your needs, guide you through every step, and find homes that not only meet but exceed your expectations. Let us turn your dream home into your next address.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: 'ltr',
              },
            },
            media: null,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: 'Learn More',
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
                        text: 'Sell Your Property',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Selling your home is more than a transaction; it’s a pivotal life moment. We bring a strategic approach to showcase your property’s unique charm and secure the best market value. Together, we’ll make your selling experience smooth and rewarding',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: 'ltr',
              },
            },
            media: null,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: 'Learn More',
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
                        text: 'Stage a Space',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Transform your property into a buyer&apos;s dream with our expert staging services. With an eye for design and detail, we help stage your space to highlight its best features, creating an inviting atmosphere that captivates potential buyers and sets the stage for successful selling',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: 'ltr',
              },
            },
            media: null,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: 'Learn More',
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
                        text: 'Get an Appraisal',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Understanding the value of your property is key. We provide comprehensive, honest appraisals, combining market data with a deep understanding of local trends. Trust us to give you the insights you need to make informed real estate decisions.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: 'ltr',
              },
            },
            media: null,
            enableLink: null,

            link: {
              type: 'reference',
              newTab: null,
              url: null,
              label: 'Learn More',
              appearance: 'default',
            },
          },
        ],
        blockType: 'content',
      },
      {
        blockType: 'listingGroup',
        blockName: 'Featured Listings',
        introContent: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,

            children: [
              {
                tag: 'h2',
                type: 'heading',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Featured Listings',
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
                    text: 'Discover our carefully selected featured properties, offering exceptional value and prime locations.',
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
        enableLink: true,
        link: {
          type: 'custom',
          newTab: null,

          url: '/listings',
          label: 'Explore more listings',
          appearance: 'outline',
        },
        listingGroup: listingGroups.featuredListingGroupId,
      },
      {
        blockType: 'carousel',
        blockName: 'Testimonials',
        size: 'oneThird',
        type: 'testimonial',
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
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Testimonials',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: null,
              },
            ],
            direction: null,
          },
        },
        enableLink: false,
        items: [
          {
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

                    children: [
                      {
                        mode: 'normal',
                        text: '“As first-time home buyers, we were overwhelmed, but Danny was incredible. He walked us through every step with patience and expertise. We never felt rushed or pressured, and he found us a home that’s just perfect for our growing family. We can’t thank him enough!”',
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
                        text: '&ndash; Sarah and Tom',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },
                      {
                        type: 'linebreak',
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: '(First-time Home buyers)',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 2,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 1,
                  },
                ],
                direction: null,
                textFormat: 1,
              },
            },
          },
          {
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

                    children: [
                      {
                        mode: 'normal',
                        text: '“I’ve worked with several realtors for my investment properties, but Danny stands out. His market knowledge and negotiation skills have been invaluable. He understands exactly what I look for in an investment and consistently delivers great results.”',
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
                        text: '&ndash; ',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                      {
                        mode: 'normal',
                        text: 'Michael',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },
                      {
                        type: 'linebreak',
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: '(Property Investor)',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 2,
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
          },
          {
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

                    children: [
                      {
                        mode: 'normal',
                        text: '“Relocating to Australia was challenging, but Danny was our anchor. He understood our needs and went above and beyond to ensure we found a home we love. His guidance through the buying process was invaluable, especially navigating it from overseas.”',
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
                        text: '&ndash; Raj and Anjali',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },
                      {
                        type: 'linebreak',
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: '(Relocating from overseas)',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 2,
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
          },
        ],

        link: {
          type: 'custom',
          newTab: null,
          url: '#',
          label: 'Our Testimonials',
          appearance: 'inline',
        },
      },
    ],
    meta: {
      description: 'Your Trusted Real Estate Partner in South Western Sydney',
      image: heroImage.id,
      title: 'Home',
    },
    title: 'Home',
  }
}
