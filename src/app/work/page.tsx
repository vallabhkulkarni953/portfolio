import Link from "next/link";
import type { Metadata } from "next";
import {
  Layers,
  Cpu,
  ArrowUpRight,
  Database,
  Workflow,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Work & Enterprise Projects",
  description:
    "Enterprise backend integrations, high-volume data pipelines, and custom automation architectures delivered by Vallabh Kulkarni.",
};

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
      label: "Production Releases",
      value: "6 Major",
      subtext: "Managed implementation, validation, and zero data loss",
    },
  ];

  const enterpriseProjects = [
    {
      id: "sendblue-sms",
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

  const coreCompetencies = [
    {
      title: "SDK & Connector Architecture",
      icon: <Layers size={22} className="text-accent" />,
      description:
        "Designed 5 custom SDK connectors (2 new, 3 enhanced) standardizing enterprise integrations and simplifying reusable API interactions.",
    },
    {
      title: "Enterprise Workflow Orchestration",
      icon: <Workflow size={22} className="text-accent" />,
      description:
        "Maintained 25+ production recipes across Salesforce, NetSuite, UKG, and BigQuery while improving system reliability and scalability.",
    },
    {
      title: "Production Release Management",
      icon: <ShieldCheck size={22} className="text-accent" />,
      description:
        "Delivered 6 major production releases across automation platforms, handling testing, deployment, safeguards, and issue resolution.",
    },
    {
      title: "Applied AI & Automation",
      icon: <Sparkles size={22} className="text-accent" />,
      description:
        "Applied Gemini API, MCP, and structured prompt engineering to automate triage decisions, categorization, and backend data flows.",
    },
  ];

  return (
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

              {/* Highlights */}
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

      {/* Engineering Disciplines */}
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

      {/* Footer Call-To-Action */}
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
  );
}
