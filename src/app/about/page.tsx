"use client";

import { PageTransition } from '@/src/components/PageTransition';

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
      highlights: [
        'Promoted within 12 months',
        'Eliminated 25+ hours of monthly maintenance overhead',
        'Reduced order processing cycle times by 30%',
        'Resolved 10+ critical production issues',
        'Built AI-powered Recipe Doctor monitoring platform',
        'Worked with Silicon Valley enterprise clients'
      ]
    },
    {
      company: 'OneSolve',
      role: 'Software Engineer Intern',
      period: 'Nov 2023 – Aug 2024',
      highlights: [
        'Earned all Workato certifications',
        'Built LLM-powered automation pipelines',
        'Developed Salesbot automation platform'
      ]
    },
    {
      company: 'MediMaze Solutions',
      role: 'Data Science Intern',
      period: 'Jun 2023 – Oct 2023',
      highlights: [
        'Developed medical imaging deep learning solutions',
        'Improved model accuracy by 15%'
      ]
    }
  ];

  return (
    <PageTransition>
      {/* Native JSON-LD Structured Data Injection for Search Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceSchema) }}
      />

      {/* Story Section */}
      <section className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
        <p className="font-mono text-accent text-sm mb-4">&gt; whoami</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-12">
          Beyond Writing Code
        </h1>

        <div className="text-lg text-secondary leading-relaxed space-y-6">
          <p className="text-2xl font-medium text-primary mb-8">
            Hello, I'm Vallabh Kulkarni.
          </p>
          <p>
            I am an Associate Software Engineer with expertise spanning
            Enterprise Automation, AI Engineering, Deep Learning, Cloud Data
            Pipelines, and Software Development.
          </p>
          <p>
            Over the past few years, I have worked on mission-critical projects
            involving Salesforce, Workato, AWS, BigQuery, Gemini AI, and
            enterprise-scale integration systems.
          </p>
          <div className="pl-6 border-l-2 border-accent/50 my-8 py-2">
            <p className="font-medium text-xl text-primary">
              My focus is simple: Design solutions that reduce manual effort,
              increase reliability, improve operational efficiency, and create
              measurable business outcomes.
            </p>
          </div>
          <p>
            Whether it's building AI-powered systems, optimizing enterprise
            workflows, or solving complex engineering challenges, I enjoy
            transforming ideas into scalable products.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight text-primary mb-16">
            Experience
          </h2>

          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>

                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-border bg-background hover:border-accent/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="font-bold text-xl text-primary">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-mono text-sm mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-secondary bg-surface border border-border px-2 py-1 rounded-md w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-secondary text-sm"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/50 shrink-0" />
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

      {/* Leadership */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight text-primary mb-12">
          Building Communities Beyond Engineering
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            'Design Head, PCCOE ACM Student Chapter',
            'Social Media Coordinator',
            'Creator of CESA Talks Podcast',
            'Event Coordinator'
          ].map((role, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-border bg-surface flex items-center gap-4 hover:border-accent/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0">
                <span className="text-sm font-mono text-secondary">
                  0{i + 1}
                </span>
              </div>
              <span className="font-medium text-primary">{role}</span>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}