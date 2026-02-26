import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre Mí' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollY = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollY) {
          setActive(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f0f1a]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="hover:scale-105 transition-transform"
          aria-label="Inicio"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            {/* Lines from center to peripheral nodes */}
            <line x1="16" y1="16" x2="7" y2="6" stroke="url(#nodeGrad)" strokeWidth="1.2" opacity="0.7" />
            <line x1="16" y1="16" x2="25" y2="7" stroke="url(#nodeGrad)" strokeWidth="1.2" opacity="0.7" />
            <line x1="16" y1="16" x2="26" y2="25" stroke="url(#nodeGrad)" strokeWidth="1.2" opacity="0.7" />
            <line x1="16" y1="16" x2="6" y2="26" stroke="url(#nodeGrad)" strokeWidth="1.2" opacity="0.7" />
            {/* Peripheral nodes */}
            <circle cx="7" cy="6" r="2.5" fill="url(#nodeGrad)" />
            <circle cx="25" cy="7" r="2" fill="url(#nodeGrad)" />
            <circle cx="26" cy="25" r="2.5" fill="url(#nodeGrad)" />
            <circle cx="6" cy="26" r="1.8" fill="url(#nodeGrad)" />
            {/* Central node */}
            <circle cx="16" cy="16" r="5" fill="url(#nodeGrad)" />
          </svg>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-sm font-medium transition-all duration-200 relative group ${
                active === id ? 'text-[#667eea]' : 'text-[#94a3b8] hover:text-[#e2e8f0]'
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-[#667eea] to-[#a855f7] transition-all duration-300 ${
                  active === id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#94a3b8] hover:text-[#e2e8f0] transition-colors p-1"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0f0f1a]/98 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-left text-base font-medium transition-colors py-2 border-b border-white/5 last:border-0 ${
                active === id ? 'text-[#667eea]' : 'text-[#94a3b8]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
