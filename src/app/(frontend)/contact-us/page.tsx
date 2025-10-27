import config from '@payload-config'
import { getPayload } from 'payload'
import PageClient from './page.client'

export default async function Page() {
  const payload = await getPayload({ config })
  const contactData = await payload.findGlobal({
    slug: 'contact',
    depth: 1,
  })
  console.log('🚀 ~ page.tsx:11 ~ Page ~ contactData:', contactData)

  return (
    <main className="container my-16">
      <PageClient />
      {/* Hero section */}
      contact page
    </main>
  )
}
