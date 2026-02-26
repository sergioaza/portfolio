# Portafolio — Sergio Daniel Aza Ocampo

## Perfil
- Estudiante Ingeniería de Sistemas, 7mo semestre, Universidad Jorge Tadeo Lozano, Bogotá
- GitHub: https://github.com/sergioaza | Email: sergioaza2525@gmail.com
- Sin LinkedIn. CV pendiente.

## Stack
- React 19 + Vite (rolldown) + Tailwind CSS v3
- No usar librerías de animación externas — las animaciones van en `index.css` o inline
- Siempre leer el archivo antes de modificarlo

## Estructura
```
src/
  App.jsx                  ← compose de todos los componentes (Particles va primero)
  App.css                  ← mínimo, solo #root
  index.css                ← Tailwind directives + clases custom (glass-card, gradient-text, btn-primary, btn-outline)
  components/
    Navbar.jsx             ← nav fijo dark, hamburger mobile, logo SVG nodo IA
    Hero.jsx               ← hero dark, avatar placeholder (buscar "Placeholder"), botones GitHub+Proyectos
    About.jsx              ← bio, educación, enfoque IA, soft skills
    Skills.jsx             ← tech icons + skill bars por categoría
    Projects.jsx           ← 3 proyectos: MY WAY, FinZen, AlertaInf
    Contact.jsx            ← email (copy al portapapeles) + GitHub
    Footer.jsx
    Particles.jsx          ← canvas fullscreen fijo, z-index 1, pointer-events none
  hooks/
    useScrollAnimation.js  ← IntersectionObserver para animate-on-scroll
public/
  videos/
    myway-demo.mp4         ← video demo MY WAY (5MB)
  assets/
    alertainf/             ← logo-sin-fondo-1.png, ICONO-1.png
    finzen/                ← finzen-logo-dark.svg (logo oficial)
```

## Design system
| Token | Valor |
|-------|-------|
| Fondo | `#0f0f1a` |
| Surface | `#1a1a2e` |
| Primario | `#667eea` |
| Secundario | `#a855f7` |
| Acento | `#06b6d4` |
| Texto | `#e2e8f0` |
| Muted | `#94a3b8` |
| Cards | glassmorphism: `rgba(255,255,255,0.04)` + `backdrop-blur` |

Clases custom disponibles: `glass-card`, `gradient-text`, `btn-primary`, `btn-outline`, `section-title`, `animate-on-scroll`

## Proyectos
### MY WAY
- Android · Kotlin + Firebase + Google Places API + Weather API + IA
- GitHub: https://github.com/Tiaguitoo09/MyWay (repo de colaborador, no del usuario)
- Screenshots: `src/assets/myway/Imagen1.jpg` … `Imagen35.jpg`
- Video demo: `/videos/myway-demo.mp4` con poster `Imagen1.jpg`

### FinZen
- React + Vite + FastAPI + PostgreSQL · Desplegado: Vercel + Render + Neon
- GitHub: https://github.com/sergioaza/FINZEN (público)
- Live: https://finzen-six.vercel.app
- Logo: `public/assets/finzen/finzen-logo-dark.svg`
- Fuente logos: `C:/Users/sergi/OneDrive/Documentos/Programación/FinZen/logo-assets/`
- Path local: `C:/Users/sergi/OneDrive/Documentos/Programación/FinZen`

### AlertaInf
- Next.js + TypeScript + FastAPI + Docker · PRIVADO (NDA)
- Sin GitHub público, sin código ni modelo de negocio en el portafolio
- Solo logos: `public/assets/alertainf/`
- Path local: `C:/Users/sergi/OneDrive/Documentos/Programación/AlertaInf`

## Pendientes
- [ ] Foto de perfil: reemplazar placeholder en `Hero.jsx` (buscar "Placeholder")
- [ ] CV separado
- [ ] Screenshots de FinZen para reemplazar el logo en la tarjeta
- [ ] Mejorar perfil de GitHub del usuario
