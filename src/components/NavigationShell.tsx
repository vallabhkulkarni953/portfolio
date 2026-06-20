"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <div className={`${interVariable} ${monoVariable} font-sans min-h-screen flex flex-col bg-background text-primary`}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50 no-print"
        style={{ scaleX }}
      />

      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border no-print">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity"
          >
            Vallabh Kulkarni
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-mono transition-colors flex items-center gap-2 ${
                    isActive ? 'text-accent' : 'text-secondary hover:text-primary'
                  }`}
                >
                  <span className="text-xs opacity-50">0{i + 1}.</span>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-surface border-b border-border px-6 py-4 flex flex-col gap-4 shadow-lg">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-base font-mono transition-colors flex items-center gap-3 ${
                    isActive ? 'text-accent' : 'text-secondary'
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

      <footer className="border-t border-border py-12 mt-24 no-print">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold text-primary font-mono text-sm">
              Vallabh Kulkarni
            </p>
            <p className="text-sm text-secondary mt-2 max-w-md">
              Software Engineer building intelligent systems, automation
              pipelines, and scalable products.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm font-mono text-secondary">
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
        <div className="max-w-6xl mx-auto px-6 mt-8 text-center md:text-left text-xs text-secondary font-mono">
          &copy; {new Date().getFullYear()} Vallabh Kulkarni. Built with Next.js &
          Tailwind.
        </div>
      </footer>
    </div>
  );
}