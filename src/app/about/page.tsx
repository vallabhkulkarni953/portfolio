"use client";

import { PageTransition } from '@/src/components/PageTransition';
import { Briefcase, Users } from 'lucide-react';

export default function About() {
  const experienceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Role',
          roleName: 'Associate Software Engineer',
          startDate: '2024-08',
          worksFor: {
            '@type': 'Organization',
            name: 'OneSolve'
          }
        }
      }
    ]
  };

  const experiences = [
    {
      company: 'OneSolve',
      role: 'Associate Software Engineer',
      period: 'Aug 2024 – Present',
      location: 'California, USA (Remote)',
      highlights: [
        'Promoted within 12 months for technical excellence and client execution',
        'Eliminated 25+ hours of monthly maintenance overhead via custom SDK connectors',
        'Reduced order processing cycle times by 30% across 40+ production workflows',
        'Resolved 10+ critical production issues spanning Salesforce, NetSuite, and LogiSense',
        'Built AI-powered response classification platforms using Gemini API',
        'Partnered with Silicon Valley enterprise clients including Fastly and Dandy'
      ]
    },
    {
      company: 'OneSolve',
      role: 'Software Engineer Intern',
      period: 'Nov 2023 – Aug 2024',
      location: 'California, USA (Remote)',
      highlights: [
        'Earned all 4 Workato certifications (Pro I, II, III & Technical Developer)',
        'Built LLM-powered automation pipelines for enterprise clients',
        'Developed Salesbot automation platform standardizing outreach'
      ]
    },
    {
      company: 'MediMaze Solutions',
      role: 'Data Science Intern',
      period: 'Jun 2023 – Oct 2023',
      location: 'Pune, India',
      highlights: [
        'Developed medical imaging deep learning solutions working with DICOM images',
        'Improved model diagnostic classification accuracy by 15%'
      ]
    }
  ];

  return (
    <PageTransition>
      {/* Native JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceSchema) }}
      />

      {/* Story Section */}
      <section className="pt-16 pb-20 px-6 max-w-4xl mx-auto space-y-8">
        <div>
          <p className="font-mono text-accent text-xs mb-3 font-semibold">&gt; whoami</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
            Beyond Writing Code
          </h1>
        </div>

        <div className="glass-panel p-8 md:p-10 rounded-2xl space-y-6 text-secondary text-base md:text-lg leading-relaxed">
          <p className="text-2xl font-bold text-primary gradient-text">
            Hello, I'm Vallabh Kulkarni.
          </p>
          <p>
            I am an Associate Software Engineer with expertise spanning
            <span className="text-primary font-semibold"> Enterprise Automation</span>,
            <span className="text-primary font-semibold"> AI Engineering</span>,
            <span className="text-primary font-semibold"> Cloud Data Pipelines</span>, and
            <span className="text-primary font-semibold"> Software Architecture</span>.
          </p>
          <p>
            Over the past few years, I have worked on mission-critical enterprise systems
            involving Salesforce, Workato, AWS S3/IAM, BigQuery, Gemini AI, LogiSense, and NetSuite.
          </p>
          
          <div className="pl-6 border-l-2 border-accent my-8 py-3 bg-accent/5 rounded-r-xl">
            <p className="font-semibold text-lg text-primary">
              My engineering philosophy: Design resilient, zero-data-loss solutions that eliminate manual operational overhead and drive measurable ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-surface/40 border-y border-border/80">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-16">
            <Briefcase size={22} className="text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">
              Career Experience
            </h2>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent/50 before:via-border before:to-transparent">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-surface shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-lg group-hover:border-accent transition-colors">
                  <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
                </div>

                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl hover:border-accent/40 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="font-bold text-xl text-primary group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-mono text-xs mt-1 font-medium">
                        {exp.company} <span className="text-tertiary">({exp.location})</span>
                      </p>
                    </div>
                    <span className="text-xs font-mono text-secondary bg-background border border-border px-2.5 py-1 rounded-md w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-secondary text-xs md:text-sm"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Activities */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <Users size={22} className="text-accent" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">
            Leadership & Campus Activities
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            'Design Head, PCCOE ACM Student Chapter',
            'Social Media Coordinator & Tech Communicator',
            'Creator & Host of CESA Talks Podcast',
            'National Level Event Coordinator'
          ].map((role, i) => (
            <div
              key={i}
              className="glass-panel p-6 rounded-2xl flex items-center gap-4 hover:border-accent/40 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center shrink-0 font-mono text-accent font-bold text-sm">
                0{i + 1}
              </div>
              <span className="font-medium text-primary text-sm md:text-base">{role}</span>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}