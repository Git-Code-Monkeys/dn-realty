import { TeamMember } from '@/components/TeamMember'
import type {
  TeamInfoBlock as TeamInfoBlockProps,
  TeamMember as TeamMemberType,
} from '@/payload-types'
import { cn } from '@/utilities/ui'
import React from 'react'

export const TeamInfoBlock: React.FC<TeamInfoBlockProps & { className?: string }> = async (
  props,
) => {
  const { members, className } = props
  console.log('🚀 ~ Component.tsx:6 ~ TeamInfoBlock ~ members:', members)
  if (!Array.isArray(members) || members.length === 0) return null

  return (
    <div className={cn('container my-16', className)}>
      {(members as TeamMemberType[]).map((member: TeamMemberType) => (
        <div key={member.id} className="flex flex-col items-center justify-center">
          <TeamMember {...member} />
        </div>
      ))}
    </div>
  )
}
