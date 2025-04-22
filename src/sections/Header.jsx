import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { headerContent } from '../data/contents.js';
import { useActiveSection } from '../hooks/useActiveSection.js';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(headerContent.navLinks.map(link => link.href.slice(1)));

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background text-textPrimary px-4 py-4 shadow-md border-b border-border">

      <div className="px-4 md:px-6 lg:px-20 flex justify-between items-center">
        <div className="text-xl font-bold">{headerContent.name}</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {headerContent.navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className={`relative group hover:text-accent ${activeSection === link.href.slice(1) ? 'text-accent' : ''}`}
            >
              {link.name}
              <span className={`absolute left-0 -bottom-1 h-0.5 bg-accent transition-all ${activeSection === link.href.slice(1) ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-textPrimary" /> : <Menu className="text-textPrimary" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background text-textPrimary px-4 pt-4 pb-2 space-y-2">
          {headerContent.navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="block relative group hover:text-accent"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-accent transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}