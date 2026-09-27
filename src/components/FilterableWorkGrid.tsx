"use client";

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export function FilterableWorkGrid() {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'automation' | 'data'>('all');

  const projects = [
    {
      id: "sendblue-sms",
      category: "ai",
      client: "Dandy",
      title: "SendBlue SMS Training Confirmation Platform",
      role: "Lead Integration & Systems Developer",
      badge: "AI & Communication",
      summary:
        "Automated SMS training confirmation platform for Dandy, enabling intelligent outreach, reminders, rescheduling, and AI-powered response processing.",
      stack: ["Workato", "Salesforce", "Sendblue", "Gemini API", "REST APIs"],
      highlights: [
        "Designed and developed custom SendBlue SDK Connector with 10+ reusable REST API actions, webhook triggers, and resilient retry mechanisms for 429 rate limits.",
        "Engineered a timezone-aware scheduling engine guaranteeing zero missed business-hour deliveries by buffering outbound communication to local client hours.",
        "Integrated Gemini API to automatically classify inbound SMS responses into Confirmed, Reschedule, and Unconfirmed workflows, removing manual triage.",
        "Executed zero-data-loss migration from legacy workflow into Workato Version 2 with rollback planning, validation strategies, and post-launch monitoring.",
      ],
    },
    {
      id: "forma-ai",
      category: "data",
      client: "Dandy",
      title: "Forma AI Compensation Data Platform",
      role: "Backend & Data Pipeline Engineer",
      badge: "Data Infrastructure",
      summary:
        "Scalable enterprise compensation data pipeline integrating Salesforce, UKG, Looker, Hex, Amazon S3, and BigQuery for secure analytics and reporting.",
      stack: ["Workato", "Salesforce", "UKG", "BigQuery", "AWS S3", "IAM"],
      highlights: [
        "Designed secure cross-account AWS infrastructure using IAM roles, inline policies, and Amazon S3 for enterprise-grade data ingestion.",
        "Reduced UKG pipeline execution time by 87% through SQL query optimization and self-join restructuring.",
        "Eliminated 90-minute workflow timeouts by implementing asynchronous child functions across five Salesforce objects.",
        "Built BigQuery-powered historical snapshot workflows supporting dynamic reporting across quarterly compensation periods.",
      ],
    },
    {
      id: "o2c-optimization",
      category: "automation",
      client: "Fastly",
      title: "Order-to-Cash (O2C) Enterprise Optimization",
      role: "Integration Engineer",
      badge: "ERP & Revenue Systems",
      summary:
        "Modernized Order-to-Cash integration platform across Salesforce, LogiSense, and NetSuite through reusable SDK development and workflow optimization.",
      stack: ["Workato", "LogiSense", "NetSuite", "Salesforce", "REST APIs"],
      highlights: [
        "Built reusable LogiSense SDK Connector with 20+ REST API actions, eliminating 25+ monthly hours of API maintenance.",
        "Improved order processing performance by 30% through modular connector architecture replacing direct HTTP integrations across 40+ production workflows.",
        "Resolved 10+ production-critical integration defects across Salesforce, LogiSense, and NetSuite through root-cause analysis and production debugging.",
      ],
    },
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-surface/80 border border-border rounded-xl w-fit">
        {[
          { id: 'all', label: 'All Deployments' },
          { id: 'ai', label: 'AI & Machine Learning' },
          { id: 'automation', label: 'Enterprise Automation' },
          { id: 'data', label: 'Data Infrastructure' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-accent text-background font-bold shadow-md shadow-accent/20'
                : 'text-secondary hover:text-primary hover:bg-background/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel rounded-2xl p-8 md:p-10 transition-all duration-300 relative overflow-hidden group hover:border-accent/40"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all" />

            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-semibold">
                  Client: {project.client}
                </span>
                <span className="px-3 py-1 rounded-md bg-background border border-border text-secondary font-mono text-xs">
                  {project.badge}
                </span>
              </div>
              <span className="text-xs font-mono text-secondary">
                {project.role}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            <p className="text-sm md:text-base text-secondary leading-relaxed mb-6">
              {project.summary}
            </p>

            {/* Highlights */}
            <div className="mb-6 space-y-3">
              <p className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                Engineering Deliverables & Impact:
              </p>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-primary"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-background text-secondary rounded font-mono text-xs border border-border hover:border-accent/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
