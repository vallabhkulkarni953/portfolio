"use client";

import Link from "next/link";
import { PageTransition } from "@/src/components/PageTransition";
import {
  ArrowUpRight,
  CheckCircle2,
  HelpCircle
} from "lucide-react";

export default function Comparison() {
  const comparisonSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Vallabh Kulkarni vs Traditional Integration Agencies & Pre-Built Connectors',
    description: 'An even-handed technical comparison of custom Workato SDK connector architecture versus generic HTTP connectors and legacy consulting agencies.',
    url: 'https://vallabhkulkarni.com/comparison',
  };

  const comparisonRows = [
    {
      feature: 'API Rate-Limit Handling (429 Retries)',
      customSdk: 'Built-in exponential backoff & resilient queuing',
      genericConnector: 'Requires manual recipe try/catch blocks',
      agencyConsulting: 'Offloaded to custom billing hours'
    },
    {
      feature: 'Pipeline Execution Efficiency',
      customSdk: 'Optimized SQL & async child routines (-87% runtime)',
      genericConnector: 'Standard linear loops (risk of 90-min timeouts)',
      agencyConsulting: 'Variable depending on assigned staff'
    },
    {
      feature: 'Maintenance & Code Reusability',
      customSdk: 'Single SDK Connector eliminates 25+ hrs/mo maintenance',
      genericConnector: 'Duplicated HTTP actions across 40+ recipes',
      agencyConsulting: 'Ongoing retainer fee model'
    },
    {
      feature: 'Applied AI & LLM Triage',
      customSdk: 'Gemini API automated response classification',
      genericConnector: 'Manual human triage workflows',
      agencyConsulting: 'Third-party addon software contracts'
    },
    {
      feature: 'Best Suited For',
      customSdk: 'High-growth tech companies & enterprise integrations',
      genericConnector: 'Basic low-volume 1-step webhooks',
      agencyConsulting: 'Multi-million dollar legacy ERP migrations'
    }
  ];

  const engagementTiers = [
    {
      title: "1. Custom SDK Connector Architecture",
      badge: "SDK & API Engineering",
      scope: "End-to-end design of custom Workato SDK connectors with 10+ reusable REST API actions, OAuth2/webhook triggers, and 429 rate-limit retry logic.",
      deliverables: [
        "Custom Workato SDK Connector package",
        "OAuth2 & API Key authentication flows",
        "Resilient retry mechanisms & webhook listeners",
        "Complete technical documentation & recipe templates"
      ]
    },
    {
      title: "2. Enterprise Pipeline Optimization",
      badge: "Performance & SQL Engineering",
      scope: "Deep-dive query optimization, self-join restructuring, and parent-child async routine implementation to eliminate timeout bottlenecks.",
      deliverables: [
        "Up to 87% reduction in pipeline execution time",
        "Elimination of 90-minute Salesforce/UKG workflow timeouts",
        "BigQuery & AWS S3 historical snapshot workflows",
        "Zero-data-loss validation & post-launch monitoring"
      ]
    },
    {
      title: "3. Applied AI & LLM Workflow Automation",
      badge: "AI Systems Architecture",
      scope: "Integration of Gemini API and structured prompt engineering to automate triage decisions, response classification, and communication routing.",
      deliverables: [
        "Gemini API & LLM endpoint integration",
        "Automated inbound message triage engine",
        "Timezone-aware scheduling & delivery buffering",
        "Full production deployment & testing"
      ]
    }
  ];

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs">
            <HelpCircle size={14} />
            <span>Architecture & Vendor Comparison</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            How does custom SDK architecture compare to traditional alternatives?
          </h1>

          <p className="text-base md:text-lg text-secondary max-w-3xl leading-relaxed">
            An even-handed evaluation of custom Workato SDK connectors versus generic HTTP connectors and traditional consulting agencies.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass-panel rounded-2xl overflow-hidden mb-20 border border-border">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-surface border-b border-border font-mono text-accent">
                <tr>
                  <th className="p-4 md:p-6 font-semibold">Evaluation Criteria</th>
                  <th className="p-4 md:p-6 font-semibold bg-accent/5">Vallabh (Custom SDK Architecture)</th>
                  <th className="p-4 md:p-6 font-semibold text-secondary">Pre-Built / Generic HTTP</th>
                  <th className="p-4 md:p-6 font-semibold text-secondary">Traditional Agency Retainers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface/50 transition-colors">
                    <td className="p-4 md:p-6 font-semibold text-primary">{row.feature}</td>
                    <td className="p-4 md:p-6 bg-accent/5 text-primary font-medium">{row.customSdk}</td>
                    <td className="p-4 md:p-6 text-secondary">{row.genericConnector}</td>
                    <td className="p-4 md:p-6 text-secondary">{row.agencyConsulting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* When an alternative is better */}
        <div className="glass-panel p-8 rounded-2xl mb-20 border border-border space-y-4">
          <h2 className="text-xl font-bold text-primary">
            When is a traditional agency or generic connector the better choice?
          </h2>
          <div className="space-y-3 text-sm text-secondary leading-relaxed">
            <p>
              <strong className="text-primary">1. Generic HTTP Connectors:</strong> If you only need to trigger a simple 1-step webhook with low volume and zero custom rate-limiting or payload transformation, built-in connectors are faster to set up and cost nothing.
            </p>
            <p>
              <strong className="text-primary">2. Traditional Consulting Agencies:</strong> If your organization requires a massive 50+ person team for multi-year legacy SAP/Oracle migrations with extensive administrative overhead, a traditional Big 4 agency is better structured for large-scale staffing.
            </p>
            <p>
              <strong className="text-primary">3. Custom SDK Architecture:</strong> If your enterprise relies on high-volume Salesforce, NetSuite, UKG, LogiSense, or AI workflows where custom connector reusability and execution speed directly impact profit margins, custom SDK architecture is the optimal choice.
            </p>
          </div>
        </div>

        {/* Engagement Models & Scope Tiers (Task 4) */}
        <div className="mb-20 space-y-8">
          <div className="border-b border-border/80 pb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              What engagement options and service scopes are available?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementTiers.map((tier, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-accent/40 transition-all space-y-4"
              >
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-semibold">
                    {tier.badge}
                  </span>
                  <h3 className="text-lg font-bold text-primary">{tier.title}</h3>
                  <p className="text-xs text-secondary leading-relaxed">{tier.scope}</p>

                  <div className="pt-2 space-y-2">
                    <p className="text-[11px] font-mono text-accent uppercase font-semibold">Deliverables Included:</p>
                    <ul className="space-y-1.5">
                      {tier.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-primary">
                          <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <Link
                    href="/contact"
                    className="w-full py-2.5 bg-surface hover:bg-background border border-border hover:border-accent text-accent font-mono text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5"
                  >
                    Request Scope Proposal <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="glass-panel rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-6 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              Ready to evaluate custom SDK architecture for your stack?
            </h3>
            <p className="text-secondary text-sm md:text-base leading-relaxed">
              Contact Vallabh directly to discuss your integration bottlenecks and technical scope.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs md:text-sm">
              <Link
                href="/contact"
                className="px-6 py-3 bg-accent text-background font-bold rounded-lg hover:bg-accent-light transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Start a Conversation <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/work"
                className="px-6 py-3 bg-background border border-border text-primary font-medium rounded-lg hover:border-accent transition-all"
              >
                View Work Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
