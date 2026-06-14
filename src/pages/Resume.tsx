import React from 'react';
import { Printer, Download, ExternalLink } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
export function Resume() {
  const handlePrint = () => {
    window.print();
  };
  const handleDownload = () => {
    // In a real app, this would point to a real PDF file.
    alert(
      'In a production environment, this will download the actual PDF resume.'
    );
  };
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Actions Bar (No Print) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 no-print bg-surface p-4 rounded-xl border border-border">
          <p className="text-sm font-mono text-secondary">
            &gt; view resume.pdf
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto font-mono">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-background border border-border rounded-md text-sm font-medium hover:border-accent transition-colors text-primary">
              
              <Printer size={16} /> Print
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary text-background rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
              
              <Download size={16} /> Download
            </button>
          </div>
        </div>

        {/* Resume Document */}
        <div className="bg-surface p-8 md:p-12 border border-border shadow-sm rounded-xl print:bg-white print:text-black print:border-none print:shadow-none print:p-0">
          {/* Header */}
          <header className="border-b border-border pb-6 mb-6">
            <h1 className="text-3xl font-bold text-primary mb-2">
              Vallabh Kulkarni
            </h1>
            <p className="text-lg text-secondary mb-4">
              Associate Software Engineer | AI/ML Engineer | Automation
              Architect
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary">
              <a
                href="https://vallabhkulkarni.com"
                className="flex items-center gap-1 hover:text-primary">
                
                <ExternalLink size={14} /> vallabhkulkarni.com
              </a>
              <a
                href="mailto:contact@vallabhkulkarni.com"
                className="hover:text-primary">
                
                contact@vallabhkulkarni.com
              </a>
              <a href="https://linkedin.com" className="hover:text-primary">
                LinkedIn
              </a>
              <a href="https://github.com" className="hover:text-primary">
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
              Software Engineer specializing in Enterprise Automation, AI
              Engineering, and scalable data pipelines. Proven track record of
              reducing operational overhead by 25+ hours monthly and
              accelerating processing times by up to 87%. Certified Workato
              expert with experience building secure, multi-cloud architectures
              and LLM-powered workflows for enterprise clients.
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
              <ul className="list-disc list-outside ml-4 text-sm space-y-1 text-primary">
                <li>
                  Promoted within 12 months of joining based on performance and
                  impact.
                </li>
                <li>
                  Eliminated 25+ hours of monthly maintenance overhead by
                  optimizing legacy automation systems.
                </li>
                <li>
                  Reduced order processing cycle times by 30% through
                  streamlined API integrations.
                </li>
                <li>
                  Resolved 10+ critical production issues for Silicon Valley
                  enterprise clients.
                </li>
                <li>
                  Architected and built the AI-powered Recipe Doctor monitoring
                  platform.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-bold text-primary">OneSolve</h3>
                <span className="text-sm text-secondary">
                  Nov 2023 – Aug 2024
                </span>
              </div>
              <p className="text-sm font-medium italic text-secondary mb-2">
                Software Engineer Intern
              </p>
              <ul className="list-disc list-outside ml-4 text-sm space-y-1 text-primary">
                <li>
                  Earned all Workato certifications (Pro I, II, III, and
                  Technical Developer).
                </li>
                <li>
                  Built LLM-powered automation pipelines integrating Gemini AI
                  with enterprise CRMs.
                </li>
                <li>
                  Developed Salesbot, a custom Slack-to-Salesforce automation
                  platform improving sales productivity.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-bold text-primary">MediMaze Solutions</h3>
                <span className="text-sm text-secondary">
                  Jun 2023 – Oct 2023
                </span>
              </div>
              <p className="text-sm font-medium italic text-secondary mb-2">
                Data Science Intern
              </p>
              <ul className="list-disc list-outside ml-4 text-sm space-y-1 text-primary">
                <li>
                  Developed deep learning solutions for medical imaging
                  analysis.
                </li>
                <li>
                  Improved model accuracy by 15% through advanced data
                  preprocessing and hyperparameter tuning.
                </li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Technical Skills
            </h2>
            <div className="text-sm text-primary space-y-2">
              <p>
                <span className="font-bold">Software Engineering:</span> Python,
                SQL, C++, REST APIs, System Design, OOP
              </p>
              <p>
                <span className="font-bold">AI & Machine Learning:</span> Deep
                Learning, Machine Learning, Prompt Engineering, Gemini AI, vLLM,
                Deepeval
              </p>
              <p>
                <span className="font-bold">Automation:</span> Workato, SDK
                Development, Salesforce, Webhooks, MCP
              </p>
              <p>
                <span className="font-bold">Cloud & Tools:</span> AWS, BigQuery,
                Amazon S3, Google Cloud, Git, VS Code, Postman
              </p>
            </div>
          </section>

          {/* Education & Certs */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Education & Certifications
            </h2>
            <div className="text-sm text-primary space-y-2">
              <p>
                <span className="font-bold">CGPA:</span> 9.05
              </p>
              <p>
                <span className="font-bold">Certifications:</span> Workato
                Automation Pro I-III, Workato Technical Developer, Google Cloud
                Generative AI Track, ChatGPT Prompt Engineering
              </p>
              <p>
                <span className="font-bold">Publications:</span> "Big Data:
                Privacy and Security Aspects" (International Research Journal of
                Engineering and Technology)
              </p>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>);

}