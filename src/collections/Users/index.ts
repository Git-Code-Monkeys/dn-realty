import type { CollectionConfig } from 'payload'

import { authenticated } from '@/access/authenticated'
import { authenticatedWithRoles } from '@/access/authenticatedWithRoles'
import { UserRoleEnum } from '@/access/types'
import { hasUserRoles } from '@/access/utils'
import humanizeString from 'humanize-string'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    // For now, there are no public users, so all authenticated users have access to Admin UI.
    admin: authenticated,
    create: (args) => authenticatedWithRoles(args, [UserRoleEnum.Admin, UserRoleEnum.SuperAdmin]),
    delete: (args) => authenticatedWithRoles(args, [UserRoleEnum.Admin, UserRoleEnum.SuperAdmin]),
    read: (args) => authenticatedWithRoles(args, [UserRoleEnum.Admin, UserRoleEnum.SuperAdmin]),
    update: (args) => authenticatedWithRoles(args, [UserRoleEnum.Admin, UserRoleEnum.SuperAdmin]),
  },

  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
    hidden: ({ user }) => !hasUserRoles(user?.roles, [UserRoleEnum.SuperAdmin]),
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'select',
      options: Object.values(UserRoleEnum).map((role) => ({
        label: humanizeString(role),
        value: role,
      })),
      defaultValue: [UserRoleEnum.Admin],
      hasMany: true,
      required: true,
      access: {
        read: ({ req: { user } }) => hasUserRoles(user?.roles, [UserRoleEnum.SuperAdmin]),
        update: ({ req: { user } }) => hasUserRoles(user?.roles, [UserRoleEnum.SuperAdmin]),
        create: ({ req: { user } }) => hasUserRoles(user?.roles, [UserRoleEnum.SuperAdmin]),
      },
    },
  ],
  timestamps: true,
}
