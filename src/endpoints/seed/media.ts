import mime from 'mime'
import fs from 'node:fs/promises'
import path from 'node:path'
import { File, RequiredDataFromCollectionSlug } from 'payload'

const mediaMetadata = [
  {
    name: 'home-hero-banner.png',
    alt: 'Home hero banner',
  },
  {
    name: 'home-intro.png',
    alt: 'Home intro image',
  },
  {
    name: 'about-intro.jpg',
    alt: 'About intro image',
  },
  {
    name: '4692-divi-way-cover.jpg',
    alt: '4692 Divi Way cover',
  },
  {
    name: 'team-hero-banner.png',
    alt: 'Team hero banner',
  },
  // Service Images
  {
    name: 'service-appraisal.png',
    alt: 'Service appraisal image',
  },
  {
    name: 'service-selling.png',
    alt: 'Service selling image',
  },
  {
    name: 'service-staging.png',
    alt: 'Service staging image',
  },
  {
    name: 'service-buying.png',
    alt: 'Service buying image',
  },
  {
    name: 'service-renting.png',
    alt: 'Service renting image',
  },
  {
    name: 'service-leasing.png',
    alt: 'Service leasing image',
  },
  {
    name: 'contact-hero-banner.jpg',
    alt: 'Contact hero banner',
  },
  {
    name: 'extra-2-se-of-12th-cover.jpg',
    alt: 'Extra 2 SE of 12th cover',
  },
  {
    name: '157-bloom-blvd-cover.jpg',
    alt: '157 Bloom Blvd cover',
  },
  {
    name: '2467-monarch-ave-unit-3-cover.jpg',
    alt: '2467 Monarch Ave Unit 3 cover',
  },
  {
    name: '22-great-western-highway-cover.jpg',
    alt: '22 Great Western Highway cover',
  },
] as const

export type MediaName = (typeof mediaMetadata)[number]['name']

const mediaAssetsPath = path.resolve('src/endpoints/seed/assets')

async function getFileByName(name: string): Promise<File> {
  const fileContent = await fs.readFile(path.join(mediaAssetsPath, name))
  return {
    name: path.basename(name) || `file-${Date.now()}`,
    data: Buffer.from(fileContent),
    mimetype: mime.getType(name) as string,
    size: fileContent.byteLength,
  }
}

/**
 * Fetches a file from a URL.
 *
 * @param url The URL of the file to fetch.
 * @returns The file.
 *
 * Note: This function has not been used and might not be needed.
 *
 */
async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: mime.getType(url) as string,
    size: data.byteLength,
  }
}

const mediaFiles = await Promise.all(
  mediaMetadata.map((m) => {
    return getFileByName(m.name)
  }),
)

export const mediaPayload: { data: RequiredDataFromCollectionSlug<'media'>; file: File }[] =
  mediaFiles.map((file, index) => {
    return {
      data: {
        alt: mediaMetadata[index].alt,
        // filename: file.name || `file-${Date.now()}`, // TODO: This might not be needed.
      },
      file: file,
    }
  })
