import { UserRoleEnum } from './types'

/**
 * Check if the user is a super admin.
 * @param roles The roles to check
 * @returns Whether the user is a super admin
 */
export const isSuperAdmin = (roles: string[] | undefined): boolean => {
  return roles?.includes(UserRoleEnum.SuperAdmin) ?? false
}

/**
 * Check if the user is an admin.
 * @param roles The roles to check
 * @returns Whether the user is an admin
 */
export const isAdmin = (roles: string[] | undefined): boolean => {
  return roles?.includes(UserRoleEnum.Admin) ?? false
}

/**
 * Check if the user has at least one of the required roles.
 * @param roles The roles to check
 * @param requiredRoles The roles required
 * @returns Whether the user has at least one of the required roles
 *
 * @example
 * hasUserRoles(['admin', 'editor'], 'admin') // true
 * hasUserRoles(['editor'], ['admin', 'editor']) // true
 * hasUserRoles(['editor'], 'admin') // false
 */
export const hasUserRoles = (
  roles: string[] | undefined,
  requiredRoles: UserRoleEnum[] | UserRoleEnum,
): boolean => {
  if (!roles) return false
  if (!Array.isArray(requiredRoles)) {
    requiredRoles = [requiredRoles]
  }
  return requiredRoles.some((role) => roles.includes(role))
}

/**
 * Check if the user is at least an admin.
 *
 * Role hierarchy (highest to lowest): SuperAdmin > Admin
 *
 * @param roles The roles to check
 * @returns Whether the user is at least an admin
 */
export const userIsAtLeastAdmin = (roles: string[] | undefined): boolean => {
  return isSuperAdmin(roles) || isAdmin(roles)
}
