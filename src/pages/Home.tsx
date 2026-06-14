import { Link } from 'react-router-dom';
import { ArrowRight, Download, Calendar } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { SEO } from '../components/SEO';
import profileImage from '../assets/vallabh-kulkarni.jfif';

export function Home() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vallabh Kulkarni',
    jobTitle: 'Associate Software Engineer',
    url: 'https://vallabhkulkarni.com',
    sameAs: ['https://linkedin.com', 'https://github.com']
  };

  return (
    <PageTransition>
      <SEO schema={personSchema} />

      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-32 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-accent text-sm md:text-base">
                &gt; Hello, world. I'm Vallabh.
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-primary">
                I build intelligent systems that scale.
              </h1>
              <p className="text-xl md:text-2xl text-secondary font-medium leading-snug max-w-2xl">
                Software Engineer focused on Enterprise Automation, AI-Powered
                Solutions, and Data Pipelines.
              </p>
            </div>

            <p className="text-base md:text-lg text-secondary leading-relaxed max-w-2xl">
              I enjoy solving complex engineering challenges, optimizing
              workflows, and building scalable products. Here's a look at what
              I've built, what I've learned, and what I'm working on.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 font-mono text-sm">
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 bg-primary text-background px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto">
                View Projects <ArrowRight size={16} />
              </Link>
              <Link
                to="/resume"
                className="inline-flex items-center justify-center gap-2 bg-surface border border-border text-primary px-6 py-3 rounded-md font-medium hover:bg-border transition-colors w-full sm:w-auto">
                Read Resume <Download size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 text-secondary px-6 py-3 font-medium hover:text-accent transition-colors w-full sm:w-auto">
                Get in Touch <Calendar size={16} />
              </Link>
            </div>
          </div>

          {/* Headshot */}
          <div className="w-72 md:w-96 shrink-0">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface">
              <img
                src={profileImage}
                alt="Vallabh Kulkarni"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          {/* ✅ MOBILE RE-SPACING APPLIED HERE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary tracking-tight font-mono">
                <AnimatedCounter value={25} suffix="+" />
              </div>
              <p className="text-xs font-mono text-secondary uppercase tracking-wider">
                Hours Saved Monthly
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary tracking-tight font-mono">
                <AnimatedCounter value={87} suffix="%" />
              </div>
              <p className="text-xs font-mono text-secondary uppercase tracking-wider">
                Faster Data Pipelines
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary tracking-tight font-mono">
                <AnimatedCounter value={30} suffix="%" />
              </div>
              <p className="text-xs font-mono text-secondary uppercase tracking-wider">
                Faster Order Processing
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary tracking-tight font-mono">
                <AnimatedCounter value={250} suffix="+" />
              </div>
              <p className="text-xs font-mono text-secondary uppercase tracking-wider">
                LeetCode Problems
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary tracking-tight font-mono">
                <AnimatedCounter value={4} />
              </div>
              <p className="text-xs font-mono text-secondary uppercase tracking-wider">
                Workato Certifications
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary tracking-tight font-mono">
                <AnimatedCounter value={1} />
              </div>
              <p className="text-xs font-mono text-secondary uppercase tracking-wider">
                Published Research
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary tracking-tight font-mono">
                <AnimatedCounter value={9.05} decimals={2} />
              </div>
              <p className="text-xs font-mono text-secondary uppercase tracking-wider">
                CGPA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-accent text-sm mb-4">
            &gt; core_competencies.sh
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
            What I Do
          </h2>
          <p className="text-lg text-secondary max-w-2xl">
            My technical focus lies at the intersection of software engineering,
            artificial intelligence, and enterprise automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Enterprise Automation',
              desc: 'Building scalable integrations connecting critical business systems.'
            },
            {
              title: 'AI Engineering',
              desc: 'Creating intelligent workflows powered by modern AI technologies.'
            },
            {
              title: 'Problem Solving',
              desc: 'Identifying bottlenecks and delivering measurable improvements.'
            },
            {
              title: 'System Design',
              desc: 'Architecting robust, secure, and scalable software solutions.'
            }
          ].map((card, i) => (
            <div
              key={i}
              className="p-8 rounded-xl border border-border bg-surface hover:border-accent/50 transition-colors group">
              <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors">
                {card.title}
              </h3>
              <p className="text-secondary leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Teaser CTA */}
      <section className="py-24 bg-surface border-t border-border text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
            Dive into the code.
          </h2>
          <p className="text-lg text-secondary max-w-xl mx-auto">
            Explore the systems, pipelines, and automations I've built to solve
            complex engineering challenges.
          </p>
          <Link
            to="/work"
            className="inline-flex items-center justify-center gap-2 bg-primary text-background px-8 py-4 rounded-md font-mono text-sm font-medium hover:bg-primary/90 transition-colors">
            Explore Projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}