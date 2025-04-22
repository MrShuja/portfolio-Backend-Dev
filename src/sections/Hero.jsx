import React, { useEffect } from 'react';
import heroImage from '../assets/hero_dev.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { heroContent } from '../data/contents.js';
import { animateOnScroll } from './animations/animateOnScroll.js';

export default function Hero() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    animateOnScroll(elements);
  }, []);

  const whatsappLink = `https://wa.me/${heroContent.whatsappNumber}`;

  return (
    <section id="home" className="bg-background text-textPrimary min-h-screen flex items-center px-4 py-16 border-b border-border">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 animate-on-scroll opacity-0">
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">{heroContent.heading}</h1>
          <p className="text-lg max-w-xl">{heroContent.description}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {heroContent.skills.map((skill, i) => (
              <span key={i} className="bg-card px-3 py-1 rounded text-sm border border-border">{skill}</span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href={heroContent.projectsLink} className="bg-accent text-white px-6 py-2 rounded shadow hover:bg-accentSecondary transition">📄 View Projects</a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2 rounded shadow hover:bg-green-600 transition flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" /> WhatsApp
            </a>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="Developer Illustration" className="w-64 md:w-96" />
        </div>
      </div>
    </section>
  );
}
