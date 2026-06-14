import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { ArrowUpRight, Code2, Cpu, Workflow, Cloud, Wrench } from 'lucide-react';
import { SEO } from '../components/SEO';
export function Work() {
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
    {
      '@type': 'SoftwareApplication',
      name: 'Fastly Order-to-Cash Pipeline Optimization',
      applicationCategory: 'BusinessApplication'
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Dandy AI SMS Training Automation',
      applicationCategory: 'BusinessApplication'
    }]

  };
  const projects = [
  {
    title: 'Fastly Order-to-Cash Pipeline Optimization',
    challenge:
    'Manual order processing and disjointed systems were causing significant delays and operational overhead in the order-to-cash lifecycle.',
    solution:
    'Architected and deployed an automated pipeline integrating Salesforce, NetSuite, and LogiSense via Workato, utilizing custom REST API actions.',
    tech: ['Workato', 'Salesforce', 'NetSuite', 'LogiSense', 'REST APIs'],
    impact:
    'Streamlined the entire billing and provisioning lifecycle, drastically reducing manual intervention and accelerating revenue recognition.',
    results: [
    '25+ hours saved monthly',
    '20+ reusable API actions',
    '40+ workflows optimized',
    '30% faster processing']

  },
  {
    title: 'Dandy AI SMS Training Automation',
    challenge:
    'Training communications were being sent manually or missed entirely due to timezone complexities and lack of intelligent classification.',
    solution:
    'Built an intelligent automation system using Gemini AI to classify messages and Workato to orchestrate timezone-aware SMS delivery via SendBlue.',
    tech: ['Gemini AI', 'Salesforce', 'Workato', 'SendBlue', 'Webhooks'],
    impact:
    'Eliminated missed communications and manual scheduling, ensuring timely, context-aware training delivery across global timezones.',
    results: [
    'Automated classification',
    'Zero missed sends',
    'Timezone-aware automation',
    'Full workflow migration']

  },
  {
    title: 'Forma AI Compensation Pipeline',
    challenge:
    'Legacy compensation data pipelines were slow, taking 5 minutes per run, and lacked proper governance across cloud environments.',
    solution:
    'Redesigned the data architecture using BigQuery and AWS S3, orchestrated via Workato to securely process data from Salesforce and UKG.',
    tech: ['BigQuery', 'AWS S3', 'Salesforce', 'UKG', 'Workato'],
    impact:
    'Delivered a highly secure, multi-cloud architecture that processes compensation data at a fraction of the previous time with enhanced governance.',
    results: [
    '87% faster execution',
    'Reduced runtime from 5 minutes to 40 seconds',
    'Secure multi-cloud architecture',
    'Enhanced governance']

  },
  {
    title: 'Salesbot',
    challenge:
    'Sales representatives were losing valuable time context-switching between Slack and Salesforce to look up CRM records.',
    solution:
    'Developed a custom Slack integration powered by Workato that allows sales teams to query and update Salesforce records directly from chat.',
    tech: ['Salesforce', 'Slack', 'Workato'],
    impact:
    'Significantly reduced friction in the sales process, allowing reps to focus on selling rather than navigating CRM interfaces.',
    results: [
    'Reduced CRM lookup time',
    'Improved sales productivity',
    'Automated CRM workflows']

  }];

  const skills = [
  {
    category: 'Software Engineering',
    icon: <Code2 size={20} />,
    items: ['Python', 'SQL', 'C++', 'REST APIs', 'System Design', 'OOP']
  },
  {
    category: 'AI & Machine Learning',
    icon: <Cpu size={20} />,
    items: [
    'Deep Learning',
    'Machine Learning',
    'Prompt Engineering',
    'Gemini AI',
    'vLLM',
    'Deepeval']

  },
  {
    category: 'Automation',
    icon: <Workflow size={20} />,
    items: ['Workato', 'SDK Development', 'Salesforce', 'Webhooks', 'MCP']
  },
  {
    category: 'Cloud',
    icon: <Cloud size={20} />,
    items: ['AWS', 'BigQuery', 'Amazon S3', 'IAM', 'Google Cloud']
  },
  {
    category: 'Tools',
    icon: <Wrench size={20} />,
    items: ['Git', 'VS Code', 'Postman', 'Jupyter Notebook', 'Claude AI']
  }];

  const certs = [
  'Workato Automation Pro I',
  'Workato Automation Pro II',
  'Workato Automation Pro III',
  'Workato Technical Developer',
  'Google Cloud Generative AI Track',
  'ChatGPT Prompt Engineering for Developers',
  'Microsoft Career Essentials in Software Development',
  'Python Bootcamp'];

  return (
    <PageTransition>
      <SEO schema={projectsSchema} />

      {/* Header */}
      <section className="pt-24 pb-16 px-6 max-w-6xl mx-auto border-b border-border">
        <p className="font-mono text-accent text-sm mb-4">
          &gt; ls -la ./projects
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6">
          Selected Work
        </h1>
        <p className="text-xl text-secondary max-w-2xl">
          A showcase of enterprise systems, AI integrations, and automated
          pipelines designed for scale and impact.
        </p>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-24">
        {projects.map((project, idx) =>
        <div key={idx} className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6 sticky top-24">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) =>
              <span
                key={t}
                className="px-2 py-1 bg-surface border border-border text-secondary text-xs font-mono rounded-md">
                
                    {t}
                  </span>
              )}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-secondary mb-3">
                    // The Challenge
                  </h3>
                  <p className="text-lg leading-relaxed text-primary">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-secondary mb-3">
                    // The Solution
                  </h3>
                  <p className="text-lg leading-relaxed text-primary">
                    {project.solution}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-secondary mb-3">
                    // Business Impact
                  </h3>
                  <p className="text-lg leading-relaxed text-primary">
                    {project.impact}
                  </p>
                </div>
              </div>

              <div className="bg-surface rounded-xl p-8 border border-border">
                <h3 className="text-xs font-mono uppercase tracking-wider text-secondary mb-6">
                  Key Results
                </h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {project.results.map((res, i) =>
                <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="font-medium text-primary text-sm">
                        {res}
                      </span>
                    </li>
                )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Skills */}
      <section className="py-24 bg-background border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-mono text-accent text-sm mb-4">
            &gt; cat skills.json
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-primary mb-12">
            Technical Arsenal
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) =>
            <div
              key={idx}
              className="bg-surface p-8 rounded-xl border border-border hover:border-accent/50 transition-colors">
              
                <div className="flex items-center gap-3 mb-6 text-primary">
                  {skillGroup.icon}
                  <h3 className="font-semibold text-lg">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) =>
                <span
                  key={item}
                  className="px-2 py-1 bg-background border border-border text-secondary text-xs font-mono rounded-md hover:border-accent hover:text-accent transition-colors cursor-default">
                  
                      {item}
                    </span>
                )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Certifications & Research */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-primary mb-8">
            Certifications
          </h2>
          <div className="flex flex-col gap-3">
            {certs.map((cert, i) =>
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-xl border border-border bg-surface hover:border-accent/50 transition-colors group">
              
                <span className="font-mono text-sm text-primary group-hover:text-accent transition-colors">
                  {cert}
                </span>
                <ArrowUpRight
                size={16}
                className="text-secondary group-hover:text-accent transition-colors" />
              
              </div>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-primary mb-8">
            Research & Publications
          </h2>
          <div className="p-8 rounded-xl border border-border bg-surface">
            <h3 className="text-xl font-bold text-primary mb-2">
              Big Data: Privacy and Security Aspects
            </h3>
            <p className="text-secondary mb-6 text-sm">
              Published in: International Research Journal of Engineering and
              Technology
            </p>
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-secondary">
                // Key Topics
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                'Data Security',
                'Privacy',
                'Big Data Governance',
                'Enterprise Data Protection'].
                map((topic) =>
                <span
                  key={topic}
                  className="px-2 py-1 bg-background border border-border text-secondary text-xs font-mono rounded-md">
                  
                    {topic}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>);

}