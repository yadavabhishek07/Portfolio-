import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-850 dark:text-slate-100 flex flex-col relative overflow-hidden transition-colors duration-300">
      {/* Decorative ambient background blobs */}
      <div className="absolute top-20 left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-sky-400/10 to-indigo-400/10 dark:from-sky-950/10 dark:to-indigo-950/10 blur-3xl pointer-events-none animate-float select-none z-0"></div>
      <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-violet-400/10 to-pink-400/10 dark:from-violet-950/10 dark:to-fuchsia-950/10 blur-3xl pointer-events-none animate-float-delayed select-none z-0"></div>
      {/* Header containing navigation is outside main so it remains active when drawer makes main inert */}
      <Navigation />

      {/* Main content sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/50 dark:border-slate-800/40 bg-white/50 dark:bg-slate-900/10 py-8 px-4 text-center text-sm text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
          <p className="flex gap-4">
            <a href="#home" className="hover:text-sky-500 transition-colors">Back to top</a>
            <span>&bull;</span>
            <a href="https://github.com/abhisheky0718-svg" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition-colors">GitHub</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
