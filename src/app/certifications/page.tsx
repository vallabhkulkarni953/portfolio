"use client";

import { useState } from "react";
import Link from "next/link";
import { PageTransition } from "@/src/components/PageTransition";
import {
  Award,
  ShieldCheck,
  ArrowUpRight,
  ExternalLink
} from "lucide-react";

export default function Certifications() {
  const [filter, setFilter] = useState<"all" | "workato" | "ai" | "engineering">("all");

  const certifications = [
    {
      id: "workato-tech-dev",
      category: "workato",
      issuer: "Workato",
      title: "Workato Certified Technical Developer",
      badge: "Enterprise SDK & Connector Architecture",
      date: "2024",
      url: "https://www.linkedin.com/in/vallabhkul953/details/certifications/",
      skills: ["Custom SDK Connectors", "REST APIs", "Ruby / JSON Schemas", "OAuth2 & Webhook Triggers"],
      description: "Highest technical certification validating advanced custom SDK connector design, REST API wrapping, rate-limit retry logic (429 handling), and complex multi-tenant enterprise integrations."
    },
    {
      id: "workato-pro-3",
      category: "workato",
      issuer: "Workato",
      title: "Workato Automation Pro III",
      badge: "Advanced Enterprise Orchestration",
      date: "2024",
      url: "https://www.linkedin.com/in/vallabhkul953/details/certifications/",
      skills: ["Parent-Child Async Pipelines", "Error Triage", "Lookup Tables", "Enterprise Data Ingestion"],
      description: "Mastery of enterprise-grade recipe architecture, asynchronous batch processing, exception handling, and error monitoring across Salesforce, NetSuite, and UKG."
    },
    {
      id: "workato-pro-2",
      category: "workato",
      issuer: "Workato",
      title: "Workato Automation Pro II",
      badge: "Workflow Optimization",
      date: "2024",
      url: "https://www.linkedin.com/in/vallabhkul953/details/certifications/",
      skills: ["Multi-App Integration", "Conditional Logic", "Data Transformation", "API Collections"],
      description: "Demonstrates proficiency in multi-system workflow automation, complex data mappings, and cross-platform integrations."
    },
    {
      id: "workato-pro-1",
      category: "workato",
      issuer: "Workato",
      title: "Workato Automation Pro I",
      badge: "Integration Fundamentals",
      date: "2024",
      url: "https://www.linkedin.com/in/vallabhkul953/details/certifications/",
      skills: ["Recipe Design", "Trigger Configuration", "Data Mappings", "Integration Testing"],
      description: "Foundational certification covering enterprise workflow automation concepts, app connectors, and trigger-action mechanics."
    },
    {
      id: "gcp-genai",
      category: "ai",
      issuer: "Google Cloud",
      title: "Google Cloud Generative AI Career Launchpad",
      badge: "LLMs & Vertex AI",
      date: "2024",
      url: "https://www.linkedin.com/in/vallabhkul953/details/certifications/",
      skills: ["Gemini API", "Prompt Engineering", "Vertex AI", "LLM System Triage"],
      description: "Certified by Google Cloud in Generative AI architectures, prompt engineering, Gemini API integration, and enterprise AI workflow automation."
    },
    {
      id: "microsoft-sw",
      category: "engineering",
      issuer: "Microsoft & LinkedIn",
      title: "Career Essentials in Software Development",
      badge: "Software Engineering & Architecture",
      date: "2024",
      url: "https://www.linkedin.com/in/vallabhkul953/details/certifications/",
      skills: ["Software Architecture", "OOP Principles", "Git Version Control", "Developer Tools"],
      description: "Comprehensive software engineering certification validating core computer science principles, system design fundamentals, and enterprise software practices."
    },
    {
      id: "hackerrank-badges",
      category: "engineering",
      issuer: "HackerRank",
      title: "HackerRank 5★ C++ & 4★ Python Certifications",
      badge: "Algorithms & Problem Solving",
      date: "2023 - 2024",
      url: "https://www.linkedin.com/in/vallabhkul953/details/certifications/",
      skills: ["Data Structures & Algorithms", "Object-Oriented C++", "Python Scripting", "Algorithmic Efficiency"],
      description: "Awarded 5 Stars in C++ (Object-Oriented Programming) and 4 Stars in Python for algorithmic problem solving and clean code implementation."
    },
    {
      id: "udemy-python",
      category: "engineering",
      issuer: "Udemy (Jose Portilla)",
      title: "Complete Python Bootcamp: Zero to Hero",
      badge: "Advanced Python Engineering",
      date: "2023",
      url: "https://www.linkedin.com/in/vallabhkul953/details/certifications/",
      skills: ["Python OOP", "Data Processing", "File I/O & Automation", "Decorator Patterns"],
      description: "In-depth technical training covering Python data structures, object-oriented programming, decoratory functions, and backend automation scripting."
    }
  ];

  const filteredCertifications = filter === "all"
    ? certifications
    : certifications.filter(c => c.category === filter);

  const certSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Vallabh Kulkarni Certifications & Credentials',
    itemListElement: certifications.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'EducationalOccupationalCredential',
        name: c.title,
        credentialCategory: c.badge,
        url: c.url,
        recognizedBy: {
          '@type': 'Organization',
          name: c.issuer
        }
      }
    }))
  };

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(certSchema) }}
      />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Page Header */}
        <div className="mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs">
            <Award size={14} />
            <span>Verified Technical Credentials</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Certifications & Technical Mastery
          </h1>

          <p className="text-base md:text-lg text-secondary max-w-3xl leading-relaxed">
            Enterprise automation credentials, Google Cloud AI certifications, and computer science problem-solving honors.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-surface/80 border border-border rounded-xl w-fit mb-12">
          {[
            { id: "all", label: "All Credentials" },
            { id: "workato", label: "Workato Enterprise (4x)" },
            { id: "ai", label: "AI & Google Cloud" },
            { id: "engineering", label: "Software Engineering" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                filter === tab.id
                  ? "bg-accent text-background font-bold shadow-md shadow-accent/20"
                  : "text-secondary hover:text-primary hover:bg-background/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {filteredCertifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between hover:border-accent/40 transition-all group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-semibold">
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-mono text-tertiary">
                    Issued: {cert.date}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-secondary">
                    {cert.badge}
                  </p>
                </div>

                <p className="text-sm text-secondary leading-relaxed">
                  {cert.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-background text-secondary rounded font-mono text-[11px] border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verification Link */}
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono text-accent hover:text-accent-light transition-colors group/link"
              >
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck size={16} /> Verified Credential
                </span>
                <span className="text-secondary group-hover/link:text-accent transition-colors flex items-center gap-1">
                  Verify on LinkedIn <ExternalLink size={12} />
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="glass-panel rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-6 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              Looking for a certified integration & AI specialist?
            </h3>
            <p className="text-secondary text-sm md:text-base leading-relaxed">
              Explore my technical case studies or download my full resume to see how these credentials translate to production ROI.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs md:text-sm">
              <Link
                href="/work"
                className="px-6 py-3 bg-accent text-background font-bold rounded-lg hover:bg-accent-light transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                View Case Studies <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/resume"
                className="px-6 py-3 bg-background border border-border text-primary font-medium rounded-lg hover:border-accent transition-all"
              >
                Full Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
