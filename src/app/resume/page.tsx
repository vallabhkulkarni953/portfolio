import type { Metadata } from 'next';
import { ResumeClient } from '@/src/components/views/ResumeClient';

const siteUrl = 'https://vallabhkulkarni.com';

export const metadata: Metadata = {
  title: 'Resume & Technical Background | Vallabh Kulkarni',
  description: 'Read and download the official resume of Vallabh Kulkarni, Associate Software Engineer at OneSolve. Highlighting enterprise achievements, skills, and education.',
  alternates: {
    canonical: `${siteUrl}/resume`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/resume`,
    title: 'Resume | Vallabh Kulkarni - Software Engineer',
    description: 'Read and download the official resume of Vallabh Kulkarni. Skills, Workato certifications, experience, and education.',
    siteName: 'Vallabh Kulkarni Portfolio',
    images: [
      {
        url: `${siteUrl}/assets/vallabh-kulkarni.jpg`,
        width: 1200,
        height: 630,
        alt: 'Vallabh Kulkarni - Resume',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume | Vallabh Kulkarni - Software Engineer',
    description: 'Read and download the official resume of Vallabh Kulkarni.',
    images: [`${siteUrl}/assets/vallabh-kulkarni.jpg`],
  },
};

export default function Page() {
  return <ResumeClient />;
}
