import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a12] border-t border-white/5 py-8 px-6 text-center">
      <p className="text-[#94a3b8] text-sm mb-4">
        © 2025 Sergio Daniel Aza Ocampo — Bogotá, Colombia
      </p>
      {/* Easter egg hint — clickable to activate */}
      <p
        onClick={() => window.dispatchEvent(new CustomEvent('konami-activate'))}
        title="Psst... pruébalo"
        style={{
          fontFamily: 'monospace',
          fontSize: '11px',
          color: '#667eea',
          opacity: 0.6,
          letterSpacing: '0.15em',
          userSelect: 'none',
          cursor: 'pointer',
          transition: 'opacity 0.3s',
          display: 'inline-block',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
        onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}
      >
        // ↑ ↑ ↓ ↓ ← → ← →
      </p>
    </footer>
  );
}
