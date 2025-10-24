import { Media } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'
import { MediaName } from './media'

type TeamMembersArgs = {
  mediaMap: Map<MediaName | null | undefined, Media>
}

export const teamMembers: (
  args: TeamMembersArgs,
) => RequiredDataFromCollectionSlug<'team-members'>[] = ({ mediaMap }) => {
  return [
    {
      _order: 'a0',
      name: 'Danny Nath',
      role: 'Owner',
      phone: '(+61) 0433 738 027',
      email: 'admin@dnrealty.com.au',
      image: mediaMap.get('about-intro.jpg')?.id as string,
      bio: {
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
                  text: 'some bio',
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
      socialLinks: [
        {
          url: 'https://youtube.com',
          socialMedia: 'youtube',
        },
      ],
    },
  ]
}
