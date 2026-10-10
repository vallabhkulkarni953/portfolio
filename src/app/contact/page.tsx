import type { Metadata } from 'next';
import { ContactClient } from '@/src/components/views/ContactClient';

const siteUrl = 'https://vallabhkulkarni.com';

export const metadata: Metadata = {
  title: 'Contact Vallabh Kulkarni | Software & Automation Engineering',
  description: 'Get in touch with Vallabh Kulkarni for enterprise automation engineering, custom Workato SDK connector development, Gemini AI integration, or technical roles.',
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/contact`,
    title: 'Contact Vallabh Kulkarni | Software Engineer',
    description: 'Get in touch for enterprise automation projects, custom SDK connectors, or AI systems engineering.',
    siteName: 'Vallabh Kulkarni Portfolio',
    images: [
      {
        url: `${siteUrl}/assets/vallabh-kulkarni.jpg`,
        width: 1200,
        height: 630,
        alt: 'Vallabh Kulkarni - Contact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Vallabh Kulkarni | Software Engineer',
    description: 'Get in touch for enterprise automation projects, custom SDK connectors, or AI systems engineering.',
    images: [`${siteUrl}/assets/vallabh-kulkarni.jpg`],
  },
};

export default function Page() {
  return <ContactClient />;
}