import { AccessArgs, AccessResult } from 'payload'
import { UserRoleEnum } from './types'
import { hasUserRoles } from './utils'

type AccessWithRoles<TData = any> = (
  args: AccessArgs<TData>,
  requiredRoles?: UserRoleEnum[] | UserRoleEnum,
) => AccessResult | Promise<AccessResult>

export const authenticatedWithRoles: AccessWithRoles = ({ req: { user } }, requiredRoles) => {
  if (!requiredRoles) return Boolean(user)
  return Boolean(user) && hasUserRoles(user?.roles, requiredRoles)
}
