import React from 'react';
import aboutImage from '../assets/about_dev.svg'; // Place a relevant SVG in assets folder

export default function About() {
  return (
    <section id="about" className="bg-background text-textPrimary py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            I’m a backend developer with hands-on experience in building RESTful APIs using Node.js and Express.js. I work with MySQL databases and tools like MySQL Workbench to design, query, and optimize database systems. I am passionate about clean code, efficient performance, and scalable backend logic.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={aboutImage} alt="Backend Developer Illustration" className="w-64 md:w-96" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-12 space-y-4 text-center md:text-left">
        <h3 className="text-2xl font-semibold">What I Focus On:</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Designing scalable REST APIs</li>
          <li>Database modeling and schema optimization</li>
          <li>Authentication with JWT</li>
          <li>Secure and optimized query handling</li>
          <li>Backend deployment and environment management</li>
        </ul>
      </div>
    </section>
  );
}