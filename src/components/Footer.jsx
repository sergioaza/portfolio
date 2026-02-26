import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a12] border-t border-white/5 py-8 px-6 text-center">
      <p className="text-[#94a3b8] text-sm">
        © 2025 Sergio Daniel Aza Ocampo
        <span className="mx-2 text-white/20">·</span>
        Desarrollado con React + Vite + Tailwind
        <span className="mx-2 text-white/20">·</span>
        <span className="gradient-text font-medium">Bogotá, Colombia</span>
      </p>
    </footer>
  );
}
