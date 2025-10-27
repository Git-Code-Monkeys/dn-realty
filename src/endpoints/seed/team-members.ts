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
      image: null,
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
                  text: 'Danny Nath, the driving force behind DN Realty, brings over 18 years of real estate expertise to the table.',
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
                  text: 'As the Owner and Director, Danny’s extensive experience and deep market knowledge set the standard for excellence. His passion for real estate and commitment to client success have made him a trusted name in the industry, guiding clients through their property journeys with unmatched professionalism and care. ',
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
                  text: 'Whether you are buying, selling or looking for an experienced agent to manage your property Danny is just a phone call away.',
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
      socialLinks: [],
    },
  ]
}
