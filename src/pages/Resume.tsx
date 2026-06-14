import React from 'react';
import { Printer, Download, ExternalLink } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export function Resume() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    alert(
      'In a production environment, this will download the actual PDF resume.'
    );
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 no-print bg-surface p-4 rounded-xl border border-border">
          <p className="text-sm font-mono text-secondary">
            &gt; resume.pdf
          </p>

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

        {/* Resume */}
        <div className="bg-surface p-8 md:p-12 border border-border shadow-sm rounded-xl print:bg-white print:text-black print:border-none print:shadow-none print:p-0">
          
          {/* Header */}
          <header className="border-b border-border pb-6 mb-6">
            <h1 className="text-3xl font-bold text-primary mb-2">
              Vallabh Kulkarni
            </h1>

            <p className="text-lg text-secondary mb-4">
              Associate Software Engineer • AI/ML Engineer • Automation Engineer
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary">
              <a
                href="https://vallabhkulkarni.com"
                className="flex items-center gap-1 hover:text-primary"
              >
                <ExternalLink size={14} />
                vallabhkulkarni.com
              </a>

              <a
                href="mailto:vallabhkul953@gmail.com"
                className="hover:text-primary"
              >
                vallabhkul953@gmail.com
              </a>

              <a
                href="https://linkedin.com/in/vallabhkul953"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/vallabhkulkarni953"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                GitHub
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Professional Summary
            </h2>

            <p className="text-sm leading-relaxed text-primary">
              Associate Software Engineer with experience building
              enterprise-scale automation systems, AI-powered workflows,
              and cloud data pipelines for Silicon Valley clients.
              Specialized in Workato, Salesforce, REST APIs, Python,
              and Generative AI. Proven track record of reducing
              operational overhead, accelerating
              pipeline execution, and delivering scalable
              solutions across automation, integration, and machine
              learning domains.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              Experience
            </h2>

            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-bold text-primary">OneSolve</h3>
                <span className="text-sm text-secondary">
                  Aug 2024 – Present
                </span>
              </div>

              <p className="text-sm font-medium italic text-secondary mb-2">
                Associate Software Engineer
              </p>

              <ul className="list-disc ml-4 text-sm space-y-1 text-primary">
                <li>
                  Eliminated 25+ hours/month of maintenance overhead through custom SDK connector development.
                </li>
                <li>
                  Reduced order processing time by 30% by optimizing enterprise integrations.
                </li>
                <li>
                  Resolved critical production issues across Salesforce, NetSuite, and LogiSense environments.
                </li>
                <li>
                  Built Recipe Doctor, an AI-powered monitoring and remediation platform.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-bold text-primary">OneSolve</h3>
                <span className="text-sm text-secondary">
                  Nov 2023 – Aug 2024
                </span>
              </div>

              <p className="text-sm font-medium italic text-secondary mb-2">
                Software Engineer Intern
              </p>

              <ul className="list-disc ml-4 text-sm space-y-1 text-primary">
                <li>
                  Earned all four Workato certifications within the first 90 days.
                </li>
                <li>
                  Developed LLM-powered automation workflows using Gemini AI.
                </li>
                <li>
                  Co-developed Salesbot for Slack and Salesforce CRM automation.
                </li>
              </ul>
            </div>
          </section>

          {/* Key Achievements */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Key Achievements
            </h2>

            <ul className="list-disc ml-4 text-sm space-y-1 text-primary">
              <li>Reduced enterprise pipeline execution time by 87%.</li>
              <li>Saved 25+ hours of monthly operational effort.</li>
              <li>Solved 250+ LeetCode problems.</li>
              <li>4-Star Python and 5-Star C++ on HackerRank.</li>
              <li>Promoted to Associate Software Engineer within one year.</li>
              <li>Published multiple research papers in AI and Data Security.</li>
            </ul>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Technical Skills
            </h2>

            <div className="text-sm text-primary space-y-2">
              <p>
                <span className="font-bold">Languages:</span> Python, SQL, C++, HTML/CSS
              </p>

              <p>
                <span className="font-bold">AI & Machine Learning:</span> Deep Learning,
                Machine Learning, Gemini AI, Prompt Engineering,
                vLLM, Deepeval
              </p>

              <p>
                <span className="font-bold">Automation & Integration:</span> Workato,
                Salesforce, REST APIs, SDK Development,
                Webhooks, MCP
              </p>

              <p>
                <span className="font-bold">Cloud & Data:</span> AWS, Amazon S3,
                BigQuery, Google Cloud, MySQL, MongoDB
              </p>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Education
            </h2>

            <div className="text-sm text-primary">
              <p className="font-bold">
                Bachelor of Technology in Computer Engineering
              </p>

              <p>
                Pimpri Chinchwad College of Engineering (PCCOE), Pune
              </p>

              <p>
                CGPA: 9.05 / 10
              </p>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Certifications
            </h2>

            <ul className="list-disc ml-4 text-sm space-y-1 text-primary">
              <li>Workato Automation Pro I</li>
              <li>Workato Automation Pro II</li>
              <li>Workato Automation Pro III</li>
              <li>Workato Technical Developer</li>
              <li>Google Cloud Generative AI Track</li>
              <li>ChatGPT Prompt Engineering for Developers</li>
            </ul>
          </section>

          {/* Research */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Research Publications
            </h2>

            <ul className="list-disc ml-4 text-sm space-y-3 text-primary">
              <li>
                <strong>
                  Big Data: Privacy and Security Aspects
                </strong>
                <br />
                International Research Journal of Engineering and Technology
              </li>

              <li>
                <strong>
                  Optimized Deep Learning Approach for Pneumonia Detection Using Chest X-Ray Images
                </strong>
                <br />
                Deep learning based medical imaging research focused on
                automated pneumonia diagnosis and classification using
                chest X-ray images.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}