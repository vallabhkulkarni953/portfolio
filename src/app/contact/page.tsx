"use client";

import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  ChevronDown,
  CheckCircle2,
  Copy,
  Check,
  Send,
  MessageSquare
} from 'lucide-react';

import { PageTransition } from '@/src/components/PageTransition';
import { LocalTimeClock } from '@/src/components/LocalTimeClock';

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

export default function Contact() {
  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success'
  >('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [website, setWebsite] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('vallabhkul953@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (website) return; // Honeypot bot prevention

    setFormStatus('submitting');

    try {
      if (!APPS_SCRIPT_URL) {
        throw new Error("Missing NEXT_PUBLIC_APPS_SCRIPT_URL environment variable.");
      }

      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Portfolio Website',
        }),
      });

      setFormStatus('success');

      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      setFormStatus('idle');
      alert('Something went wrong. Please contact me directly at vallabhkul953@gmail.com');
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is Vallabh Kulkarni?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vallabh Kulkarni is an Associate Software Engineer specializing in Enterprise Automation, AI Systems Architecture, Workato SDK Connectors, and scalable Cloud Data Pipelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'What enterprise automation platforms does Vallabh specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'He holds 4 Workato Pro certifications and specializes in Python, SQL, Salesforce, NetSuite, LogiSense, BigQuery, AWS S3/IAM, and Gemini AI integration.',
        },
      },
    ],
  };

  const faqs = [
    {
      q: 'Who is Vallabh Kulkarni?',
      a: 'Vallabh Kulkarni is an Associate Software Engineer at OneSolve specializing in Enterprise Automation, AI Engineering, custom SDK connector development, and scalable cloud data pipelines.',
    },
    {
      q: 'What enterprise platforms does Vallabh specialize in?',
      a: 'He holds 4 Workato certifications (Technical Developer, Pro I, II, III) and works extensively with Salesforce, LogiSense, NetSuite, AWS S3/IAM, BigQuery, and Gemini API.',
    },
    {
      q: 'What clients has Vallabh worked with?',
      a: 'He has engineered enterprise deployments for Silicon Valley clients including Fastly and Dandy across Order-to-Cash, compensation pipelines, and SMS AI platforms.',
    },
    {
      q: 'What is Vallabh\'s key technical achievement?',
      a: 'Achieved an 87% runtime reduction on UKG data pipelines, saved 25+ hours/month of integration maintenance via reusable SDK connectors, and accelerated Order-to-Cash processing by 30%.',
    },
    {
      q: 'How can I discuss a project or collaboration?',
      a: 'Fill out the contact form on this page, send a direct email to vallabhkul953@gmail.com, or reach out on LinkedIn.',
    },
  ];

  return (
    <PageTransition>
      {/* Native JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <div>
              <p className="font-mono text-accent text-xs mb-3 font-semibold">&gt; contact.sh</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                Let's Build Something Great Together
              </h1>
              <p className="text-base md:text-lg text-secondary leading-relaxed">
                Whether you're looking for an Enterprise Automation Engineer, AI/ML Specialist, Software Engineer, or technical collaborator, I'd love to hear from you.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <LocalTimeClock />
              <span className="text-xs font-mono text-tertiary">● Typically responds within 24h</span>
            </div>

            <div className="space-y-4 pt-2">
              <div className="glass-panel p-5 rounded-2xl flex items-center justify-between group hover:border-accent/40">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-accent group-hover:border-accent/40 transition-colors">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm">Direct Email</p>
                    <p className="text-xs text-secondary font-mono">vallabhkul953@gmail.com</p>
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg bg-background border border-border text-xs font-mono text-secondary hover:text-accent hover:border-accent/40 flex items-center gap-1.5 transition-all"
                >
                  {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>

              <a
                href="https://linkedin.com/in/vallabhkul953"
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-5 rounded-2xl flex items-center justify-between group hover:border-accent/40"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-accent group-hover:border-accent/40 transition-colors">
                    <Linkedin size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm">LinkedIn Profile</p>
                    <p className="text-xs text-secondary font-mono">linkedin.com/in/vallabhkul953</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-accent">Connect &rarr;</span>
              </a>

              <a
                href="https://github.com/vallabhkulkarni953"
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-5 rounded-2xl flex items-center justify-between group hover:border-accent/40"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-accent group-hover:border-accent/40 transition-colors">
                    <Github size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm">GitHub Profile</p>
                    <p className="text-xs text-secondary font-mono">github.com/vallabhkulkarni953</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-accent">View Repos &rarr;</span>
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="glass-panel p-8 rounded-3xl border border-border relative overflow-hidden">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-primary">Message Sent Successfully</h3>
                <p className="text-sm text-secondary max-w-sm">
                  Thank you for reaching out! Your message has been received and I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="px-6 py-2.5 rounded-lg bg-background border border-border text-xs font-mono text-primary hover:border-accent transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare size={18} className="text-accent" />
                  <h3 className="font-bold text-primary text-lg">Send a Direct Message</h3>
                </div>

                {/* Honeypot */}
                <div className="hidden">
                  <input
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block mb-2 text-xs font-mono text-secondary uppercase tracking-wider font-semibold">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 text-primary text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-xs font-mono text-secondary uppercase tracking-wider font-semibold">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 text-primary text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block mb-2 text-xs font-mono text-secondary uppercase tracking-wider font-semibold">
                    Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Fastly / Dandy / Self-Employed"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 text-primary text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-xs font-mono text-secondary uppercase tracking-wider font-semibold">
                    Project Details or Message
                  </label>
                  <textarea
                    required
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, role, or integration challenges..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 text-primary text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-3.5 bg-accent text-background rounded-xl font-bold font-mono text-sm hover:bg-accent-light transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {formStatus === 'submitting' ? 'Sending Message...' : (
                    <>Send Message <Send size={16} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-20 border-t border-border/80 bg-surface/40">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-secondary">
              Quick answers about technical expertise, enterprise work, and background.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group glass-panel rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-primary text-sm md:text-base">
                  {faq.q}
                  <ChevronDown
                    size={18}
                    className="group-open:rotate-180 transition-transform text-accent"
                  />
                </summary>
                <div className="px-6 pb-6 border-t border-border/60 pt-4 text-xs md:text-sm text-secondary leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}