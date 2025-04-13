import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background text-textPrimary px-4 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">YourName</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-accent">Home</a>
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#portfolio" className="hover:text-accent">Portfolio</a>
          <a href="#testimonials" className="hover:text-accent">Testimonials</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-textPrimary" /> : <Menu className="text-textPrimary" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background text-textPrimary px-4 pt-4 pb-2 space-y-2">
          <a href="#home" className="block hover:text-accent">Home</a>
          <a href="#about" className="block hover:text-accent">About</a>
          <a href="#portfolio" className="block hover:text-accent">Portfolio</a>
          <a href="#testimonials" className="block hover:text-accent">Testimonials</a>
          <a href="#contact" className="block hover:text-accent">Contact</a>
        </div>
      )}
    </header>
  );
}