import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import Stack from './components/Stack';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing for "Antigravity" feel
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-navy-900 text-white selection:bg-indigo-500/30 overflow-hidden">
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Work />
        <TrustedBy />
        <About />
        <Stack />
        <Contact />
      </main>

      {/* Global Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle noise texture could be added here if requested, but sticking to gradients for now */}
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 blur-[150px] rounded-full opacity-50 mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full opacity-50 mix-blend-screen" />
      </div>
    </div>
  );
}

export default App;
