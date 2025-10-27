import type { Form, Media } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'
import { MediaName } from './media'

type ContactArgs = {
  contactForm: Form
  mediaMap: Map<MediaName | null | undefined, Media>
}

export const contact: (args: ContactArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  contactForm,
  mediaMap,
}) => {
  return {
    slug: 'contact',
    _status: 'published',
    hero: {
      type: 'highImpact',

      richText: {
        root: {
          type: 'root',
          format: '',
          indent: 0,
          version: 1,

          children: [
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'CONTACT',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: null,
              textStyle: '',
              textFormat: 0,
            },
            {
              tag: 'h1',
              type: 'heading',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'Get In Touch',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: null,
            },
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'Looking for trusted real estate advice?',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: null,
              textStyle: '',
              textFormat: 0,
            },
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'The DN Realty team is just a message away!',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: null,
              textStyle: '',
              textFormat: 0,
            },
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'We’re committed to providing reliable, friendly service for all your buying, selling, or leasing needs.',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: null,
              textStyle: '',
              textFormat: 0,
            },
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,

              children: [
                {
                  mode: 'normal',
                  text: 'Reach out now and experience the difference of working with true professionals. ',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: null,
              textStyle: '',
              textFormat: 0,
            },
          ],
          direction: null,
        },
      },
      links: [],

      media: mediaMap.get('contact-hero-banner.jpg')?.id as string,
    },
    layout: [
      {
        blockType: 'content',
        blockName: 'Contact Form Section',
        columns: [
          {
            size: 'half',
            richText: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Contact',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    tag: 'h1',
                    type: 'heading',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Send a Message',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Ready to take the next step in your real estate journey?',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'The DN Realty team is here to assist you with any service you require. Reach out to us with confidence, knowing you’re in good hands. We’re not just about transactions; we’re about building lasting relationships and ensuring your real estate experience is as seamless and successful as possible.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Send us a message today – let’s start making your property dreams a reality!',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: null,
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: null,
              },
            },
            media: null,
            enableLink: true,

            link: {
              type: 'custom',
              newTab: null,
              url: 'tel:+61295192200',
              label: 'Schedule a consultation',
              appearance: 'destructive',
            },
          },
          {
            size: 'half',
            richText: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'block',
                    fields: {
                      form: contactForm.id,
                      blockName: 'Contact Form',
                      blockType: 'formBlock',
                      enableIntro: false,
                    },
                    version: 1,
                  },
                ],
                direction: null,
              },
            },
          },
        ],
      },
    ],
    title: 'Contact',

    meta: {
      title: 'Contact',
      description: 'Get in touch with DN Realty',
      image: null,
    },
  }
}
