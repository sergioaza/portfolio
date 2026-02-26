import React from 'react';
import { GraduationCap, Cpu, Rocket, Target, Building2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="sobre-mi" className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 50%, #0f0f1a 100%)' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className="section-title gradient-text animate-on-scroll">Sobre Mí</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main bio card */}
          <div className="lg:col-span-2 glass-card p-8 animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#667eea]/20 flex items-center justify-center">
                <Rocket size={20} className="text-[#667eea]" />
              </div>
              <h3 className="text-xl font-semibold text-[#e2e8f0]">¿Quién soy?</h3>
            </div>
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              Soy desarrollador Full Stack con enfoque en aplicaciones móviles Android y sistemas backend robustos.
              Me especializo en construir soluciones completas: desde la base de datos hasta la interfaz de usuario,
              integrando APIs externas, servicios en la nube y modelos de inteligencia artificial.
            </p>
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              Actualmente curso el <span className="text-[#e2e8f0] font-medium">7mo semestre de Ingeniería de Sistemas</span> en la
              Universidad de Bogotá Jorge Tadeo Lozano, donde combino la academia con proyectos reales
              ya desplegados en producción.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              Mi diferenciador actual es el <span className="text-[#667eea] font-medium">dominio avanzado de Claude Code</span> y
              herramientas de IA para desarrollo — lo que me permite construir proyectos complejos
              con una velocidad y calidad que antes tomaría meses.
            </p>
          </div>

          {/* Education card */}
          <div className="glass-card p-8 animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#a855f7]/20 flex items-center justify-center">
                <GraduationCap size={20} className="text-[#a855f7]" />
              </div>
              <h3 className="text-xl font-semibold text-[#e2e8f0]">Educación</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[#e2e8f0] font-medium">Ingeniería de Sistemas</p>
                <p className="text-[#667eea] text-sm font-medium mt-1">Universidad Jorge Tadeo Lozano</p>
                <p className="text-[#94a3b8] text-sm mt-1">Bogotá, Colombia · 7mo Semestre</p>
                <div className="mt-3 w-full bg-white/5 rounded-full h-1.5">
                  <div className="h-1.5 rounded-full bg-gradient-to-r from-[#667eea] to-[#a855f7]" style={{ width: '78%' }} />
                </div>
                <p className="text-[#94a3b8] text-xs mt-1">Progreso: 7 / 9 semestres</p>
              </div>
            </div>
          </div>

          {/* AI / Claude Code focus */}
          <div className="glass-card p-8 border border-[#667eea]/20 animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#06b6d4]/20 flex items-center justify-center">
                <Cpu size={20} className="text-[#06b6d4]" />
              </div>
              <h3 className="text-xl font-semibold text-[#e2e8f0]">Enfoque Actual</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Claude Code avanzado', color: '#667eea' },
                { label: 'Agentes de IA con Claude API', color: '#a855f7' },
                { label: 'Desarrollo asistido por IA', color: '#06b6d4' },
                { label: 'Prompt engineering', color: '#667eea' },
                { label: 'CI/CD + Cloud deployment', color: '#a855f7' },
              ].map(({ label, color }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                  <span className="text-[#94a3b8] text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Entrepreneurship vision */}
          <div className="glass-card p-8 border border-[#a855f7]/20 animate-on-scroll" style={{ transitionDelay: '0.4s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#a855f7]/20 flex items-center justify-center">
                <Building2 size={20} className="text-[#a855f7]" />
              </div>
              <h3 className="text-xl font-semibold text-[#e2e8f0]">Visión Emprendedora</h3>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
              Mi objetivo no es solo ser un buen desarrollador — es construir mi propia empresa de tecnología.
              Quiero crear productos que resuelvan problemas reales para personas reales.
            </p>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              <span className="text-[#a855f7] font-medium">AlertaInf</span> es mi primer paso activo:
              una startup que estoy desarrollando y validando mientras termino mi carrera.
            </p>
          </div>

          {/* Soft skills */}
          <div className="lg:col-span-2 glass-card p-8 animate-on-scroll" style={{ transitionDelay: '0.5s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#667eea]/20 flex items-center justify-center">
                <Target size={20} className="text-[#667eea]" />
              </div>
              <h3 className="text-xl font-semibold text-[#e2e8f0]">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { emoji: '🤝', label: 'Trabajo en equipo' },
                { emoji: '🧩', label: 'Resolución de problemas' },
                { emoji: '⚡', label: 'Aprendizaje rápido' },
                { emoji: '📊', label: 'Pensamiento analítico' },
              ].map(({ emoji, label }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-white/3 hover:bg-white/6 transition-colors">
                  <span className="text-2xl">{emoji}</span>
                  <p className="text-[#94a3b8] text-sm mt-2 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
