import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import type { Contact, Footer } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

const defaults = {
  title: 'DN REALTY | YOUR LOCAL PROPERTY EXPERTS',
  companyTagline: 'DN REALTY BY DANNY NATH',
  navItems: [],
}

export async function Footer() {
  const [footerData, contactData]: [Footer, Contact] = await Promise.all([
    getCachedGlobal('footer', 1)(),
    getCachedGlobal('contact', 1)(),
  ])
  const { email, phone, officeAddress } = contactData || {}
  const {
    richText,
    title = defaults.title,
    companyTagline = defaults.companyTagline,
    privacyPolicyUrl,
    navItems = defaults.navItems,
  } = footerData || {}

  const hasOfficeAddress = officeAddress?.street && officeAddress?.suburb && officeAddress?.state
  const hasPhone = phone && phone.trim() !== ''
  const hasEmail = email && email.trim() !== ''
  const shouldShowContactInfo = hasPhone || hasEmail || hasOfficeAddress

  return (
    <footer className="mt-auto border-t border-border bg-black text-white">
      <div className="container pt-12 pb-4">
        <h2 className="text-2xl font-bold">{title || defaults.title}</h2>
      </div>
      <div className="container pb-12 pt-8 grid gap-8 md:grid-cols-4">
        {/* Content */}
        {richText && (
          <div className="md:col-span-2">
            <RichText className="mb-0" data={richText} enableGutter={false} />
          </div>
        )}

        {/* Quick Links */}
        {navItems && navItems.length > 0 && (
          <div className="space-y-6 mx-auto">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {navItems?.map((item) => (
                <li key={item.id}>
                  <CMSLink {...item.link} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Contact Information */}
        {shouldShowContactInfo && (
          <div className="space-y-6 ml-auto">
            <h3 className="text-lg font-semibold">Reach us at:</h3>
            <div className="space-y-4 text-sm">
              {/* Email */}
              {email && (
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5 text-white/80" />
                  <div>
                    <p className="font-semibold">EMAIL</p>
                    <p>
                      <a href={`mailto:${email}`} className="hover:underline">
                        {email}
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {/* Phone Number */}
              {phone && (
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 text-white/80" />
                  <div>
                    <p className="font-semibold">PHONE NUMBER</p>
                    <p>
                      <a href={`tel:${phone}`} className="hover:underline">
                        {phone}
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {/* Office Address */}
              {officeAddress?.street && officeAddress?.suburb && officeAddress?.state && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-white/80" />
                  <div>
                    <p className="font-semibold">OFFICE</p>
                    <p>{officeAddress?.street}</p>
                    <p>
                      {officeAddress?.suburb} {officeAddress?.state} {officeAddress?.postcode},{' '}
                      {officeAddress?.country}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-white/10 mt-8 py-6 text-center text-sm text-gray-400 flex justify-between container">
        <p>
          Copyright © {new Date().getFullYear()}
          {privacyPolicyUrl && privacyPolicyUrl.trim() !== '' && (
            <>
              {' '}
              | <Link href={privacyPolicyUrl}>Privacy Policy</Link>
            </>
          )}
        </p>
        <p className="mt-1 font-semibold text-white">{companyTagline || defaults.companyTagline}</p>
      </div>
    </footer>
  )
}
