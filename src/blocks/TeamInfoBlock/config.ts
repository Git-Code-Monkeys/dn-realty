import { Block } from 'payload'

export const TeamInfoBlock: Block = {
  slug: 'teamInfoBlock',
  interfaceName: 'TeamInfoBlock',
  labels: {
    plural: 'Team Info',
    singular: 'Team Info',
  },
  fields: [
    {
      name: 'members',
      type: 'json',
      virtual: true,
      hooks: {
        afterRead: [
          async ({ req }) => {
            const result = await req.payload.find({
              collection: 'team-members',
              depth: 1,
              sort: '_order',
              limit: 999,
            })
            return result.docs
          },
        ],
      },
      admin: {
        hidden: true,
      },
    },
  ],
}
