"use client";

import { useState } from 'react';
import { Terminal, CornerDownLeft, Copy, Check } from 'lucide-react';

interface CommandOutput {
  command: string;
  response: React.ReactNode;
}

export function TerminalWidget() {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'init --profile',
      response: (
        <div className="space-y-1.5 text-xs font-mono text-secondary">
          <p className="text-accent font-semibold">Vallabh Kulkarni Shell v2.4.0</p>
          <p>Software Engineer | Enterprise Automation | AI Systems</p>
          <p className="text-tertiary">Type <span className="text-accent">'help'</span> or click buttons below for available commands.</p>
        </div>
      )
    }
  ]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let res: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        res = (
          <div className="space-y-1 text-xs font-mono text-secondary">
            <p className="text-primary font-semibold">Available commands:</p>
            <p><span className="text-accent font-bold">skills</span>      - View technical stack & certifications</p>
            <p><span className="text-accent font-bold">metrics</span>     - View production engineering impact</p>
            <p><span className="text-accent font-bold">experience</span>  - View career timeline & companies</p>
            <p><span className="text-accent font-bold">contact</span>     - View email & social profiles</p>
            <p><span className="text-accent font-bold">clear</span>       - Clear terminal screen</p>
          </div>
        );
        break;
      case 'skills':
        res = (
          <div className="space-y-1.5 text-xs font-mono text-secondary">
            <p><span className="text-primary font-bold">Languages:</span> Python, SQL, TypeScript, JavaScript, HTML/CSS</p>
            <p><span className="text-primary font-bold">Automation & SDK:</span> Workato (4x Certifications), Salesforce, LogiSense, REST APIs</p>
            <p><span className="text-primary font-bold">AI & Cloud:</span> Gemini API, BigQuery, AWS S3 & IAM, Vertex AI, Prompt Engineering</p>
            <p><span className="text-primary font-bold">Databases:</span> MySQL, BigQuery, MongoDB</p>
          </div>
        );
        break;
      case 'metrics':
        res = (
          <div className="grid grid-cols-2 gap-2 text-xs font-mono py-1">
            <div className="p-2 rounded bg-surface border border-border">⚡ <span className="text-accent font-bold">-87%</span> UKG Pipeline Time</div>
            <div className="p-2 rounded bg-surface border border-border">⏱️ <span className="text-accent font-bold">25+ hrs/mo</span> Saved via Custom SDKs</div>
            <div className="p-2 rounded bg-surface border border-border">🚀 <span className="text-accent font-bold">+30%</span> Order Processing Speed</div>
            <div className="p-2 rounded bg-surface border border-border">📜 <span className="text-accent font-bold">4x</span> Workato Certifications</div>
          </div>
        );
        break;
      case 'experience':
        res = (
          <div className="space-y-1.5 text-xs font-mono text-secondary">
            <p><span className="text-accent font-bold">OneSolve</span> — Associate Software Engineer (Aug 2024 - Present)</p>
            <p><span className="text-accent font-bold">OneSolve</span> — Software Engineer Intern (Nov 2023 - Aug 2024)</p>
            <p><span className="text-accent font-bold">MediMaze Solutions</span> — Data Science Intern (Jun 2023 - Oct 2023)</p>
          </div>
        );
        break;
      case 'contact':
        res = (
          <div className="space-y-1 text-xs font-mono text-secondary">
            <p>📧 Email: <a href="mailto:vallabhkul953@gmail.com" className="text-accent underline">vallabhkul953@gmail.com</a></p>
            <p>💼 LinkedIn: <a href="https://linkedin.com/in/vallabhkul953" target="_blank" rel="noreferrer" className="text-accent underline">linkedin.com/in/vallabhkul953</a></p>
            <p>💻 GitHub: <a href="https://github.com/vallabhkulkarni953" target="_blank" rel="noreferrer" className="text-accent underline">github.com/vallabhkulkarni953</a></p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        res = (
          <p className="text-xs font-mono text-rose-400">
            Command not recognized: '{cleanCmd}'. Type <span className="text-accent underline cursor-pointer" onClick={() => handleCommand('help')}>'help'</span> for options.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, response: res }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vallabhkul953@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full glass-panel rounded-2xl overflow-hidden border border-border shadow-2xl">
      {/* Terminal Window Header */}
      <div className="px-4 py-3 bg-surface border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-tertiary flex items-center gap-1.5">
            <Terminal size={12} className="text-accent" /> vallabh@portfolio ~ bash
          </span>
        </div>
        <button
          onClick={handleCopyEmail}
          className="text-xs font-mono text-secondary hover:text-accent flex items-center gap-1 transition-colors px-2 py-1 rounded hover:bg-background border border-transparent hover:border-border"
        >
          {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
          {copied ? 'Copied!' : 'Copy Email'}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-xs space-y-4 max-h-[320px] overflow-y-auto bg-background/90">
        {history.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center gap-2 text-accent">
              <span className="text-secondary">$</span>
              <span>{item.command}</span>
            </div>
            <div className="pl-4">{item.response}</div>
          </div>
        ))}

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2 border-t border-border/40">
          <span className="text-accent font-bold">&gt;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or click quick options below..."
            className="flex-1 bg-transparent border-none outline-none text-primary font-mono text-xs placeholder:text-tertiary"
          />
          <button type="submit" aria-label="Run command" className="text-tertiary hover:text-accent">
            <CornerDownLeft size={14} />
          </button>
        </form>
      </div>

      {/* Quick Command Buttons */}
      <div className="px-4 py-2.5 bg-surface/90 border-t border-border flex flex-wrap gap-2 text-[11px] font-mono">
        {['skills', 'metrics', 'experience', 'contact', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2.5 py-1 rounded bg-background border border-border text-secondary hover:text-accent hover:border-accent/40 transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
