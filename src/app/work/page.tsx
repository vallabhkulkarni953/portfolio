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
} from "lucide-react";
import { FilterableWorkGrid } from "@/src/components/FilterableWorkGrid";

export const metadata: Metadata = {
  title: "Enterprise Projects & Engineered Systems",
  description:
    "Enterprise backend integrations, Workato SDK connectors, high-volume data pipelines, and AI systems delivered by Vallabh Kulkarni.",
};

export default function Work() {
  const stats = [
    {
      label: "UKG Pipeline Execution",
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
      subtext: "Zero-data-loss migrations & rollback safeguards",
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
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Section Header */}
      <div className="mb-16 space-y-4">
        <p className="font-mono text-accent text-xs font-semibold uppercase tracking-wider">
          &gt; portfolio.work()
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Engineered Systems & Production Impact
        </h1>
        <p className="text-base md:text-lg text-secondary max-w-3xl leading-relaxed">
          Enterprise backend integrations, high-volume data pipelines, and
          custom automation architectures delivered for Silicon Valley scale.
        </p>
      </div>

      {/* Quantified Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="glass-panel p-6 rounded-xl hover:border-accent/40 transition-all"
          >
            <span className="text-3xl md:text-4xl font-mono font-bold text-accent block mb-2">
              {stat.value}
            </span>
            <h3 className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider font-mono">
              {stat.label}
            </h3>
            <p className="text-xs text-tertiary leading-normal">
              {stat.subtext}
            </p>
          </div>
        ))}
      </div>

      {/* Interactive Filterable Enterprise Case Studies */}
      <div className="mb-24 space-y-8">
        <div className="flex items-center gap-3 border-b border-border/80 pb-4">
          <Cpu size={20} className="text-accent" />
          <h2 className="text-xs font-bold text-primary tracking-widest uppercase font-mono">
            Enterprise Client Deployments
          </h2>
        </div>

        <FilterableWorkGrid />
      </div>

      {/* Engineering Disciplines */}
      <div className="mb-20">
        <div className="flex items-center gap-3 border-b border-border/80 pb-4 mb-8">
          <Database size={20} className="text-accent" />
          <h2 className="text-xs font-bold text-primary tracking-widest uppercase font-mono">
            Engineering Disciplines
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {coreCompetencies.map((comp, i) => (
            <div
              key={i}
              className="glass-panel p-6 rounded-xl flex gap-4 items-start hover:border-accent/40 transition-all"
            >
              <div className="p-3 bg-surface rounded-lg border border-border shrink-0">
                {comp.icon}
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2 text-base">
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
      <div className="glass-panel rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="max-w-xl mx-auto space-y-6 relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-primary">
            Need scalable backend or integration architecture?
          </h3>
          <p className="text-secondary text-sm md:text-base leading-relaxed">
            I specialize in optimizing enterprise pipelines, custom SDK connector
            development, and AI-assisted automation systems.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs md:text-sm">
            <Link
              href="/contact"
              className="px-6 py-3 bg-accent text-background font-bold rounded-lg hover:bg-accent-light transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
            >
              Start a Conversation <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/resume"
              className="px-6 py-3 bg-background border border-border text-primary font-medium rounded-lg hover:border-accent transition-all"
            >
              View Full Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
