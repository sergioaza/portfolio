import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Particles from './components/Particles';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const SnakeEasterEgg = lazy(() => import('./components/SnakeEasterEgg'));

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f1a]">
      <Particles />
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <SnakeEasterEgg />
      </Suspense>
    </div>
  );
}

export default App;
