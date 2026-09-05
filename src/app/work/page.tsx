"use client";

import React from "react";
import Link from "next/link";
import {
  Layers,
  Cpu,
  ArrowUpRight,
  Database,
  Workflow,
  Sparkles,
  TrendingDown,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { PageTransition } from "@/src/components/PageTransition";

export default function Work() {
  const stats = [
    {
      label: "UKG Pipeline Runtime",
      value: "-87%",
      subtext: "Query optimization & self-join restructuring",
    },
    {
      label: "Order Processing Speed",
      value: "+30%",
      subtext: "Modular connector architecture across 40+ recipes",
    },
    {
      label: "Maintenance Overhead",
      value: "-25 hrs/mo",
      subtext: "Saved via reusable custom SDK connectors",
    },
    {
      label: "Production Deployments",
      value: "6 Major",
      subtext: "Delivered with zero data loss and full rollout validation",
    },
  ];

  const enterpriseProjects = [
    {
      id: "sendblue-sms",
      client: "Dandy",
      title: "SendBlue SMS Training Confirmation Platform",
      role: "Lead Integration & Systems Developer",
      badge: "AI & Communication",
      impact: "Zero Missed Delivery Hours & AI-Automated Triage",
      summary:
        "Engineered an automated SMS confirmation platform delivering outreach, intelligent follow-ups, rescheduling workflows, and AI response classification.",
      stack: ["Workato", "Salesforce", "Sendblue", "Gemini API", "REST APIs"],
      highlights: [
        "Architected custom SendBlue SDK Connector with 10+ reusable REST API actions, webhook listeners, and auto-recovery algorithms for 429 rate limits.",
        "Built a timezone-aware delivery scheduler guaranteeing outbound dispatches occur strictly within client-localized business hours.",
        "Integrated Gemini API to categorize replies into Confirmed, Reschedule, and Unconfirmed, replacing manual agent triage.",
        "Orchestrated zero-data-loss migration from legacy systems into Workato Version 2 with rollback strategies and automated validation.",
      ],
    },
    {
      id: "forma-ai",
      client: "Dandy",
      title: "Forma AI Enterprise Compensation Data Platform",
      role: "Backend & Data Pipeline Engineer",
      badge: "Data Infrastructure",
      impact: "87% Runtime Reduction & Zero Object Timeouts",
      summary:
        "Constructed a high-throughput, fault-tolerant compensation data lake unifying Salesforce, UKG, Looker, Hex, Amazon S3, and BigQuery for dynamic analytics.",
      stack: ["Workato", "Salesforce", "UKG", "BigQuery", "AWS S3", "IAM"],
      highlights: [
        "Cut UKG batch pipeline runtimes by 87% through SQL query optimization and self-join refactoring.",
        "Eliminated persistent 90-minute operational timeouts across 5 core Salesforce objects using asynchronous child worker architecture.",
        "Configured cross-account AWS infrastructure using IAM roles and Amazon S3 buckets for secure enterprise data ingestion.",
        "Created BigQuery historical snapshot pipelines supporting complex quarterly compensation reporting and dynamic reconciliation.",
      ],
    },
    {
      id: "o2c-optimization",
      client: "Fastly",
      title: "Order-to-Cash (O2C) Enterprise Optimization",
      role: "Integration Engineer",
      badge: "ERP & Revenue Systems",
      impact: "30% Throughput Boost & 25+ Hours/Month Saved",
      summary:
        "Modernized mission-critical financial and order workflows connecting Salesforce, LogiSense, and NetSuite through custom connector standards.",
      stack: ["Workato", "LogiSense", "NetSuite", "Salesforce", "REST APIs"],
      highlights: [
        "Engineered a full-featured LogiSense SDK Connector with 20+ actions, eliminating 25+ hours per month of manual API debugging.",
        "Boosted overall order execution throughput by 30% across 40+ live enterprise workflows by replacing fragmented direct HTTP calls.",
        "Triaged and resolved 10+ production-critical revenue integration defects across NetSuite, Salesforce, and LogiSense platforms.",
      ],
    },
  ];

  const coreCompetencies = [
    {
      title: "SDK & Connector Architecture",
      icon: <Layers size={22} className="text-accent" />,
      description:
        "Designed 5 custom SDK connectors (2 new, 3 modernized) standardizing internal API access and eliminating fragile point-to-point webhook endpoints.",
    },
    {
      title: "Enterprise System Orchestration",
      icon: <Workflow size={22} className="text-accent" />,
      description:
        "Active custodian of 25+ production Workato recipes across enterprise platforms like Salesforce, NetSuite, UKG, and BigQuery.",
    },
    {
      title: "Production Release Management",
      icon: <ShieldCheck size={22} className="text-accent" />,
      description:
        "Successfully delivered 6 major cross-platform production releases, coordinating rollback mechanisms, telemetry verification, and post-go-live stability.",
    },
    {
      title: "Applied AI & Automation",
      icon: <Sparkles size={22} className="text-accent" />,
      description:
        "Leveraging the Gemini API, Model Context Protocol (MCP), and structured prompt engineering to automate triage decisions and workflow routing.",
    },
  ];

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-accent text-sm mb-3">
            &gt; portfolio.work()
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
            Engineered Systems & Production Impact
          </h1>
          <p className="text-lg text-secondary max-w-3xl leading-relaxed">
            Enterprise backend integrations, high-volume data pipelines, and
            custom automation architectures delivered for Silicon Valley scale.
          </p>
        </div>

        {/* Quantified Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-surface border border-border p-6 rounded-xl hover:border-accent/40 transition-colors"
            >
              <span className="text-3xl md:text-4xl font-mono font-bold text-accent block mb-2">
                {stat.value}
              </span>
              <h3 className="text-sm font-semibold text-primary mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-secondary leading-normal">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Enterprise Case Studies */}
        <div className="space-y-12 mb-24">
          <div className="flex items-center gap-3 border-b border-border pb-4">
            <Cpu size={20} className="text-accent" />
            <h2 className="text-xl font-bold text-primary tracking-wide uppercase text-sm font-mono">
              Enterprise Client Deployments
            </h2>
          </div>

          <div className="grid gap-8">
            {enterpriseProjects.map((project) => (
              <div
                key={project.id}
                className="bg-surface border border-border rounded-2xl p-8 md:p-10 hover:border-accent/50 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
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

                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                  {project.title}
                </h3>

                <p className="text-sm md:text-base text-secondary leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Key Highlights */}
                <div className="mb-6 space-y-3">
                  <p className="text-xs font-mono text-accent uppercase tracking-wider">
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
                      className="px-2.5 py-1 bg-background text-secondary rounded font-mono text-xs border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Architecture Capabilities */}
        <div className="mb-20">
          <div className="flex items-center gap-3 border-b border-border pb-4 mb-8">
            <Database size={20} className="text-accent" />
            <h2 className="text-xl font-bold text-primary tracking-wide uppercase text-sm font-mono">
              Engineering Disciplines
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {coreCompetencies.map((comp, i) => (
              <div
                key={i}
                className="bg-surface border border-border p-6 rounded-xl flex gap-4 items-start hover:border-accent/30 transition-colors"
              >
                <div className="p-3 bg-background rounded-lg border border-border shrink-0">
                  {comp.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">
                    {comp.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Contact */}
        <div className="bg-surface border border-border rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Need scalable backend or integration architecture?
          </h3>
          <p className="text-secondary max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
            I specialize in optimizing enterprise pipelines, custom connector
            development, and AI-assisted automation systems.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary text-background font-medium rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2 text-sm font-mono"
            >
              Start a Conversation <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/resume"
              className="px-6 py-3 bg-background border border-border text-primary font-medium rounded-lg hover:border-accent transition-colors text-sm font-mono"
            >
              View Full Resume
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
