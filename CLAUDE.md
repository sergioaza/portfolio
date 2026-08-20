# Portafolio — Sergio Daniel Aza Ocampo

Sitio personal en React + Vite. Es la **cara pública** de Sergio: lo que dice aquí tiene que
coincidir con su CV y con su perfil de GitHub.

> **Estado vivo:** `ESTADO_ACTUAL.md` · **Contrato para el hub:** `CONTROL.yml` ·
> **Seguridad:** `CHECKLIST_SEGURIDAD.md`. Este archivo solo contiene lo **estable**.
>
> Esos tres documentos son **locales, no están en el repo**: son gestión interna y este
> repositorio es público (ver `.gitignore`). Si clonas el proyecto, no vas a encontrarlos.

## Regla de oro: una sola fuente de verdad

Los hechos que se muestran (perfil, proyectos, habilidades, cifras) **no se inventan aquí**.
Salen de `_CentroControl/cv/PERFIL_MAESTRO.md`, que es el mismo origen del CV y del README del
perfil de GitHub. Si algo del sitio contradice ese archivo, se corrige el sitio.

Dos reglas heredadas de ahí que **no se rompen**:

- **De la plataforma SaaS no se menciona el sector ni el cliente.** Los nombres concretos
  estan en el checklist de seguridad local, que no se versiona.
- **MyWay no lleva "IA".** Es un motor de recomendación contextual por scoring; el código que
  llamaba a un LLM está muerto. Decir "IA" expone a una pregunta que no se puede responder.

Y un criterio editorial de Sergio: fuera resultados de auditorías, conteos de commits y
herramientas de flujo de trabajo (CI, lint, reglas de merge). Dentro: qué se construyó, para
quién y con qué arquitectura. La cifra que sí vale es el **número de pruebas automatizadas**.

## Stack

- React 19 + Vite (rolldown) + Tailwind CSS v3
- **No usar librerías de animación externas** — las animaciones van en `index.css` o inline
- Siempre leer el archivo antes de modificarlo
- Repo: https://github.com/sergioaza/portfolio · rama principal `main`

## Estructura

```
src/
  App.jsx                  ← compone lazy (About, Skills, Projects, Contact, Footer, SnakeEasterEgg)
                             Navbar, Hero y Particles son eager. Patrón: React.lazy + Suspense fallback={null}
  App.css                  ← mínimo, solo #root
  index.css                ← directivas Tailwind + clases custom
  components/
    Navbar.jsx             ← nav fijo dark, hamburger mobile, logo SVG nodo IA
    Hero.jsx               ← hero dark, avatar, botones GitHub + Proyectos
    About.jsx              ← tabs de educación (Universidad / Platzi), bio, visión, soft skills
    Skills.jsx             ← tech icons + barras por categoría
    Projects.jsx           ← array PROJECTS (ver abajo)
    Contact.jsx            ← email (copia al portapapeles) + GitHub
    Footer.jsx
    Particles.jsx          ← canvas fullscreen fijo, z-index 1, pointer-events none
    SnakeEasterEgg.jsx     ← Konami code (↑↑↓↓←→←→) abre un Snake en modal
  hooks/
    useScrollAnimation.js  ← IntersectionObserver para animate-on-scroll
public/
  videos/myway-demo.mp4    ← demo de MY WAY (5 MB)
  assets/alertainf/        ← logo de Guardián SOS (la carpeta conserva el nombre antiguo)
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

Clases custom: `glass-card`, `gradient-text`, `btn-primary`, `btn-outline`, `section-title`,
`animate-on-scroll`.

## Los dos arrays que hay que mantener sincronizados

**`Projects.jsx` → `PROJECTS`.** Cada entrada lleva `id, title, subtitle, typeLabel,
TypeIcon, typeColor, description, highlights[], tech[], github, live, private, Media`.
Los proyectos sin logo propio usan el componente `MediaCard` (icono + badge).

**`Skills.jsx` → `SKILL_CATEGORIES`.** Son **las mismas 6 categorías del CV**: Lenguajes,
Backend, Bases de datos, Frontend y móvil, DevOps y calidad, Datos e IA. El `level` (%) es solo
presentación; **los nombres y las categorías no pueden divergir del CV**.

`About.jsx` también carga datos que envejecen: semestre y barra de progreso, cursos de Platzi
(`platziCourses`) y materias. Revisarlos cuando se toque el archivo.

## Comandos

| Comando | Para qué |
|---------|----------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción — **correrlo siempre tras tocar componentes** |
| `npm run lint` | ESLint |
| `/sync-memory` | Sincroniza la memoria con el estado real (Paso 0: `verificar_memoria.py`) |
| `/memory-audit` | Audita el store de memoria contra la realidad |

**Deploy: automatico.** Un `git push` a `main` despliega el proyecto `portfolio` de Vercel,
que es el que sirve https://portfolio-ashy-nine-45.vercel.app. No hace falta nada mas.

> **Ojo con el nombre.** En Vercel hay dos proyectos: `portfolio` (el vivo) y `portafolio`
> (con "a", abandonado). Hasta el 2026-08-19 el `.vercel/project.json` local apuntaba al
> abandonado, asi que un `vercel --prod` desde aqui desplegaba al proyecto muerto sin dar
> ningun error. Ya esta reenlazado al correcto: `vercel --prod --yes` funciona como respaldo
> manual. Si algun dia el deploy "no se ve", comprobar primero `vercel ls`.

## Reglas de seguridad para Claude

### PROHIBIDO
- Publicar en el sitio el sector o el cliente de la plataforma SaaS.
- Subir al repo credenciales, `.env`, o documentos personales (cartas de presentación,
  evaluaciones internas). **Es un repo público.**
- `git push` o `vercel --prod` sin que Sergio lo pida.

### REQUIERE CONFIRMACIÓN
- Cambiar el copy de un proyecto o retirar uno del array `PROJECTS`.
- Tocar el design system (afecta a todo el sitio).

### LIBRE
- Leer cualquier archivo, correr `npm run dev`, `build` y `lint`.
- Ajustes de estilo que no cambien el contenido.
