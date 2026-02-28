import React, { useEffect, useRef } from 'react';
import { Github, Mail, MapPin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Staggered entrance animation
    const elements = document.querySelectorAll('.hero-anim');
    elements.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + i * 120);
    });
  }, []);

  const scrollToProjects = () => {
    document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(102, 126, 234, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(168, 85, 247, 0.10) 0%, transparent 50%), #0f0f1a',
      }}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, #667eea, transparent)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-8" style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 ref={titleRef} className="hero-anim text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-[#e2e8f0]">
            Sergio Daniel<br />
            <span className="gradient-text">Aza Ocampo</span>
          </h1>

          <p className="hero-anim text-xl font-medium text-[#94a3b8] mb-2">
            Desarrollador · Fundador · Especialista en IA
          </p>

          <div className="hero-anim flex items-center justify-center lg:justify-start gap-2 text-[#94a3b8] text-sm mb-8">
            <MapPin size={14} className="text-[#667eea]" />
            <span>20 años · COL / BOGOTÁ · 4.7110° N, 74.0721° O</span>
          </div>

          <p className="hero-anim text-[#94a3b8] leading-relaxed max-w-xl mb-10 text-base lg:mx-0 mx-auto">
            Construyo aplicaciones móviles y sistemas full stack que resuelven problemas reales.
            Apasionado por la integración de IA, el desarrollo eficiente y el uso avanzado de herramientas modernas como{' '}
            <span className="text-[#667eea] font-medium">Claude Code</span>.
          </p>

          <div className="hero-anim flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button onClick={scrollToProjects} className="btn-primary">
              Ver Proyectos
            </button>
            <a
              href="https://github.com/sergioaza"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>

        {/* Profile photo placeholder / avatar */}
        <div className="hero-anim flex-shrink-0">
          <div className="relative w-64 h-64 lg:w-72 lg:h-72">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full animate-glow" style={{ background: 'linear-gradient(135deg, #667eea, #a855f7)', padding: '3px' }}>
              <div className="w-full h-full rounded-full bg-[#0f0f1a]" />
            </div>
            {/* Avatar content */}
            <div className="absolute inset-[3px] rounded-full overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center">
              <img
                src="/assets/Foto_Perfil.jpg"
                alt="Sergio Aza"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -right-4 top-8 glass-card px-3 py-2 flex items-center gap-2 text-xs font-medium text-[#e2e8f0] animate-float" style={{ animationDelay: '0s' }}>
              <span className="w-2 h-2 rounded-full bg-[#667eea]" />
              Engineering Prompting
            </div>
            <div className="absolute -left-8 bottom-12 glass-card px-3 py-2 flex items-center gap-2 text-xs font-medium text-[#e2e8f0] animate-float" style={{ animationDelay: '1.5s' }}>
              <span className="w-2 h-2 rounded-full bg-[#a855f7]" />
              Especialista en IA
            </div>
            <div className="absolute -right-2 bottom-4 glass-card px-3 py-2 flex items-center gap-2 text-xs font-medium text-[#e2e8f0] animate-float" style={{ animationDelay: '3s' }}>
              <span className="w-2 h-2 rounded-full bg-[#06b6d4]" />
              Creador de Apps Móviles
            </div>
            <div className="absolute -top-4 left-0 glass-card px-3 py-2 flex items-center gap-2 text-xs font-medium text-[#e2e8f0] animate-float" style={{ animationDelay: '0.75s' }}>
              <span className="w-2 h-2 rounded-full bg-green-400" />
              CEO & Fundador
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#94a3b8] hover:text-[#667eea] transition-colors animate-bounce"
      >
        <span className="text-xs">Scroll</span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
