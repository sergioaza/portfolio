import React, { useState } from 'react';
import { Github, ExternalLink, Smartphone, Globe, Lock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import posterImg from '../assets/myway/Imagen1.jpg';

// MY WAY — video showcase
function MyWayVideo() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="relative bg-[#0a0a14] rounded-xl overflow-hidden flex-1 min-h-72 flex items-center justify-center">
        <div className="text-center px-4">
          <Smartphone size={40} className="text-[#667eea] mx-auto mb-3 opacity-60" />
          <p className="text-[#94a3b8] text-sm">App Android funcional</p>
          <p className="text-[#667eea] text-xs mt-1">Kotlin · Firebase · Google Places</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-[#0a0a14] rounded-xl overflow-hidden flex-1 min-h-72">
      <video
        src="/videos/myway-demo.mp4"
        poster={posterImg}
        autoPlay
        muted
        loop
        playsInline
        onError={() => setError(true)}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// AlertaInf logo display
function AlertaInfMedia() {
  return (
    <div className="relative bg-[#0a0a14] rounded-xl overflow-hidden h-72 sm:h-80 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <img
          src="/assets/alertainf/logo-sin-fondo-1.png"
          alt="AlertaInf Logo"
          className="max-h-32 max-w-48 object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
          <Lock size={14} className="text-amber-400" />
          <span className="text-amber-400 text-xs font-medium">Proyecto privado — código bajo NDA</span>
        </div>
      </div>
    </div>
  );
}

// FinZen logo
function FinZenMedia() {
  return (
    <div className="relative bg-[#0a0a14] rounded-xl overflow-hidden h-72 sm:h-80 flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <img
          src="/assets/finzen/finzen-logo-dark.svg"
          alt="FinZen Logo"
          className="max-h-24 max-w-xs object-contain"
        />
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#667eea]/10 border border-[#667eea]/20">
          <Globe size={13} className="text-[#667eea]" />
          <span className="text-[#667eea] text-xs font-medium">App web en producción · Vercel + Render + Neon</span>
        </div>
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    id: 'myway',
    title: 'MY WAY',
    subtitle: 'Asistente Inteligente de Viajes',
    type: 'mobile',
    typeLabel: 'App Móvil',
    TypeIcon: Smartphone,
    typeColor: '#667eea',
    description: 'El problema: salir sin destino claro. Las apps de mapas muestran opciones pero no recomiendan según el clima del momento, tus preferencias ni tu historial. Construí un motor de IA propio que cruza ubicación, clima en tiempo real y gustos del usuario para generar recomendaciones personalizadas — empezó como proyecto de clase y escalé hasta tener un producto funcional real.',
    highlights: [
      'Motor de recomendación propio: IA que cruza clima, distancia y preferencias en tiempo real',
      'Integración con Google Places API y Weather API desde cero',
      'Autenticación y base de datos en tiempo real con Firebase',
      'Proyecto académico escalado a producto funcional completo',
    ],
    tech: ['Kotlin', 'Android Studio', 'Firebase', 'Google Places API', 'Weather API', 'IA'],
    github: 'https://github.com/Tiaguitoo09/MyWay',
    live: null,
    private: false,
    Media: MyWayVideo,
  },
  {
    id: 'finzen',
    title: 'FinZen',
    subtitle: 'App de Finanzas Personales',
    type: 'web',
    typeLabel: 'Web Full Stack',
    TypeIcon: Globe,
    typeColor: '#a855f7',
    description: 'Las apps de finanzas en español para Colombia no se adaptaban al contexto local. La solución: construir la mía — para mí, mi familia y cercanos. Control total, pesos colombianos, desde cero. El reto: llevar a producción mi primera app full stack completa, incluyendo JWT con revocación, migraciones Alembic y un stack distribuido en tres plataformas distintas.',
    highlights: [
      'Construido para uso real: finanzas personales en español para Colombia',
      'Primera app full stack propia en producción: Vercel + Render + Neon',
      'JWT con revocación, rate limiting, audit logs y verificación de email',
      'Soporte multi-moneda e i18n (ES/EN/PT) con selección de país al registrarse',
    ],
    tech: ['React', 'Vite', 'Tailwind', 'FastAPI', 'PostgreSQL', 'Neon', 'Vercel', 'Docker'],
    github: 'https://github.com/sergioaza/FINZEN',
    live: 'https://finzen-six.vercel.app',
    private: false,
    Media: FinZenMedia,
  },
  {
    id: 'alertainf',
    title: 'AlertaInf',
    subtitle: 'Startup en Desarrollo Activo',
    type: 'web',
    typeLabel: 'Web Full Stack',
    TypeIcon: Globe,
    typeColor: '#06b6d4',
    description: 'Plataforma web full stack desarrollada con Next.js y FastAPI. Proyecto en fase activa de desarrollo con arquitectura robusta, autenticación segura y despliegue con Docker. Detalles confidenciales por acuerdo legal.',
    highlights: [
      'Proyecto en etapa de validación de producto',
      'Frontend en Next.js (TypeScript)',
      'Backend en FastAPI con Docker',
      'Migraciones con Alembic',
    ],
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'Docker', 'Tailwind', 'Alembic'],
    github: null,
    live: null,
    private: true,
    Media: AlertaInfMedia,
  },
];

export default function Projects() {
  const ref = useScrollAnimation();

  return (
    <section id="proyectos" className="py-24 px-6" style={{ background: 'linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 50%, #0f0f1a 100%)' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className="section-title gradient-text animate-on-scroll">Proyectos</h2>

        <div className="space-y-12">
          {PROJECTS.map((project, i) => {
            const { Media } = project;
            const isEven = i % 2 === 0;

            return (
              <div
                key={project.id}
                className="glass-card overflow-hidden animate-on-scroll"
                style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Media side */}
                  <div className="lg:w-1/2 p-4 lg:p-6 flex flex-col">
                    <Media />
                  </div>

                  {/* Info side */}
                  <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <project.TypeIcon size={14} style={{ color: project.typeColor }} />
                            <span className="text-xs font-medium" style={{ color: project.typeColor }}>
                              {project.typeLabel}
                            </span>
                            {project.private && (
                              <span className="flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                                <Lock size={10} />
                                Privado
                              </span>
                            )}
                          </div>
                          <h3 className="text-2xl font-bold text-[#e2e8f0]">{project.title}</h3>
                          <p className="text-[#94a3b8] text-sm mt-1">{project.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-5">
                        {project.highlights.map(h => (
                          <li key={h} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: project.typeColor }} />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map(t => (
                          <span
                            key={t}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-[#e2e8f0]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline text-sm py-2.5 px-5"
                        >
                          <Github size={16} />
                          Ver código
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm py-2.5 px-5"
                        >
                          <ExternalLink size={16} />
                          Ver demo
                        </a>
                      )}
                      {project.private && !project.github && (
                        <div className="flex items-center gap-2 text-[#94a3b8] text-sm px-4 py-2.5 rounded-full border border-white/10">
                          <Lock size={14} />
                          Código privado
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
