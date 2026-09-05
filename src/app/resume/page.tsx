"use client";

import {
  Printer,
  Download,
  ExternalLink,
  Phone,
  Mail,
  Linkedin,
  Github,
} from "lucide-react";
import { PageTransition } from "@/src/components/PageTransition";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Directly downloads the PDF from public folder
    const link = document.createElement("a");
    link.href = "/Vallabh_Kulkarni_Resume_18_07_2026.pdf";
    link.download = "Vallabh_Kulkarni_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 no-print bg-surface p-4 rounded-xl border border-border">
          <p className="text-sm font-mono text-secondary">&gt; resume.pdf</p>

          <div className="flex items-center gap-3 w-full sm:w-auto font-mono">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-background border border-border rounded-md text-sm font-medium hover:border-accent transition-colors text-primary"
            >
              <Printer size={16} />
              Print
            </button>

            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary text-background rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Download size={16} />
              Download
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="bg-surface p-8 md:p-12 border border-border shadow-sm rounded-xl print:bg-white print:text-black print:border-none print:shadow-none print:p-0">
          {/* Header */}
          <header className="border-b border-border pb-6 mb-6">
            <h1 className="text-3xl font-bold text-primary mb-2">
              Vallabh Kulkarni[cite: 1]
            </h1>

            <p className="text-lg text-secondary mb-4">
              Software Engineer | Backend | Enterprise Integrations[cite: 1]
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary">
              <span className="flex items-center gap-1 text-primary">
                <Phone size={14} />
                +91 9022984857[cite: 1]
              </span>

              <a
                href="mailto:vallabhkul953@gmail.com"
                className="flex items-center gap-1 hover:text-primary"
              >
                <Mail size={14} />
                vallabhkul953@gmail.com[cite: 1]
              </a>

              <a
                href="https://linkedin.com/in/vallabhkul953"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-primary"
              >
                <Linkedin size={14} />
                vallabhkul953[cite: 1]
              </a>

              <a
                href="https://github.com/vallabhkulkarni953"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-primary"
              >
                <Github size={14} />
                vallabhkulkarni953[cite: 1]
              </a>

              <a
                href="https://vallabhkulkarni.com"
                className="flex items-center gap-1 hover:text-primary"
              >
                <ExternalLink size={14} />
                vallabhkulkarni.com
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Professional Summary[cite: 1]
            </h2>

            <p className="text-sm leading-relaxed text-primary">
              Software Engineer with 1 year of experience building enterprise
              automation, backend integrations, and scalable API-driven systems.
              Delivered production-ready software using Python, Workato,
              Salesforce, and cloud technologies to improve reliability,
              performance, and operational efficiency[cite: 1].
            </p>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Technical Skills[cite: 1]
            </h2>

            <div className="text-sm text-primary space-y-2">
              <p>
                <span className="font-bold">Languages:</span> Python, SQL[cite:
                1]
              </p>

              <p>
                <span className="font-bold">Backend & Integration:</span> REST
                APIs, SDK Development, Enterprise Integrations, Workflow
                Automation[cite: 1]
              </p>

              <p>
                <span className="font-bold">Cloud & Platforms:</span> AWS,
                Salesforce, Workato[cite: 1]
              </p>

              <p>
                <span className="font-bold">Databases:</span> MySQL, MongoDB,
                BigQuery[cite: 1]
              </p>

              <p>
                <span className="font-bold">AI Engineering:</span> Gemini API,
                MCP, Prompt Engineering[cite: 1]
              </p>

              <p>
                <span className="font-bold">Developer Tools:</span> Git,
                Postman, VS Code[cite: 1]
              </p>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              Professional Experience[cite: 1]
            </h2>

            {/* OneSolve */}
            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-primary text-base">OneSolve</h3>
                [cite: 1]
                <span className="text-xs font-mono text-secondary">
                  Remote (California, USA)
                </span>
                [cite: 1]
              </div>

              <div className="flex justify-between items-baseline mb-1">
                <p className="text-sm font-medium italic text-secondary">
                  Associate Software Engineer[cite: 1]
                </p>
                <span className="text-xs font-mono text-secondary">
                  July 2025 – Present
                </span>
                [cite: 1]
              </div>

              <div className="flex justify-between items-baseline mb-3">
                <p className="text-sm font-medium italic text-secondary">
                  Software Engineer Intern[cite: 1]
                </p>
                <span className="text-xs font-mono text-secondary">
                  Feb 2025 – June 2025
                </span>
                [cite: 1]
              </div>

              <ul className="list-disc ml-4 text-sm space-y-1.5 text-primary">
                <li>
                  Developed enterprise automation solutions, backend
                  integrations, and scalable workflow systems using Python,
                  Workato, Salesforce, AWS, SQL, and REST APIs[cite: 1].
                </li>
                <li>
                  Built and enhanced 5+ enterprise automation workflows,
                  maintaining 25+ production recipes while improving system
                  reliability, scalability, and operational efficiency[cite: 1].
                </li>
                <li>
                  Designed, developed, and maintained 5 SDK connectors (2 new, 3
                  enhanced) to standardize enterprise integrations and simplify
                  reusable API interactions across client solutions[cite: 1].
                </li>
                <li>
                  Delivered 6 major production releases across enterprise
                  automation and integration platforms, managing implementation,
                  testing, deployment, production support, and issue
                  resolution[cite: 1].
                </li>
                <li>
                  Partnered with cross-functional teams and enterprise clients,
                  including Fastly and Dandy, to deliver production-ready
                  integration solutions across CRM, ERP, and cloud
                  platforms[cite: 1].
                </li>
              </ul>
            </div>

            {/* MediMaze Solutions */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-primary text-base">
                  MediMaze Solutions Pvt. Ltd.
                </h3>
                [cite: 1]
                <span className="text-xs font-mono text-secondary">
                  Chinchwad, Pune
                </span>
                [cite: 1]
              </div>

              <div className="flex justify-between items-baseline mb-3">
                <p className="text-sm font-medium italic text-secondary">
                  Data Science Intern[cite: 1]
                </p>
                <span className="text-xs font-mono text-secondary">
                  May 2024 – July 2024
                </span>
                [cite: 1]
              </div>

              <ul className="list-disc ml-4 text-sm space-y-1.5 text-primary">
                <li>
                  Developed Python-based machine learning solutions for medical
                  imaging and healthcare datasets, working with DICOM images and
                  clinical records to support diagnostic workflows[cite: 1].
                </li>
              </ul>
            </div>
          </section>

          {/* Enterprise Projects */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              Enterprise Projects[cite: 1]
            </h2>

            {/* Dandy: SendBlue */}
            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-primary">
                  Dandy: SendBlue SMS Training Confirmation Platform[cite: 1]
                </h3>
              </div>
              <p className="text-xs font-mono text-secondary mb-2">
                Workato, Salesforce, Sendblue, Gemini[cite: 1]
              </p>
              <p className="text-sm text-secondary mb-2">
                Owned the end-to-end design, development, testing, deployment,
                and production rollout of an automated SMS training confirmation
                platform for Dandy, enabling intelligent outreach, reminders,
                rescheduling, and AI-powered response processing[cite: 1].
              </p>
              <ul className="list-disc ml-4 text-sm space-y-1 text-primary">
                <li>
                  Designed and developed a custom SendBlue SDK Connector with
                  10+ reusable REST API actions, webhook triggers, and resilient
                  retry mechanisms for rate-limited (429) and transient
                  failures, enabling scalable SMS automation[cite: 1].
                </li>
                <li>
                  Engineered a timezone-aware scheduling engine that guaranteed
                  zero missed business-hour message deliveries by buffering and
                  orchestrating outbound communication according to each
                  recipient's local business hours[cite: 1].
                </li>
                <li>
                  Integrated the Gemini API to automatically classify inbound
                  SMS responses into Confirmed, Reschedule, and Unconfirmed
                  workflows, eliminating manual response triage and improving
                  operational efficiency[cite: 1].
                </li>
                <li>
                  Executed a zero-data-loss migration from the legacy SendBlue
                  workflow into Workato Version 2, designing deployment
                  safeguards, rollback planning, validation strategies, and
                  post-production monitoring[cite: 1].
                </li>
              </ul>
            </div>

            {/* Dandy: Forma AI */}
            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-primary">
                  Dandy: Forma AI Compensation Data Platform[cite: 1]
                </h3>
              </div>
              <p className="text-xs font-mono text-secondary mb-2">
                Workato, Salesforce, UKG, BigQuery, AWS[cite: 1]
              </p>
              <p className="text-sm text-secondary mb-2">
                Developed a scalable enterprise compensation data pipeline
                integrating Salesforce, UKG, Looker, Hex, Amazon S3, and
                BigQuery to support secure analytics and historical
                reporting[cite: 1].
              </p>
              <ul className="list-disc ml-4 text-sm space-y-1 text-primary">
                <li>
                  Designed secure cross-account AWS infrastructure using IAM
                  roles, inline policies, and Amazon S3 for enterprise-grade
                  data ingestion[cite: 1].
                </li>
                <li>
                  Reduced UKG pipeline execution time by 87% through SQL query
                  optimization and self-join restructuring[cite: 1].
                </li>
                <li>
                  Eliminated 90-minute workflow timeouts by implementing
                  asynchronous child functions across five Salesforce
                  objects[cite: 1].
                </li>
                <li>
                  Built BigQuery-powered historical snapshot workflows
                  supporting dynamic reporting across quarterly compensation
                  periods[cite: 1].
                </li>
              </ul>
            </div>

            {/* Fastly: O2C */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-primary">
                  Fastly: Order-to-Cash (O2C) Optimization[cite: 1]
                </h3>
              </div>
              <p className="text-xs font-mono text-secondary mb-2">
                Workato, LogiSense, NetSuite, SFDC[cite: 1]
              </p>
              <p className="text-sm text-secondary mb-2">
                Enhanced Fastly's Order-to-Cash integration platform by
                modernizing enterprise integrations across Salesforce,
                LogiSense, and NetSuite through reusable SDK development and
                workflow optimization[cite: 1].
              </p>
              <ul className="list-disc ml-4 text-sm space-y-1 text-primary">
                <li>
                  Built a reusable LogiSense SDK Connector with 20+ REST API
                  actions, eliminating 25+ monthly hours of API
                  maintenance[cite: 1].
                </li>
                <li>
                  Improved order processing performance by 30% through modular
                  connector architecture replacing direct HTTP integrations
                  across 40+ production workflows[cite: 1].
                </li>
                <li>
                  Resolved 10+ production-critical integration defects spanning
                  Salesforce, LogiSense, and NetSuite through systematic
                  root-cause analysis and production debugging[cite: 1].
                </li>
              </ul>
            </div>
          </section>

          {/* Technical Achievements */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Technical Achievements[cite: 1]
            </h2>

            <ul className="list-disc ml-4 text-sm space-y-1 text-primary">
              <li>
                Published research in the International Research Journal of
                Engineering and Technology (IRJET) on Big Data Privacy and
                Security, exploring secure data management and
                privacy-preserving techniques for large-scale systems[cite: 1].
              </li>
              <li>
                Solved 250+ algorithmic problems on LeetCode, strengthening
                expertise in Data Structures and Algorithms[cite: 1].
              </li>
              <li>
                Earned 4★ in Python and 5★ in C++ (Object-Oriented Programming)
                on HackerRank[cite: 1].
              </li>
            </ul>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Education[cite: 1]
            </h2>

            <div className="text-sm text-primary">
              <div className="flex justify-between items-baseline mb-1">
                <p className="font-bold">
                  Pimpri Chinchwad College of Engineering, Pune (PCCOE)[cite: 1]
                </p>
                <span className="text-xs font-mono text-secondary">
                  Dec 2021 – July 2025
                </span>
                [cite: 1]
              </div>
              <p className="text-secondary">
                Bachelor of Technology in Computer Engineering[cite: 1]
              </p>
              <p className="font-mono text-xs text-secondary mt-1">
                CGPA: 9.05 / 10[cite: 1]
              </p>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Certifications[cite: 1]
            </h2>

            <ul className="list-disc ml-4 text-sm space-y-1 text-primary">
              <li>
                Technical Developer, Automation Pro I, Automation Pro II, and
                Automation Pro III by Workato[cite: 1]
              </li>
              <li>
                Google Cloud Career Launchpad Generative AI Track by
                Google[cite: 1]
              </li>
              <li>
                Career Essentials in Software Development by Microsoft and
                LinkedIn[cite: 1]
              </li>
              <li>
                The Complete Python Bootcamp from Zero to Hero in Python on
                Udemy by Jose Portilla[cite: 1]
              </li>
            </ul>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
