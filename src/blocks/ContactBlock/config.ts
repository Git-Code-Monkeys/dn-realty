import { Block } from 'payload'

export const Contact: Block = {
  slug: 'contact',
  interfaceName: 'Contact Block',
  fields: [
    {
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'Phone',
          value: 'phone',
        },
        {
          label: 'Email',
          value: 'email',
        },
        {
          label: 'Address',
          value: 'address',
        },
      ],
    },
    {
      name: 'value',
      type: 'text',
      virtual: true,
      hooks: {
        afterRead: [
          async ({ req, siblingData }) => {
            const contactData = await req.payload.findGlobal({
              slug: 'contact',
            })
            switch (siblingData.type) {
              case 'phone':
                return contactData?.phone
              case 'email':
                return contactData?.email
              case 'address':
                if (!contactData?.officeAddress) return undefined
                const { street, suburb, state, postcode, country } = contactData.officeAddress
                if (!street || !suburb || !state || !postcode || !country) return undefined
                return contactData.officeAddress
              default:
                return undefined
            }
          },
        ],
      },
      admin: {
        hidden: true,
      },
    },
  ],
}
