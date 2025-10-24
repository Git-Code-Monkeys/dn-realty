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
      type: 'highImpact',

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
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'Some great content about our team.',
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

      media: mediaMap.get('team-hero-banner.png')?.id,
    },
    layout: [
      {
        blockName: 'Members',
        blockType: 'teamInfoBlock',
      },
    ],
    meta: {
      title: 'Our Team | DN Realty',
      image: mediaMap.get('team-hero-banner.png')?.id as string,
      description: 'Our Team | DN Realty',
    },
    slug: 'our-team',
    slugLock: true,
    _status: 'published',
  }
}
