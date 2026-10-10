import type { Metadata } from 'next';
import { AboutClient } from '@/src/components/views/AboutClient';

const siteUrl = 'https://vallabhkulkarni.com';

export const metadata: Metadata = {
  title: 'About Vallabh Kulkarni | Software Engineering & Background',
  description: "Learn about Vallabh Kulkarni's software engineering career at OneSolve, Workato certifications, background, and enterprise integration experience.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/about`,
    title: 'About Vallabh Kulkarni | Associate Software Engineer',
    description: 'Software engineering career, enterprise automation background, and technical leadership of Vallabh Kulkarni.',
    siteName: 'Vallabh Kulkarni Portfolio',
    images: [
      {
        url: `${siteUrl}/assets/vallabh-kulkarni.jpg`,
        width: 1200,
        height: 630,
        alt: 'Vallabh Kulkarni - About & Experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Vallabh Kulkarni | Associate Software Engineer',
    description: 'Software engineering career, enterprise automation background, and technical leadership.',
    images: [`${siteUrl}/assets/vallabh-kulkarni.jpg`],
  },
};

export default function Page() {
  return <AboutClient />;
}