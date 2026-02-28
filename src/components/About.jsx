import React, { useState, useEffect } from 'react';
import { GraduationCap, Cpu, Rocket, Target, Building2, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const ref = useScrollAnimation();
  const [eduTab, setEduTab] = useState('universidad');
  const [tabVisible, setTabVisible] = useState(true);
  const [badgePulse, setBadgePulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBadgePulse(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const switchTab = (tab) => {
    if (tab === eduTab) return;
    setTabVisible(false);
    setTimeout(() => {
      setEduTab(tab);
      setTabVisible(true);
    }, 50);
  };

  const platziCourses = [
    { name: 'Claude Code', area: 'IA & Herramientas', color: '#667eea' },
    { name: 'Fundamentos de Ingeniería de Software', area: 'Fundamentos', color: '#a855f7' },
    { name: 'Prompt Engineering', area: 'IA & Herramientas', color: '#06b6d4' },
  ];

  return (
    <section id="sobre-mi" className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 50%, #0f0f1a 100%)' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className="section-title gradient-text animate-on-scroll">Sobre Mí</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Row 1: Bio (col-span-2) */}
          <div className="lg:col-span-2 glass-card p-8 animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#667eea]/20 flex items-center justify-center">
                <Rocket size={20} className="text-[#667eea]" />
              </div>
              <h3 className="text-xl font-semibold text-[#e2e8f0]">¿Quién soy?</h3>
            </div>
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              No construyo apps. Construyo soluciones que importan — esas que alguien ve y piensa:{' '}
              <span className="text-[#e2e8f0] font-medium">"¿cómo no existía esto antes?"</span>{' '}
              Soy desarrollador Full Stack, emprendedor en acción y arquitecto de sistemas que van desde
              la base de datos hasta la pantalla del usuario. Me muevo con la misma fluidez en backend
              que en mobile, con IA integrada donde tiene sentido y sin ella donde no.{' '}
              <span className="text-[#667eea] font-medium">Los retos difíciles no me asustan. Me despiertan.</span>
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              Mi ventaja no es el stack — es el criterio. Domino{' '}
              <span className="text-[#667eea] font-medium">Claude Code</span> y las herramientas de IA
              modernas a un nivel que multiplica mi velocidad sin sacrificar arquitectura. Eso me permite
              entregar proyectos completos — end-to-end, en producción — en el tiempo que otros tardarían
              en planear.{' '}
              <span className="text-[#e2e8f0] font-medium">No es magia. Es método. Y es lo que ya demostré.</span>
            </p>
          </div>

          {/* Row 1: Enfoque Actual (1 col) */}
          <div className="glass-card p-8 border border-[#667eea]/20 animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#06b6d4]/20 flex items-center justify-center">
                <Cpu size={20} className="text-[#06b6d4]" />
              </div>
              <h3 className="text-xl font-semibold text-[#e2e8f0]">Enfoque Actual</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Claude Code avanzado', color: '#667eea' },
                { label: 'Agentes & APIs de IA', color: '#a855f7' },
                { label: 'Prompt engineering', color: '#06b6d4' },
                { label: 'Backend development', color: '#667eea' },
                { label: 'Frontend development', color: '#a855f7' },
                { label: 'Bases de datos', color: '#06b6d4' },
                { label: 'Docker & contenedores', color: '#667eea' },
                { label: 'Gestión de proyectos (PM)', color: '#a855f7' },
                { label: 'CI/CD + Cloud deployment', color: '#06b6d4' },
              ].map(({ label, color }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                  <span className="text-[#94a3b8] text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Education with tabs (col-span-3, full width) */}
          <div className="lg:col-span-3 glass-card p-8 animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
            {/* Header: title + pill tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#a855f7]/20 flex items-center justify-center">
                  <GraduationCap size={20} className="text-[#a855f7]" />
                </div>
                <h3 className="text-xl font-semibold text-[#e2e8f0]">Educación</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => switchTab('universidad')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    eduTab === 'universidad'
                      ? 'text-white'
                      : 'bg-white/5 text-[#94a3b8] hover:bg-white/10'
                  }`}
                  style={eduTab === 'universidad'
                    ? { background: 'linear-gradient(135deg, #667eea, #a855f7)' }
                    : {}
                  }
                >
                  Universidad
                </button>
                <button
                  onClick={() => switchTab('platzi')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    eduTab === 'platzi'
                      ? 'text-white'
                      : 'bg-white/5 text-[#94a3b8] hover:bg-white/10'
                  }`}
                  style={eduTab === 'platzi'
                    ? { background: 'linear-gradient(135deg, #667eea, #a855f7)' }
                    : {}
                  }
                >
                  <BookOpen size={14} />
                  Platzi
                  <span className={`px-1.5 py-0.5 rounded-full text-xs bg-green-500/20 text-green-400 ${badgePulse ? 'animate-pulse' : ''}`}>
                    EN CURSO
                  </span>
                </button>
              </div>
            </div>

            {/* Tab content with fade transition */}
            <div
              style={{
                transition: 'opacity 0.25s, transform 0.25s',
                opacity: tabVisible ? 1 : 0,
                transform: tabVisible ? 'translateY(0)' : 'translateY(4px)',
              }}
            >
              {eduTab === 'universidad' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-[#e2e8f0] font-medium">Ingeniería de Sistemas</p>
                    <p className="text-[#667eea] text-sm font-medium mt-1">Universidad Jorge Tadeo Lozano</p>
                    <p className="text-[#94a3b8] text-sm mt-1">Bogotá, Colombia · 7mo Semestre</p>
                    <div className="mt-4 w-full bg-white/5 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full bg-gradient-to-r from-[#667eea] to-[#a855f7]" style={{ width: '78%' }} />
                    </div>
                    <p className="text-[#94a3b8] text-xs mt-1">Progreso: 7 / 9 semestres</p>
                  </div>
                  <div>
                    <p className="text-[#667eea] text-xs font-semibold uppercase tracking-wider mb-3">Lo que construí aquí</p>
                    <div className="space-y-2.5">
                      {[
                        'Arquitectura de software',
                        'Estructuras de datos y algoritmos',
                        'Bases de datos relacionales',
                        'Redes y sistemas operativos',
                        'Proyectos reales en producción',
                      ].map(item => (
                        <div key={item} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#a855f7] flex-shrink-0" />
                          <span className="text-[#94a3b8] text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {platziCourses.map(({ name, area, color }) => (
                    <div
                      key={name}
                      className="p-5 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${color}30` }}
                    >
                      <span
                        className="inline-block px-2.5 py-1 rounded-full text-xs font-medium mb-3"
                        style={{ background: `${color}20`, color }}
                      >
                        {area}
                      </span>
                      <p className="text-[#e2e8f0] font-medium text-sm">{name}</p>
                      <div className="flex items-center gap-1.5 mt-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-green-400 text-xs">En curso</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Row 3: Visión Emprendedora (1 col) */}
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
              <span className="text-[#a855f7] font-medium">AlertaInf</span> no es un experimento
              académico. Es una empresa real, con tecnología propia y clientes reales.{' '}
              <span className="text-[#e2e8f0] font-medium">La estoy construyendo ahora.</span>
            </p>
          </div>

          {/* Row 3: Soft Skills (col-span-2) */}
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
