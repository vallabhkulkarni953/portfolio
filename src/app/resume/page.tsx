"use client";

import {
  Printer,
  Download,
  ExternalLink,
  Phone,
  Mail,
  Linkedin,
  Github,
  FileText
} from "lucide-react";
import { PageTransition } from "@/src/components/PageTransition";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 no-print glass-panel p-4 rounded-2xl border border-border">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-accent" />
            <p className="text-xs font-mono text-secondary">Vallabh_Kulkarni_Resume.pdf</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto font-mono text-xs">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-background border border-border rounded-lg font-medium hover:border-accent transition-all text-primary"
            >
              <Printer size={15} />
              Print Web Resume
            </button>

            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2 bg-accent text-background rounded-lg font-bold hover:bg-accent-light transition-all shadow-md shadow-accent/10"
            >
              <Download size={15} />
              Download PDF
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="glass-panel p-8 md:p-12 border border-border shadow-2xl rounded-2xl print:bg-white print:text-black print:border-none print:shadow-none print:p-0">
          {/* Header */}
          <header className="border-b border-border/80 pb-6 mb-8 print:border-black">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 print:text-black">
              Vallabh Kulkarni
            </h1>

            <p className="text-base md:text-lg text-accent font-mono mb-4 print:text-gray-800 font-semibold">
              Associate Software Engineer | Enterprise Automation & AI Systems
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm text-secondary print:text-gray-700 font-mono">
              <span className="flex items-center gap-1.5 text-primary print:text-black">
                <Phone size={14} className="text-accent print:text-black" />
                +91 9022984857
              </span>

              <a
                href="mailto:vallabhkul953@gmail.com"
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Mail size={14} className="text-accent print:text-black" />
                vallabhkul953@gmail.com
              </a>

              <a
                href="https://linkedin.com/in/vallabhkul953"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Linkedin size={14} className="text-accent print:text-black" />
                linkedin.com/in/vallabhkul953
              </a>

              <a
                href="https://github.com/vallabhkulkarni953"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Github size={14} className="text-accent print:text-black" />
                github.com/vallabhkulkarni953
              </a>

              <a
                href="https://vallabhkulkarni.com"
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <ExternalLink size={14} className="text-accent print:text-black" />
                vallabhkulkarni.com
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent font-mono mb-3 print:text-black">
              Professional Summary
            </h2>

            <p className="text-sm leading-relaxed text-secondary print:text-black">
              Software Engineer with hands-on enterprise experience building workflow automation, backend SDK integrations, and scalable API-driven data pipelines. Delivered production-ready systems using Python, Workato, Salesforce, AWS, BigQuery, and Gemini API to increase reliability, performance, and business outcomes.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent font-mono mb-3 print:text-black">
              Technical Skills
            </h2>

            <div className="text-xs md:text-sm text-secondary space-y-2 print:text-black font-mono">
              <p>
                <span className="font-bold text-primary print:text-black">Languages:</span> Python, SQL, TypeScript, JavaScript
              </p>
              <p>
                <span className="font-bold text-primary print:text-black">Integration & Automation:</span> Workato SDK Connectors, Salesforce (SFDC), LogiSense, NetSuite, REST APIs, Webhooks
              </p>
              <p>
                <span className="font-bold text-primary print:text-black">Cloud & Infrastructure:</span> AWS (S3, IAM Roles, Policies), BigQuery, Looker, Hex
              </p>
              <p>
                <span className="font-bold text-primary print:text-black">AI & LLMs:</span> Gemini API, MCP, Structured Prompt Engineering, Deep Learning
              </p>
              <p>
                <span className="font-bold text-primary print:text-black">Databases & Tools:</span> MySQL, MongoDB, BigQuery, Git, Postman, VS Code
              </p>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent font-mono mb-4 print:text-black">
              Professional Experience
            </h2>

            {/* OneSolve */}
            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-primary text-base print:text-black">OneSolve</h3>
                <span className="text-xs font-mono text-secondary print:text-gray-600">
                  California, USA (Remote)
                </span>
              </div>

              <div className="flex justify-between items-baseline mb-1">
                <p className="text-xs font-mono text-accent print:text-black">
                  Associate Software Engineer
                </p>
                <span className="text-xs font-mono text-secondary print:text-gray-600">
                  Aug 2024 – Present
                </span>
              </div>

              <div className="flex justify-between items-baseline mb-3">
                <p className="text-xs font-mono text-secondary italic">
                  Software Engineer Intern
                </p>
                <span className="text-xs font-mono text-secondary print:text-gray-600">
                  Nov 2023 – Aug 2024
                </span>
              </div>

              <ul className="list-disc ml-4 text-xs md:text-sm space-y-1.5 text-secondary print:text-black">
                <li>
                  Developed enterprise automation solutions, backend integrations, and scalable workflow systems using Python, Workato, Salesforce, AWS, BigQuery, and REST APIs.
                </li>
                <li>
                  Built and enhanced 5+ enterprise automation workflows, maintaining 25+ production recipes while improving system reliability and operational efficiency.
                </li>
                <li>
                  Designed, developed, and maintained 5 SDK connectors (2 new, 3 enhanced) to standardize enterprise integrations and eliminate 25+ hours of monthly maintenance.
                </li>
                <li>
                  Delivered 6 major production releases across enterprise integration platforms, managing testing, deployment, safeguards, and issue resolution.
                </li>
                <li>
                  Partnered with Silicon Valley clients including Fastly and Dandy to deliver high-volume production integrations across CRM, ERP, and cloud platforms.
                </li>
              </ul>
            </div>

            {/* MediMaze Solutions */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-primary text-base print:text-black">
                  MediMaze Solutions Pvt. Ltd.
                </h3>
                <span className="text-xs font-mono text-secondary print:text-gray-600">
                  Pune, India
                </span>
              </div>

              <div className="flex justify-between items-baseline mb-3">
                <p className="text-xs font-mono text-secondary italic">
                  Data Science Intern
                </p>
                <span className="text-xs font-mono text-secondary print:text-gray-600">
                  Jun 2023 – Oct 2023
                </span>
              </div>

              <ul className="list-disc ml-4 text-xs md:text-sm space-y-1.5 text-secondary print:text-black">
                <li>
                  Developed Python-based machine learning solutions for medical imaging and healthcare datasets using DICOM files to support diagnostic workflows.
                </li>
              </ul>
            </div>
          </section>

          {/* Key Accomplishments */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent font-mono mb-3 print:text-black">
              Achievements & Certifications
            </h2>

            <ul className="list-disc ml-4 text-xs md:text-sm space-y-1.5 text-secondary print:text-black">
              <li>
                Workato Certified: Technical Developer, Automation Pro I, Automation Pro II, and Automation Pro III.
              </li>
              <li>
                Published research in International Research Journal of Engineering and Technology (IRJET) on Big Data Privacy and Security.
              </li>
              <li>
                Solved 250+ algorithmic problems on LeetCode. 4★ in Python & 5★ in C++ on HackerRank.
              </li>
            </ul>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent font-mono mb-3 print:text-black">
              Education
            </h2>

            <div className="text-xs md:text-sm text-secondary print:text-black">
              <div className="flex justify-between items-baseline mb-1">
                <p className="font-bold text-primary print:text-black">
                  Pimpri Chinchwad College of Engineering (PCCOE Pune)
                </p>
                <span className="text-xs font-mono text-secondary print:text-gray-600">
                  Dec 2021 – Jul 2025
                </span>
              </div>
              <p>Bachelor of Technology in Computer Engineering (CGPA: 9.05 / 10)</p>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
