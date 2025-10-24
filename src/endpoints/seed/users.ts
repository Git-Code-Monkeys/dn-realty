import { UserRoleEnum } from '@/access/types'
import { RequiredDataFromCollectionSlug } from 'payload'

/**
 * Create the users payload data for the database.
 * @param args The arguments for the users.
 * @returns The users.
 *
 * NOTE:
 * For now, the password is hardcoded to 'password'.
 * In future, we can randomly generate a password for each user and send it to the user's email.
 * It will be more secure and validates the user's email.
 */

export const users: () => RequiredDataFromCollectionSlug<'users'>[] = () => {
  return [
    {
      name: 'Super Admin',
      email: 'superadmin@dnrealty.com.au',
      roles: [UserRoleEnum.SuperAdmin],
      password: 'password',
    },
    {
      name: 'Demo Admin',
      email: 'admin@dnrealty.com.au',
      roles: [UserRoleEnum.Admin],
      password: 'password',
    },
  ]
}
