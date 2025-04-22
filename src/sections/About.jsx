import React, { useEffect, useRef } from 'react';
import aboutImage from '../assets/about_dev.svg';
import { aboutContent } from '../data/contents.js';
import { animateBottomBorder } from './animations/AnimateBottomBorder';
import { animateOnScroll } from './animations/animateOnScroll.js';

export default function About() {
  const headingRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) animateBottomBorder(headingRef.current);
    if (sectionRef.current) animateOnScroll(sectionRef.current.querySelectorAll('.animate-on-scroll'));
  }, []);

  return (
    <section id="about" className="bg-background text-textPrimary py-16 px-4" ref={sectionRef}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-2 relative inline-block" ref={headingRef}>{aboutContent.heading}</h2>
          <p className="text-lg leading-relaxed animate-on-scroll opacity-0 pt-8">{aboutContent.description}</p>
        </div>
        <div className="flex justify-center animate-on-scroll opacity-0 pt-8">
          <img src={aboutImage} alt="Backend Developer Illustration" className="w-64 md:w-96" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-12 space-y-4 text-center md:text-left">
        <h3 className="text-2xl font-semibold animate-on-scroll opacity-0">What I Focus On:</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          {aboutContent.focus.map((item, idx) => (
            <li key={idx} className="animate-on-scroll opacity-0">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
