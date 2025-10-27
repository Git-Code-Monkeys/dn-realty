import { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
      required: false,
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email',
      required: false,
    },
    {
      label: 'Office Address',
      name: 'officeAddress',
      type: 'group',
      fields: [
        { name: 'street', type: 'text', required: false },
        { name: 'suburb', label: 'Suburb / City', type: 'text', required: false },
        {
          name: 'state',
          type: 'select',
          required: false,
          options: [
            { label: 'New South Wales (NSW)', value: 'NSW' },
            { label: 'Victoria (VIC)', value: 'VIC' },
            { label: 'Queensland (QLD)', value: 'QLD' },
            { label: 'Western Australia (WA)', value: 'WA' },
            { label: 'South Australia (SA)', value: 'SA' },
            { label: 'Tasmania (TAS)', value: 'TAS' },
            { label: 'Australian Capital Territory (ACT)', value: 'ACT' },
            { label: 'Northern Territory (NT)', value: 'NT' },
          ],
          defaultValue: 'NSW',
        },
        { name: 'postcode', type: 'text', required: false },
        {
          name: 'country',
          type: 'text',
          hidden: false,
          defaultValue: 'Australia',
        },
      ],
    },
    {
      name: 'contactForm',
      type: 'relationship',
      relationTo: 'forms',
      required: false,
    },
  ],
}
