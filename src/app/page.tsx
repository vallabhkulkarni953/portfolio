import type { Metadata } from 'next';
import { HomeClient } from '@/src/components/views/HomeClient';

const siteUrl = 'https://vallabhkulkarni.com';

export const metadata: Metadata = {
  title: 'Vallabh Kulkarni | Associate Software Engineer & AI Systems Architect',
  description: 'Associate Software Engineer specializing in Enterprise Automation, AI Systems Architecture, Workato SDK Connectors, and scalable Cloud Data Pipelines.',
  keywords: [
    'Vallabh Kulkarni',
    'Software Engineer',
    'Enterprise Automation Engineer',
    'AI Engineer',
    'Workato Developer',
    'Salesforce Integration Engineer',
    'Data Pipeline Engineer',
    'Python Developer India',
    'OneSolve Engineer'
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Vallabh Kulkarni | Associate Software Engineer & AI Systems Architect',
    description: 'Enterprise backend integrations, high-volume data pipelines, and custom automation architectures delivered by Vallabh Kulkarni.',
    siteName: 'Vallabh Kulkarni Portfolio',
    images: [
      {
        url: `${siteUrl}/assets/vallabh-kulkarni.jpg`,
        width: 1200,
        height: 630,
        alt: 'Vallabh Kulkarni - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vallabh Kulkarni | Associate Software Engineer & AI Systems Architect',
    description: 'Enterprise backend integrations, high-volume data pipelines, and custom AI automation architectures.',
    images: [`${siteUrl}/assets/vallabh-kulkarni.jpg`],
    creator: '@vallabhkul953',
  },
};

export default function Page() {
  return <HomeClient />;
}