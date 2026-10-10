import type { Metadata } from 'next';
import { ComparisonClient } from '@/src/components/views/ComparisonClient';

const siteUrl = 'https://vallabhkulkarni.com';

export const metadata: Metadata = {
  title: 'Custom SDK Architecture vs Traditional Options | Integration Comparison',
  description: 'In-depth technical comparison evaluating custom Workato SDK connector architecture versus pre-built generic HTTP connectors and legacy agency retainers.',
  alternates: {
    canonical: `${siteUrl}/comparison`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/comparison`,
    title: 'Custom SDK Architecture vs Alternatives | Vallabh Kulkarni',
    description: 'Technical evaluation of custom SDK architecture vs generic connectors and agency retainers.',
    siteName: 'Vallabh Kulkarni Portfolio',
    images: [
      {
        url: `${siteUrl}/assets/vallabh-kulkarni.jpg`,
        width: 1200,
        height: 630,
        alt: 'Vallabh Kulkarni - Integration Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom SDK Architecture vs Alternatives | Vallabh Kulkarni',
    description: 'Technical evaluation of custom SDK architecture vs generic connectors and agency retainers.',
    images: [`${siteUrl}/assets/vallabh-kulkarni.jpg`],
  },
};

export default function Page() {
  return <ComparisonClient />;
}
