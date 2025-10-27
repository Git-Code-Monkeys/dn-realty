import type { Contact, ContactBlock as ContactBlockProps } from '@/payload-types'
import React from 'react'

export const ContactBlock: React.FC<
  Omit<ContactBlockProps, 'value'> & {
    value?: string | NonNullable<Contact['officeAddress']> | null | undefined
  }
> = ({ value, type }) => {
  if (!value) return null
  if (type === 'address') {
    const { street, suburb, state, postcode, country } = value as NonNullable<
      Contact['officeAddress']
    >
    return (
      <div className="flex items-center gap-2">
        <div>
          <p>{street}</p>
          <p>
            {suburb} {state} {postcode}, {country}
          </p>
        </div>
      </div>
    )
  }

  return <>{value}</>
}
