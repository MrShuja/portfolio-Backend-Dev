import React, { useEffect, useRef } from 'react';
import { animateOnScroll } from './animations/animateOnScroll.js';
import { portfolioContent } from '../data/contents';
import { animateBottomBorder } from './animations/AnimateBottomBorder.js';

export default function Portfolio() {
     const headingRef = useRef(null);
  useEffect(() => {
    if (headingRef.current) animateBottomBorder(headingRef.current);
    const elements = document.querySelectorAll('.animate-on-scroll');
    animateOnScroll(elements);
  }, []);

  return (
    <section id="portfolio" className="bg-background text-textPrimary  px-6 py-16 border-b border-border">
      <div className="max-w-7xl mx-auto animate-on-scroll opacity-0">
        <h2 className="text-3xl font-bold mb-2 relative inline-block" ref={headingRef}>
          Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {portfolioContent.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow hover:shadow-lg transition duration-300 animate-on-scroll opacity-0"
            >
              <h3 className="text-xl font-semibold mb-2 text-accent">{project.title}</h3>
              <p className="text-sm text-textPrimary mb-4">{project.description}</p>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto bg-accent text-white px-4 py-2 rounded hover:bg-accentSecondary transition"
              >
                🔗 View Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
