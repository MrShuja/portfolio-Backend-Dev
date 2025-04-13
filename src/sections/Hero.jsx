import React from 'react';
import heroImage from '../assets/hero_dev.svg'; // You can use a dev illustration from undraw.co

export default function Hero() {
  return (
    <section id="home" className="bg-background text-textPrimary min-h-screen flex items-center px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">Hi, I'm Shuja.</h1>
          <p className="text-lg max-w-xl">
            I'm a <span className="text-accent">backend developer</span> who specializes in building robust APIs and database systems using Node.js, Express.js, and MySQL. I focus on writing clean, secure, and scalable code.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <span className="bg-card px-3 py-1 rounded text-sm border border-border">Node.js</span>
            <span className="bg-card px-3 py-1 rounded text-sm border border-border">Express.js</span>
            <span className="bg-card px-3 py-1 rounded text-sm border border-border">MySQL</span>
            <span className="bg-card px-3 py-1 rounded text-sm border border-border">RESTful APIs</span>
            <span className="bg-card px-3 py-1 rounded text-sm border border-border">MySQL Workbench</span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#portfolio" className="bg-accent text-white px-6 py-2 rounded shadow hover:bg-accentSecondary transition">📄 View Projects</a>
            <a href="#contact" className="border border-accent text-accent px-6 py-2 rounded shadow hover:bg-accent hover:text-white transition">📬 Contact Me</a>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="Developer Illustration" className="w-64 md:w-96" />
        </div>
      </div>
    </section>
  );
}