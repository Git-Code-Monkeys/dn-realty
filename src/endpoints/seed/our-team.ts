import { Media } from '@/payload-types'
import type { RequiredDataFromCollectionSlug } from 'payload'
import { MediaName } from './media'

type OurTeamArgs = {
  mediaMap: Map<MediaName | null | undefined, Media>
}

export const ourTeam: (args: OurTeamArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap,
}) => {
  return {
    title: 'Our Team',
    hero: {
      type: 'mediumImpact',

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
                  text: 'World Class Expertise',
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
              tag: 'h1',
              type: 'heading',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'OUR TEAM',
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
              format: 'left',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'Welcome to the DN Realty team – your experts in real estate. United in passion and expertise, we’re here to guide your property journey with excellence.',
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
      links: [],

      media: mediaMap.get('team-hero-banner.png')?.id as string,
    },
    layout: [
      {
        blockName: 'Members',
        blockType: 'teamInfoBlock',
      },
    ],
    meta: {
      title: 'Our Team',
      image: mediaMap.get('team-hero-banner.png')?.id as string,
      description: 'Meet the team at DN Realty',
    },
    slug: 'our-team',
    slugLock: true,
    _status: 'published',
  }
}
