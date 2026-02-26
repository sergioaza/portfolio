import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SKILL_CATEGORIES = [
  {
    title: 'Mobile',
    color: '#667eea',
    skills: [
      { name: 'Android Studio', level: 85 },
      { name: 'Kotlin', level: 80 },
      { name: 'Java (Android)', level: 75 },
    ],
  },
  {
    title: 'Frontend',
    color: '#a855f7',
    skills: [
      { name: 'React / Vite', level: 75 },
      { name: 'Tailwind CSS', level: 70 },
      { name: 'JavaScript', level: 75 },
      { name: 'TypeScript', level: 55 },
    ],
  },
  {
    title: 'Backend',
    color: '#06b6d4',
    skills: [
      { name: 'FastAPI (Python)', level: 75 },
      { name: 'Python', level: 78 },
      { name: 'SQLAlchemy', level: 70 },
      { name: 'REST APIs', level: 80 },
    ],
  },
  {
    title: 'Bases de datos',
    color: '#10b981',
    skills: [
      { name: 'PostgreSQL', level: 72 },
      { name: 'Firebase / Firestore', level: 80 },
      { name: 'MySQL', level: 65 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    color: '#f59e0b',
    skills: [
      { name: 'Docker / Compose', level: 65 },
      { name: 'Git / GitHub', level: 85 },
      { name: 'Vercel + Render', level: 70 },
      { name: 'Neon (PostgreSQL cloud)', level: 65 },
    ],
  },
  {
    title: 'IA & APIs',
    color: '#667eea',
    skills: [
      { name: 'Claude Code (avanzado)', level: 88 },
      { name: 'Google Places API', level: 78 },
      { name: 'Weather API', level: 75 },
      { name: 'Google OAuth', level: 70 },
    ],
  },
];

const TECH_ICONS = [
  { name: 'Kotlin', bg: '#7F52FF', initial: 'K' },
  { name: 'React', bg: '#61DAFB', initial: 'R', dark: true },
  { name: 'Python', bg: '#3776AB', initial: 'Py' },
  { name: 'FastAPI', bg: '#009688', initial: 'FA' },
  { name: 'Firebase', bg: '#FF6D00', initial: 'Fi' },
  { name: 'PostgreSQL', bg: '#336791', initial: 'PG' },
  { name: 'Docker', bg: '#2496ED', initial: 'Do' },
  { name: 'Git', bg: '#F05032', initial: 'Gi' },
  { name: 'Claude', bg: '#667eea', initial: 'AI' },
  { name: 'Tailwind', bg: '#06B6D4', initial: 'Tw', dark: true },
  { name: 'JS', bg: '#F7DF1E', initial: 'JS', dark: true },
  { name: 'Android', bg: '#3DDC84', initial: 'An', dark: true },
];

export default function Skills() {
  const ref = useScrollAnimation();

  return (
    <section id="habilidades" className="py-24 px-6 bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className="section-title gradient-text animate-on-scroll">Habilidades</h2>

        {/* Tech icons row */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
          {TECH_ICONS.map(({ name, bg, initial, dark }) => (
            <div
              key={name}
              className="group flex flex-col items-center gap-2 cursor-default"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 shadow-lg"
                style={{
                  backgroundColor: bg,
                  color: dark ? '#1a1a2e' : 'white',
                  boxShadow: `0 4px 20px ${bg}40`,
                }}
              >
                {initial}
              </div>
              <span className="text-[#94a3b8] text-xs group-hover:text-[#e2e8f0] transition-colors">{name}</span>
            </div>
          ))}
        </div>

        {/* Skill bars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              className="glass-card p-6 animate-on-scroll"
              style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                <h3 className="font-semibold text-[#e2e8f0]">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#94a3b8] text-sm">{name}</span>
                      <span className="text-[#94a3b8] text-xs font-medium">{level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5">
                      <div
                        className="h-1.5 rounded-full transition-all duration-1000"
                        style={{
                          width: `${level}%`,
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}cc)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
