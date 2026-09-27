"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { LocalTimeClock } from './LocalTimeClock';

interface NavigationShellProps {
  children: React.ReactNode;
  interVariable: string;
  monoVariable: string;
}

export function NavigationShell({ children, interVariable, monoVariable }: NavigationShellProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <div className={`${interVariable} ${monoVariable} font-sans min-h-screen flex flex-col bg-background text-primary selection:bg-accent/30 selection:text-accent-light`}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-teal-300 to-indigo-400 origin-left z-50 no-print"
        style={{ scaleX }}
      />

      {/* Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/80 no-print">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-bold text-lg tracking-tight hover:opacity-90 transition-all flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
              <Terminal size={16} className="text-accent" />
            </div>
            <span>Vallabh Kulkarni</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 bg-surface/50 border border-border/60 rounded-full backdrop-blur-md">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-xs font-mono px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 relative ${
                    isActive ? 'text-accent font-semibold bg-background border border-border shadow-sm' : 'text-secondary hover:text-primary'
                  }`}
                >
                  <span className="text-[10px] opacity-40">0{i + 1}.</span>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Quick Contact CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-xs font-mono font-medium px-4 py-2 rounded-lg bg-accent text-background hover:bg-accent-light transition-all flex items-center gap-1 shadow-md shadow-accent/10"
            >
              Get in Touch <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-primary focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-surface/95 backdrop-blur-2xl border-b border-border px-6 py-6 flex flex-col gap-4 shadow-2xl">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-base font-mono transition-colors flex items-center gap-3 p-2 rounded-lg ${
                    isActive ? 'text-accent font-semibold bg-background border border-border' : 'text-secondary'
                  }`}
                >
                  <span className="text-xs opacity-50">0{i + 1}.</span>
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      <main className="flex-grow pt-16">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border/80 bg-surface/40 py-12 mt-28 no-print backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <p className="font-bold text-primary font-mono text-base flex items-center gap-2">
              <span>Vallabh Kulkarni</span>
              <span className="text-xs font-normal text-secondary border border-border px-2 py-0.5 rounded-full">Associate Software Engineer</span>
            </p>
            <p className="text-sm text-secondary max-w-md leading-relaxed">
              Architecting enterprise automations, AI engineering pipelines, and custom integration SDKs for high-growth tech companies.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <LocalTimeClock />
            <div className="flex items-center gap-5 text-xs font-mono text-secondary flex-wrap">
              <Link href="/certifications" className="hover:text-accent transition-colors">
                Certifications
              </Link>
              <Link href="/resume" className="hover:text-accent transition-colors">
                Resume
              </Link>
              <a
                href="https://linkedin.com/in/vallabhkul953"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/vallabhkulkarni953"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-border/40 text-center md:text-left text-xs text-secondary font-mono flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            &copy; {new Date().getFullYear()} Vallabh Kulkarni. All rights reserved.
          </div>
          <div className="text-tertiary">
            Built with Next.js 16, React 19 & Tailwind CSS
          </div>
        </div>
      </footer>
    </div>
  );
}