import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest } from 'payload'

import { Media } from '@/payload-types'
import { about as aboutPageData } from './about'
import { contactForm as contactFormData } from './contact-form'
import { contact as contactPageData } from './contact-page'
import { home } from './home'
import { listingGroupFeatured } from './listing-group-featured'
import { listingTypes, ListingTypeSlug } from './listing-types'
import { listings } from './listings'
import { MediaName, mediaPayload } from './media'
import { ourTeam as ourTeamPageData } from './our-team'
import { teamMembers } from './team-members'
import { users } from './users'

/**
 * DO NOT add `users` to this list as it will delete all users in the database including the current user.
 */
const collections: CollectionSlug[] = [
  'media',
  'listing-types',
  'listings',
  'listing-groups',
  'team-members',
  'pages',
  'forms',
  'form-submissions',
  // Not used in this project for now, but should be fine to keep them here to clean the database
  'categories',
  'posts',
  'search',
]
const globals: GlobalSlug[] = ['header', 'footer', 'contact']

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  payload.logger.info(`— Clearing collections and globals...`)

  // clear the database
  await Promise.all(
    globals.map((global) =>
      payload.updateGlobal({
        slug: global,
        data: {},
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

  collections.forEach(async (collection) => {
    await payload.db.deleteMany({ collection, req, where: {} })
    if (Boolean(payload.collections[collection].config.versions)) {
      await payload.db.deleteVersions({ collection, req, where: {} })
    }
  })

  const usersData = users()
  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        in: usersData.map((user) => user.email),
      },
    },
  })

  payload.logger.info('Successfully cleared the database.')

  payload.logger.info(`— Seeding users...`)

  await Promise.all(usersData.map((user) => payload.create({ collection: 'users', data: user })))

  payload.logger.info(`— Seeding media...`)

  const mediaDocs = await Promise.all(
    mediaPayload.map((media) =>
      payload.create({
        collection: 'media',
        data: media.data,
        file: media.file,
      }),
    ),
  )

  const mediaMap: Map<MediaName | null | undefined, Media> = new Map(
    mediaDocs.map((media) => [media.filename as MediaName, media]),
  )
  console.log('🚀 ~ index.ts:99 ~ seed ~ mediaMap:', mediaMap)

  payload.logger.info(`Seeding listing types...`)

  const listingTypesDocs = await Promise.all(
    listingTypes.map((type) =>
      payload.create({
        collection: 'listing-types',
        data: type,
      }),
    ),
  )

  const listingTypesMap = new Map(
    listingTypesDocs.map((type) => [type.slug as ListingTypeSlug, type]),
  )
  console.log('🚀 ~ index.ts:113 ~ seed ~ listingTypesMap:', listingTypesMap)

  payload.logger.info(`— Seeding listings...`)

  const listingsDocs = await Promise.all(
    listings({ mediaMap, listingTypesMap }).map((listing) =>
      payload.create({
        collection: 'listings',
        data: listing,
      }),
    ),
  )

  const featuredListingsSlugs = [
    '4692-divi-way',
    '2467-monarch-ave-unit-3',
    'extra-2-se-of-12th',
    '157-bloom-blvd',
  ]
  const listingIds = listingsDocs
    .filter((listing) => featuredListingsSlugs.includes(listing.slug as string))
    .map((listing) => listing.id)
  console.log('🚀 ~ index.ts:123 ~ seed ~ listingIds:', listingIds)

  payload.logger.info(`— Seeding listing groups...`)

  const [featuredListingGroupDoc] = await Promise.all([
    payload.create({
      collection: 'listing-groups',
      data: listingGroupFeatured({ listingIds }),
    }),
  ])
  console.log('🚀 ~ index.ts:132 ~ seed ~ featuredListingGroupDoc:', featuredListingGroupDoc)

  payload.logger.info(`— Seeding contact form...`)

  const contactForm = await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData,
  })

  payload.logger.info('Seeding team members')
  await Promise.all(
    teamMembers({ mediaMap }).map((member) =>
      payload.create({
        collection: 'team-members',
        data: member,
      }),
    ),
  )

  payload.logger.info(`— Seeding pages...`)

  const contactPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: contactPageData({ contactForm, mediaMap }),
  })

  const ourTeamPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: ourTeamPageData({ mediaMap }),
  })

  const aboutPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: aboutPageData({ mediaMap }),
  })

  const homePage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: home({
      heroImage: mediaMap.get('home-hero-banner.png')!,
      metaImage: mediaMap.get('home-hero-banner.png')!,
      layoutImages: {
        introImage: mediaMap.get('home-intro.png')!,
      },
      pageReferences: {
        contactPageId: contactPage.id,
        ourTeamPageId: ourTeamPage.id,
        aboutPageId: aboutPage.id,
      },
      listingGroups: {
        featuredListingGroupId: featuredListingGroupDoc.id,
      },
    }),
  })

  payload.logger.info(`— Seeding globals...`)

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          {
            link: {
              type: 'reference',
              newTab: null,

              reference: {
                relationTo: 'pages',

                value: homePage.id,
              },
              url: null,
              label: 'Home',
            },
          },
          {
            link: {
              type: 'reference',
              newTab: null,

              reference: {
                relationTo: 'pages',

                value: aboutPage.id,
              },
              url: '/about',
              label: 'About',
            },
          },
          {
            link: {
              type: 'custom',
              newTab: null,

              reference: null,
              url: '/listings',
              label: 'Listings',
            },
          },
          {
            link: {
              type: 'reference',
              newTab: null,

              reference: {
                relationTo: 'pages',

                value: ourTeamPage.id,
              },
              url: '/our-team',
              label: 'Our Team',
            },
          },
          {
            link: {
              type: 'reference',
              newTab: null,

              reference: {
                relationTo: 'pages',

                value: contactPage.id,
              },
              url: '/contact',
              label: 'Contact Us',
            },
          },
        ],
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        title: 'DN REALTY | YOUR LOCAL PROPERTY EXPERTS',
        companyTagline: 'DN REALTY BY DANNY NATH | Western Sydney',
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
                    text: 'Do you need some help?',
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
                    text: 'Feeling overwhelmed with real estate choices?',
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
                    text: 'Let DN Realty be your guiding light. Our team, led by Danny Nath, understands that navigating property decisions can be daunting. We’re here to simplify the process, offering clear, tailored advice to help you make informed decisions with confidence. Whether you’re unsure about buying, selling, or just need a friendly chat about your options, we’re here for you every step of the way. Reach out to us, and let’s make your real estate journey stress-free and successful.',
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
        navItems: [
          {
            link: {
              type: 'reference',
              newTab: null,

              reference: {
                relationTo: 'pages',

                value: homePage.id,
              },
              url: null,
              label: 'Home',
            },
          },
          {
            link: {
              type: 'reference',
              newTab: null,

              reference: {
                relationTo: 'pages',

                value: aboutPage.id,
              },
              url: null,
              label: 'About',
            },
          },
          {
            link: {
              type: 'reference',
              newTab: null,

              reference: {
                relationTo: 'pages',

                value: contactPage.id,
              },
              url: null,
              label: 'Contact',
            },
          },
          {
            link: {
              type: 'custom',
              newTab: null,
              url: '/listings',
              label: 'Listings',
            },
          },
          {
            link: {
              type: 'reference',
              newTab: null,

              reference: {
                relationTo: 'pages',

                value: ourTeamPage.id,
              },
              url: '/our-team',
              label: 'Our Team',
            },
          },
        ],
        privacyPolicyUrl: null,
      },
    }),
    payload.updateGlobal({
      slug: 'contact',
      data: {
        phone: '(+61) 0433 738 027',
        email: 'admin@dnrealty.com.au',
        officeAddress: {
          street: 'Level 1/93 George St',
          suburb: 'Parramatta',
          state: 'NSW',
          postcode: '2150',
          country: 'Australia',
        },
      },
    }),
  ])

  payload.logger.info('Seeded database successfully!')
}
