import React, { useState } from 'react';
import { Mail, Linkedin, Github, ChevronDown, CheckCircle2 } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
export function Contact() {
  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success'>(
    'idle');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1000);
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
        text: 'Vallabh Kulkarni is an Associate Software Engineer specializing in Enterprise Automation, AI Engineering, and scalable software solutions.'
      }
    },
    {
      '@type': 'Question',
      name: 'What technologies does Vallabh specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'He specializes in Python, SQL, Workato, Salesforce, AWS, BigQuery, and modern AI tools like Gemini AI and Deep Learning frameworks.'
      }
    }]

  };
  const faqs = [
  {
    q: 'Who is Vallabh Kulkarni?',
    a: 'Vallabh Kulkarni is an Associate Software Engineer specializing in Enterprise Automation, AI Engineering, and scalable software solutions.'
  },
  {
    q: 'What technologies does Vallabh specialize in?',
    a: 'He specializes in Python, SQL, Workato, Salesforce, AWS, BigQuery, and modern AI tools like Gemini AI and Deep Learning frameworks.'
  },
  {
    q: 'What industries has Vallabh worked with?',
    a: 'He has worked with Silicon Valley enterprise clients across technology, healthcare (medical imaging), and sales operations.'
  },
  {
    q: "What is Vallabh's expertise?",
    a: 'His core expertise lies in building intelligent systems that automate workflows, scale data pipelines, and deliver measurable business impact.'
  },
  {
    q: 'What projects has Vallabh worked on?',
    a: 'Key projects include Fastly Order-to-Cash Pipeline Optimization, Dandy AI SMS Training Automation, Forma AI Compensation Pipeline, and Salesbot.'
  },
  {
    q: 'What certifications does Vallabh hold?',
    a: 'He holds all Workato certifications (Pro I-III, Technical Developer), Google Cloud Generative AI, and Prompt Engineering certifications.'
  },
  {
    q: 'How can I contact Vallabh?',
    a: 'You can reach out via the contact form on this website, email, or connect with him on LinkedIn.'
  }];

  return (
    <PageTransition>
      <SEO schema={faqSchema} />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Intro & Methods */}
          <div>
            <p className="font-mono text-accent text-sm mb-4">
              &gt; ping vallabh
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
              Let's Connect
            </h1>
            <p className="text-lg text-secondary leading-relaxed mb-12">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:contact@vallabhkulkarni.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-accent/50 transition-colors group">
                
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover:text-accent transition-colors text-secondary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-primary group-hover:text-accent transition-colors">
                    Email
                  </p>
                  <p className="text-sm text-secondary font-mono">
                    contact@vallabhkulkarni.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-accent/50 transition-colors group">
                
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover:text-[#0A66C2] transition-colors text-secondary">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-primary group-hover:text-accent transition-colors">
                    LinkedIn
                  </p>
                  <p className="text-sm text-secondary font-mono">
                    Connect professionally
                  </p>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-accent/50 transition-colors group">
                
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover:text-primary transition-colors text-secondary">
                  <Github size={20} />
                </div>
                <div>
                  <p className="font-semibold text-primary group-hover:text-accent transition-colors">
                    GitHub
                  </p>
                  <p className="text-sm text-secondary font-mono">
                    View my code
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-surface p-8 rounded-2xl border border-border">
            {formStatus === 'success' ?
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  Message Sent
                </h3>
                <p className="text-secondary">
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
                <button
                onClick={() => setFormStatus('idle')}
                className="mt-4 px-6 py-2 bg-background border border-border rounded-md text-sm font-medium hover:border-accent transition-colors text-primary">
                
                  Send another message
                </button>
              </div> :

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                  htmlFor="name"
                  className="text-sm font-mono text-secondary">
                  
                    Name
                  </label>
                  <input
                  required
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-primary focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
                  placeholder="John Doe" />
                
                </div>

                <div className="space-y-2">
                  <label
                  htmlFor="email"
                  className="text-sm font-mono text-secondary">
                  
                    Email
                  </label>
                  <input
                  required
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-primary focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
                  placeholder="john@company.com" />
                
                </div>

                <div className="space-y-2">
                  <label
                  htmlFor="company"
                  className="text-sm font-mono text-secondary">
                  
                    Company (Optional)
                  </label>
                  <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-primary focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
                  placeholder="Acme Inc." />
                
                </div>

                <div className="space-y-2">
                  <label
                  htmlFor="message"
                  className="text-sm font-mono text-secondary">
                  
                    Message
                  </label>
                  <textarea
                  required
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-primary focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all resize-none"
                  placeholder="How can we work together?">
                </textarea>
                </div>

                <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-4 bg-primary text-background rounded-lg font-mono font-medium hover:bg-primary/90 transition-colors disabled:opacity-70">
                
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            }
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-secondary">
              Quick answers to common questions about my background and
              expertise.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) =>
            <details
              key={i}
              className="group bg-surface border border-border rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              
                <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-primary hover:bg-surface/80 transition-colors">
                  {faq.q}
                  <ChevronDown
                  size={20}
                  className="text-secondary group-open:rotate-180 transition-transform" />
                
                </summary>
                <div className="px-6 pb-6 text-secondary leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              </details>
            )}
          </div>
        </div>
      </section>
    </PageTransition>);

}