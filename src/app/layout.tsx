import React from 'react';
import { Inter, JetBrains_Mono } from "next/font/google";
import { NavigationShell } from '../components/NavigationShell';
import "./globals.css";

export const metadata = {
  title: {
    default: "Vallabh Kulkarni | Associate Software Engineer",
    template: "%s | Vallabh Kulkarni"
  },
  description: "Associate Software Engineer specializing in Enterprise Automation, AI Engineering, and Cloud Data Pipelines.",
  keywords: ["Vallabh Kulkarni", "Software Engineer", "Automation Engineer", "Workato Expert", "AI Engineer India"],
  robots: {
    index: true,
    follow: true
  }
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
  return (
    <html lang="en">
      <body className="bg-background text-primary antialiased">
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