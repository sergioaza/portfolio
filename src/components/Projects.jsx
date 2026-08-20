import React, { useState } from 'react';
import { Github, ExternalLink, Smartphone, Globe, Lock, Bot, Layers, Boxes, Siren } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import posterImg from '../assets/myway/Imagen1.jpg';

// MY WAY — video showcase
function MyWayVideo() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="relative bg-[#0a0a14] rounded-xl overflow-hidden h-72 sm:h-80 flex items-center justify-center">
        <div className="text-center px-4">
          <Smartphone size={40} className="text-[#667eea] mx-auto mb-3 opacity-60" />
          <p className="text-[#94a3b8] text-sm">App Android funcional</p>
          <p className="text-[#667eea] text-xs mt-1">Kotlin · Firebase · Google Places</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-[#0a0a14] rounded-xl overflow-hidden h-72 sm:h-80">
      <video
        src="/videos/myway-demo.mp4"
        poster={posterImg}
        preload="none"
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

// Guardian SOS - logo + estado de publicacion
function GuardianMedia() {
  return (
    <div className="relative bg-[#0a0a14] rounded-xl overflow-hidden h-72 sm:h-80 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <Siren size={44} style={{ color: '#667eea' }} className="opacity-80" />
        <p className="text-[#e2e8f0] text-base font-semibold">Guardián SOS</p>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <Smartphone size={14} className="text-emerald-400" />
          <span className="text-emerald-400 text-xs font-medium">Publicada en Google Play y App Store</span>
        </div>
      </div>
    </div>
  );
}

// Tarjeta generica para proyectos sin logo propio
function MediaCard({ Icon, color, title, badge }) {
  return (
    <div className="relative bg-[#0a0a14] rounded-xl overflow-hidden h-72 sm:h-80 flex items-center justify-center">
      <div className="flex flex-col items-center gap-5 px-6 text-center">
        <Icon size={44} style={{ color }} className="opacity-80" />
        <p className="text-[#e2e8f0] text-base font-semibold">{title}</p>
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full border"
          style={{ backgroundColor: color + '1a', borderColor: color + '33' }}
        >
          <span className="text-xs font-medium" style={{ color }}>{badge}</span>
        </div>
      </div>
    </div>
  );
}

function SaasMedia() {
  return <MediaCard Icon={Bot} color="#a855f7" title="Plataforma SaaS con IA" badge="Proyecto privado · en desarrollo" />;
}
function FiloMedia() {
  return <MediaCard Icon={Layers} color="#f59e0b" title="Filo" badge="Proyecto privado · en desarrollo" />;
}
function MagnorMedia() {
  return <MediaCard Icon={Boxes} color="#22d3ee" title="magnor.tech" badge="En producción · Vercel" />;
}

const PROJECTS = [
  {
    id: 'guardian-sos',
    title: 'Guardián SOS',
    subtitle: 'App de emergencias · Proyecto para cliente',
    typeLabel: 'Móvil + Web',
    TypeIcon: Smartphone,
    typeColor: '#10b981',
    description: 'Una app de emergencias sirve de poco si falla justo cuando se necesita. La construí de extremo a extremo — app móvil, panel administrativo y backend — y hoy está publicada en Google Play y en la App Store, con usuarios reales usándola.',
    highlights: [
      'Publicada en Google Play y App Store',
      'Backend FastAPI sobre Google Cloud, con despliegue automatizado en contenedores',
      'Panel administrativo en Next.js y aplicación móvil en Expo',
      '629 pruebas automatizadas sobre autenticación, permisos por rol y aislamiento entre cuentas',
    ],
    tech: ['FastAPI', 'Next.js', 'Expo', 'PostgreSQL', 'Google Cloud', 'Docker', 'Alembic'],
    github: null,
    live: null,
    private: true,
    Media: GuardianMedia,
  },
  {
    id: 'saas-ia',
    title: 'Plataforma SaaS de atención con IA',
    subtitle: 'Producto en desarrollo · Magnor',
    typeLabel: 'Backend + Web',
    TypeIcon: Globe,
    typeColor: '#a855f7',
    description: 'Automatizar la atención al cliente sin que el usuario sienta que habla con un robot. El backend es multi-inquilino y procesa las conversaciones de forma asíncrona; la IA responde apoyada en una base de conocimiento propia con búsqueda semántica, no en respuestas genéricas.',
    highlights: [
      'Arquitectura multi-inquilino con procesamiento asíncrono en Celery y Redis',
      'Base de conocimiento con recuperación semántica sobre pgvector, conectada al SDK de Anthropic',
      'Panel web de operación construido en Next.js',
      '892 pruebas automatizadas en el backend y 178 en el panel',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Celery', 'Redis', 'pgvector', 'Google Cloud'],
    github: null,
    live: null,
    private: true,
    Media: SaasMedia,
  },
  {
    id: 'filo',
    title: 'Filo',
    subtitle: 'Plataforma de gestión para salones',
    typeLabel: 'Web + Móvil',
    TypeIcon: Globe,
    typeColor: '#f59e0b',
    description: 'Gestión completa para salones: agenda, clientes y comunicaciones. El reto más interesante no fue el producto sino el marco legal — en Colombia, contactar clientes exige cumplir la Ley 1581 de habeas data y la Ley 2300, así que el consentimiento y los límites de contacto están implementados dentro del propio sistema.',
    highlights: [
      'Monorepo con aplicación web, app móvil y paquetes compartidos',
      'Cumplimiento de Ley 1581 (habeas data) y Ley 2300 implementado en el producto',
      'Kill-switch de comunicaciones para cortar los envíos de inmediato',
      '134 pruebas automatizadas',
    ],
    tech: ['Next.js', 'Expo', 'Drizzle', 'PostgreSQL', 'Turborepo', 'Docker'],
    github: null,
    live: null,
    private: true,
    Media: FiloMedia,
  },
  {
    id: 'magnor',
    title: 'magnor.tech',
    subtitle: 'Sitio corporativo y software interno',
    typeLabel: 'Web Full Stack',
    TypeIcon: Globe,
    typeColor: '#22d3ee',
    description: 'El sitio público de Magnor y, detrás del login, el software con el que trabaja el equipo todos los días: tablero Kanban, calendario y gestión documental. La portada usa 3D en tiempo real con React Three Fiber.',
    highlights: [
      'En producción: sitio público y aplicación interna del equipo',
      'Portada en 3D en tiempo real con React Three Fiber',
      'Tablero Kanban, calendario y gestión documental',
      '171 pruebas automatizadas',
    ],
    tech: ['Next.js 16', 'React 19', 'Supabase', 'React Three Fiber', 'Vercel'],
    github: null,
    live: 'https://magnor.tech',
    private: false,
    Media: MagnorMedia,
  },
  {
    id: 'myway',
    title: 'MY WAY',
    subtitle: 'Recomendador de lugares · Proyecto universitario',
    typeLabel: 'App Móvil',
    TypeIcon: Smartphone,
    typeColor: '#667eea',
    description: 'El problema: salir sin destino claro. Las apps de mapas muestran opciones pero no recomiendan según el momento, tus preferencias ni el clima. Diseñé un motor de recomendación que puntúa cada lugar cruzando hora del día, clima, preferencias y distancia, con caché propia para no quemar la cuota de las APIs de Google.',
    highlights: [
      'Motor de recomendación contextual propio: puntúa por hora, clima, preferencias y distancia',
      'Integración con Google Places, Directions y una API de clima',
      'Persistencia local con Room, sincronizada con Firebase',
      'Caché propia para reducir el consumo de cuota de las APIs externas',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Room', 'Firebase', 'Google Maps API', 'Android Studio'],
    github: 'https://github.com/Tiaguitoo09/MyWay',
    live: null,
    private: false,
    Media: MyWayVideo,
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
