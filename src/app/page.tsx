"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, Calendar, Zap, Shield, Cpu, Sparkles, Workflow } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { AvailabilityBadge } from '../components/AvailabilityBadge';
import { TerminalWidget } from '../components/TerminalWidget';

export default function Home() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vallabh Kulkarni',
    jobTitle: 'Associate Software Engineer',
    url: 'https://vallabhkulkarni.com',
    sameAs: ['https://linkedin.com/in/vallabhkul953', 'https://github.com/vallabhkulkarni953']
  };

  return (
    <PageTransition>
      {/* Native JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <AvailabilityBadge />
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                I build <span className="gradient-text-accent">intelligent systems</span> that scale.
              </h1>
              
              <p className="text-lg md:text-xl text-secondary font-normal leading-relaxed max-w-2xl">
                Vallabh Kulkarni is an Associate Software Engineer who builds scalable enterprise automations, AI systems, and cloud data pipelines for Silicon Valley tech companies and growth enterprises.
              </p>
            </div>

            <p className="text-sm md:text-base text-secondary leading-relaxed max-w-2xl">
              Architecting production integrations connecting CRM, ERP, and LLMs for Silicon Valley clients. Proven impact reducing pipeline execution times by <span className="text-accent font-semibold">87%</span> and saving <span className="text-accent font-semibold">25+ hours/month</span> of engineering overhead.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs md:text-sm">
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 bg-accent text-background px-6 py-3 rounded-lg font-bold hover:bg-accent-light transition-all shadow-lg shadow-accent/20"
              >
                Explore Projects <ArrowRight size={16} />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-2 bg-surface border border-border text-primary px-6 py-3 rounded-lg font-medium hover:border-accent/50 hover:bg-surface-hover transition-all"
              >
                Read Resume <Download size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-secondary px-4 py-3 font-medium hover:text-accent transition-colors"
              >
                Get in Touch <Calendar size={16} />
              </Link>
            </div>
          </div>

          {/* Headshot Card */}
          <div className="w-72 sm:w-80 lg:w-96 shrink-0">
            <div className="relative p-2 rounded-3xl bg-gradient-to-b from-accent/30 via-border to-transparent shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl bg-surface aspect-square border border-border">
                <Image
                  src="/assets/vallabh-kulkarni.jpg"
                  alt="Vallabh Kulkarni - Associate Software Engineer"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 288px, 384px"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 p-3 rounded-xl bg-surface/90 border border-border backdrop-blur-md shadow-xl flex items-center gap-2 font-mono text-xs">
                <Zap size={14} className="text-accent" />
                <span className="text-primary font-semibold">4x Workato Pro</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Terminal Playground Section */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="font-mono text-accent text-xs mb-1">&gt; terminal_playground.sh</p>
            <h2 className="text-2xl font-bold tracking-tight text-primary">How can you interact with Vallabh's profile via CLI?</h2>
          </div>
          <span className="hidden sm:inline-block font-mono text-xs text-tertiary">Type commands or click quick options</span>
        </div>
        <TerminalWidget />
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 bg-surface/60 border-y border-border/80 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center md:text-left">
            <p className="font-mono text-accent text-xs mb-2">&gt; quantified_impact.log</p>
            <h2 className="text-3xl font-bold tracking-tight text-primary">What measurable impact have these enterprise integrations delivered?</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-background/80 border border-border hover:border-accent/40 transition-all space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent tracking-tight font-mono">
                <AnimatedCounter value={87} suffix="%" />
              </div>
              <p className="text-xs font-mono text-secondary uppercase tracking-wider font-medium">
                Faster Data Pipelines
              </p>
              <p className="text-[11px] text-tertiary">SQL query optimization & self-joins</p>
            </div>

            <div className="p-6 rounded-2xl bg-background/80 border border-border hover:border-accent/40 transition-all space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent tracking-tight font-mono">
                <AnimatedCounter value={25} suffix="+" />
              </div>
              <p className="text-xs font-mono text-secondary uppercase tracking-wider font-medium">
                Hours Saved Monthly
              </p>
              <p className="text-[11px] text-tertiary">Saved via custom SDK connectors</p>
            </div>

            <div className="p-6 rounded-2xl bg-background/80 border border-border hover:border-accent/40 transition-all space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent tracking-tight font-mono">
                <AnimatedCounter value={30} suffix="%" />
              </div>
              <p className="text-xs font-mono text-secondary uppercase tracking-wider font-medium">
                Faster Order Processing
              </p>
              <p className="text-[11px] text-tertiary">Modular O2C connector architecture</p>
            </div>

            <div className="p-6 rounded-2xl bg-background/80 border border-border hover:border-accent/40 transition-all space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent tracking-tight font-mono">
                <AnimatedCounter value={250} suffix="+" />
              </div>
              <p className="text-xs font-mono text-secondary uppercase tracking-wider font-medium">
                LeetCode Solved
              </p>
              <p className="text-[11px] text-tertiary">Data structures & algorithms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-accent text-xs mb-3">&gt; core_competencies.sh</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
            Engineering Disciplines & Focus
          </h2>
          <p className="text-base md:text-lg text-secondary max-w-2xl">
            Building robust enterprise bridges connecting CRM, ERP, BigQuery, AWS, and Gemini LLMs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <Workflow className="text-accent" size={24} />,
              title: 'Enterprise Automation',
              desc: 'Designing modular Workato SDK connectors, webhook triggers, and zero-data-loss migration pipelines across Salesforce, NetSuite, and LogiSense.'
            },
            {
              icon: <Sparkles className="text-accent" size={24} />,
              title: 'AI Engineering & LLMs',
              desc: 'Applying Gemini API, structured prompt engineering, and automated classification engines to triage inbound communications without manual effort.'
            },
            {
              icon: <Cpu className="text-accent" size={24} />,
              title: 'Cloud Data Pipelines',
              desc: 'Architecting secure AWS IAM roles, S3 ingestion buckets, BigQuery historical snapshot workflows, and Looker/Hex reporting pipelines.'
            },
            {
              icon: <Shield className="text-accent" size={24} />,
              title: 'Production Release Management',
              desc: 'Managing major production deployments with rollback safeguards, rate-limit retry logic (429 handling), and continuous monitoring.'
            }
          ].map((card, i) => (
            <div
              key={i}
              className="glass-panel p-8 rounded-2xl group hover:border-accent/40"
            >
              <div className="p-3 rounded-xl bg-surface border border-border w-fit mb-4 group-hover:border-accent/40 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-accent transition-colors">
                {card.title}
              </h3>
              <p className="text-secondary leading-relaxed text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Teaser CTA */}
      <section className="py-24 bg-surface/60 border-t border-border/80 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-50 pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
            Ready to scale your automation & AI systems?
          </h2>
          <p className="text-base md:text-lg text-secondary max-w-xl mx-auto leading-relaxed">
            Explore detailed case studies, benchmark metrics, or get in touch for custom engineering collaborations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs md:text-sm">
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 bg-accent text-background px-8 py-4 rounded-lg font-bold hover:bg-accent-light transition-all shadow-lg shadow-accent/20"
            >
              Explore All Projects <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-background border border-border text-primary px-8 py-4 rounded-lg font-medium hover:border-accent transition-all"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}