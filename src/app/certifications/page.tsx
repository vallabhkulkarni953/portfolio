import type { Metadata } from 'next';
import { CertificationsClient } from '@/src/components/views/CertificationsClient';

const siteUrl = 'https://vallabhkulkarni.com';

export const metadata: Metadata = {
  title: 'Verified Technical Certifications | Workato Pro & Google Cloud AI',
  description: 'Official technical certifications for Vallabh Kulkarni: Workato Certified Technical Developer, Workato Automation Pro I-III, Google Cloud Generative AI, HackerRank C++/Python.',
  alternates: {
    canonical: `${siteUrl}/certifications`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/certifications`,
    title: 'Verified Technical Certifications | Vallabh Kulkarni',
    description: 'Workato Technical Developer, Google Cloud Generative AI, and software engineering credentials.',
    siteName: 'Vallabh Kulkarni Portfolio',
    images: [
      {
        url: `${siteUrl}/assets/vallabh-kulkarni.jpg`,
        width: 1200,
        height: 630,
        alt: 'Vallabh Kulkarni - Technical Certifications',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verified Technical Certifications | Vallabh Kulkarni',
    description: 'Workato Technical Developer, Google Cloud Generative AI, and software engineering credentials.',
    images: [`${siteUrl}/assets/vallabh-kulkarni.jpg`],
  },
};

export default function Page() {
  return <CertificationsClient />;
}
