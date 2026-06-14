import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';

import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';

const APPS_SCRIPT_URL = (import.meta as any).env.VITE_APPS_SCRIPT_URL;

export function Contact() {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (website) {
      return;
    }

    setFormStatus('submitting');

    try {
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

      alert(
        'Something went wrong. Please contact me directly at vallabhkul953@gmail.com'
      );
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
          text: 'Vallabh Kulkarni is an Associate Software Engineer specializing in Enterprise Automation, AI Engineering, and scalable software solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies does Vallabh specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'He specializes in Python, SQL, Workato, Salesforce, AWS, BigQuery, and modern AI tools like Gemini AI and Deep Learning frameworks.',
        },
      },
    ],
  };

  const faqs = [
    {
      q: 'Who is Vallabh Kulkarni?',
      a: 'Vallabh Kulkarni is an Associate Software Engineer specializing in Enterprise Automation, AI Engineering, and scalable software solutions.',
    },
    {
      q: 'What technologies does Vallabh specialize in?',
      a: 'He specializes in Python, SQL, Workato, Salesforce, AWS, BigQuery, and modern AI tools like Gemini AI and Deep Learning frameworks.',
    },
    {
      q: 'What industries has Vallabh worked with?',
      a: 'He has worked with Silicon Valley enterprise clients across technology, healthcare, and sales operations.',
    },
    {
      q: "What is Vallabh's expertise?",
      a: 'His core expertise lies in building intelligent systems that automate workflows, scale data pipelines, and deliver measurable business impact.',
    },
    {
      q: 'What projects has Vallabh worked on?',
      a: 'Key projects include AI-powered automation systems, enterprise integrations, compensation pipelines, and intelligent workflow solutions.',
    },
    {
      q: 'What certifications does Vallabh hold?',
      a: 'He holds Workato Pro I, II, III, Technical Developer certifications and multiple Google Cloud Generative AI certifications.',
    },
    {
      q: 'How can I contact Vallabh?',
      a: 'You can reach out through this contact form, email, LinkedIn, or GitHub.',
    },
  ];

  return (
    <PageTransition>
      <SEO schema={faqSchema} />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT SIDE */}
          <div>
            <p className="font-mono text-accent text-sm mb-4">
              &gt; contact.sh
            </p>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
              Let's Build Something Great Together
            </h1>

            <p className="text-lg text-secondary leading-relaxed mb-12">
              Whether you're looking for an Automation Engineer,
              AI/ML Engineer, Software Engineer, collaborator,
              or simply want to discuss technology, I'd love
              to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:vallabhkul953@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-accent/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-secondary group-hover:text-accent transition-colors">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="font-semibold text-primary">
                    Email
                  </p>

                  <p className="text-sm text-secondary font-mono">
                    vallabhkul953@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/vallabhkul953"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-accent/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-secondary">
                  <Linkedin size={20} />
                </div>

                <div>
                  <p className="font-semibold text-primary">
                    LinkedIn
                  </p>

                  <p className="text-sm text-secondary font-mono">
                    Connect professionally
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/vallabhkul953"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-accent/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-secondary">
                  <Github size={20} />
                </div>

                <div>
                  <p className="font-semibold text-primary">
                    GitHub
                  </p>

                  <p className="text-sm text-secondary font-mono">
                    View my code
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-surface p-8 rounded-2xl border border-border">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={40} />
                </div>

                <h3 className="text-2xl font-bold text-primary mb-2">
                  Message Sent Successfully
                </h3>

                <p className="text-secondary mb-6">
                  Thank you for reaching out. Your message has been received successfully and I'll respond as soon as possible.
                </p>

                <button
                  onClick={() => setFormStatus('idle')}
                  className="px-6 py-3 rounded-lg border border-border hover:border-accent transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="hidden">
                  <label htmlFor="website">
                    Website
                  </label>
                  <input
                    type="text"
                    id="website"
                    value={website}
                    onChange={(e) =>
                      setWebsite(e.target.value)
                    }
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-mono text-secondary"
                  >
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-mono text-secondary"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block mb-2 text-sm font-mono text-secondary"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        company: e.target.value,
                      })
                    }
                    placeholder="Google"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-mono text-secondary"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Tell me about your project, role, or idea..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-primary text-background rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-70"
                >
                  {formStatus === 'submitting'
                    ? 'Sending Message...'
                    : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-24 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-secondary">
              Quick answers about my background,
              experience, and expertise.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-surface border border-border rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-primary">
                  {faq.q}
                  <ChevronDown
                    size={20}
                    className="group-open:rotate-180 transition-transform"
                  />
                </summary>
                <div className="px-6 pb-6 border-t border-border pt-4 text-secondary">
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