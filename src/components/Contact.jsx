import React, { useState } from 'react';
import { Mail, Github, Send, Copy, Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const EMAIL = 'sergioaza2525@gmail.com';
const GITHUB = 'https://github.com/sergioaza';

export default function Contact() {
  const ref = useScrollAnimation();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section
      id="contacto"
      className="py-24 px-6 bg-[#0f0f1a]"
    >
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <h2 className="section-title gradient-text animate-on-scroll">Conectemos</h2>

        <p className="text-[#94a3b8] text-lg max-w-xl mx-auto mb-12 animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
          ¿Tienes un proyecto en mente? ¿Quieres colaborar o simplemente charlar sobre tecnología?
          <span className="text-[#e2e8f0] font-medium"> Escríbeme.</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {/* Email card */}
          <div
            className="glass-card p-6 group cursor-pointer hover:border-[#667eea]/40 transition-all duration-300 animate-on-scroll"
            style={{ transitionDelay: '0.2s' }}
            onClick={copyEmail}
          >
            <div className="w-12 h-12 rounded-xl bg-[#667eea]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#667eea]/30 transition-colors">
              <Mail size={22} className="text-[#667eea]" />
            </div>
            <h3 className="font-semibold text-[#e2e8f0] mb-1">Email</h3>
            <p className="text-[#667eea] text-sm font-medium mb-3 break-all">{EMAIL}</p>
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#94a3b8] group-hover:text-[#667eea] transition-colors">
              {copied ? (
                <>
                  <Check size={12} className="text-green-400" />
                  <span className="text-green-400">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Click para copiar</span>
                </>
              )}
            </div>
          </div>

          {/* GitHub card */}
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 group hover:border-[#a855f7]/40 transition-all duration-300 no-underline animate-on-scroll block"
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="w-12 h-12 rounded-xl bg-[#a855f7]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#a855f7]/30 transition-colors">
              <Github size={22} className="text-[#a855f7]" />
            </div>
            <h3 className="font-semibold text-[#e2e8f0] mb-1">GitHub</h3>
            <p className="text-[#a855f7] text-sm font-medium mb-3">@sergioaza</p>
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#94a3b8] group-hover:text-[#a855f7] transition-colors">
              <Send size={12} />
              <span>Ver perfil y repositorios</span>
            </div>
          </a>
        </div>

        {/* CTA */}
        <div className="animate-on-scroll" style={{ transitionDelay: '0.4s' }}>
          <a
            href={`mailto:${EMAIL}`}
            className="btn-primary inline-flex"
          >
            <Mail size={18} />
            Enviar mensaje
          </a>
        </div>
      </div>
    </section>
  );
}
