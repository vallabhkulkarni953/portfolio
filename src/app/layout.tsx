import React from 'react';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from "next/font/google";
import { NavigationShell } from '../components/NavigationShell';
import "./globals.css";

const siteUrl = 'https://vallabhkulkarni.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vallabh Kulkarni | Associate Software Engineer & AI Systems Architect",
    template: "%s | Vallabh Kulkarni"
  },
  description: "Associate Software Engineer specializing in Enterprise Automation, AI Systems Architecture, Workato SDK Connectors, and Cloud Data Pipelines.",
  keywords: [
    "Vallabh Kulkarni",
    "Software Engineer",
    "Enterprise Automation Engineer",
    "AI Engineer",
    "Workato Developer",
    "Salesforce Integration Engineer",
    "Data Pipeline Engineer",
    "Python Developer India",
    "OneSolve Engineer"
  ],
  authors: [{ name: "Vallabh Kulkarni", url: siteUrl }],
  creator: "Vallabh Kulkarni",
  publisher: "Vallabh Kulkarni",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
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
        url: '/assets/vallabh-kulkarni.jpg',
        width: 1200,
        height: 630,
        alt: 'Vallabh Kulkarni - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vallabh Kulkarni | Associate Software Engineer',
    description: 'Enterprise backend integrations, high-volume data pipelines, and custom AI automation architectures.',
    images: ['/assets/vallabh-kulkarni.jpg'],
    creator: '@vallabhkul953',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

const jetBrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  const globalSchemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Vallabh Kulkarni',
        jobTitle: 'Associate Software Engineer',
        url: siteUrl,
        image: `${siteUrl}/assets/vallabh-kulkarni.jpg`,
        email: 'vallabhkul953@gmail.com',
        telephone: '+919022984857',
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Pimpri Chinchwad College of Engineering (PCCOE)',
        },
        worksFor: {
          '@type': 'Organization',
          name: 'OneSolve',
          url: 'https://onesolve.io',
        },
        sameAs: [
          'https://linkedin.com/in/vallabhkul953',
          'https://github.com/vallabhkulkarni953',
        ],
        knowsAbout: [
          'Enterprise Automation',
          'Workato SDK Connectors',
          'Salesforce Integration',
          'AI Engineering & Gemini API',
          'Cloud Data Pipelines & BigQuery',
          'Python Software Engineering',
        ],
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Vallabh Kulkarni Portfolio',
        url: siteUrl,
        logo: `${siteUrl}/assets/vallabh-kulkarni.jpg`,
        description: 'Associate Software Engineer specializing in Enterprise Automation, AI Systems Architecture, Workato SDK Connectors, and Cloud Data Pipelines.',
        sameAs: [
          'https://linkedin.com/in/vallabhkul953',
          'https://github.com/vallabhkulkarni953',
        ],
      },
      {
        '@type': 'Service',
        '@id': `${siteUrl}/#service-automation`,
        name: 'Enterprise Automation & SDK Connector Development',
        provider: { '@id': `${siteUrl}/#person` },
        serviceType: 'Enterprise Software Engineering',
        description: 'Custom Workato SDK connectors, REST API integrations, rate-limit retry logic, and zero-data-loss workflow automations across Salesforce, NetSuite, and LogiSense.',
        url: `${siteUrl}/work`,
      },
      {
        '@type': 'Service',
        '@id': `${siteUrl}/#service-ai`,
        name: 'AI Engineering & LLM Workflow Automation',
        provider: { '@id': `${siteUrl}/#person` },
        serviceType: 'AI Systems Architecture',
        description: 'Applied Gemini API integration, prompt engineering, and automated communication classification engines.',
        url: `${siteUrl}/work`,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Vallabh Kulkarni Portfolio',
        description: 'Official engineering portfolio and technical case studies of Vallabh Kulkarni.',
        publisher: { '@id': `${siteUrl}/#person` },
      }
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="Markdown Profile Summary" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="Full Case Studies Markdown" />
      </head>
      <body className="bg-background text-primary antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchemaGraph) }}
        />
        <NavigationShell 
          interVariable={inter.variable} 
          monoVariable={jetBrainsMono.variable}
        >
          {children}
        </NavigationShell>
      </body>
    </html>
  );
}