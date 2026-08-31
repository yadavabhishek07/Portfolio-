import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Code2, Sparkles, Binary } from 'lucide-react';

export default function Hero() {
  const roles = [
    'MERN Stack Developer',
    'Agentic AI Architect',
    'Full Stack Engineer',
    'Problem Solver'
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTransitioning(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Heading & Introduction */}
        <div className="lg:col-span-7 text-left space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/40 text-sky-655 dark:text-sky-400 border border-sky-100 dark:border-sky-900/30 text-xs font-semibold tracking-wide">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Available for Opportunities</span>
          </div>
          
          <div className="space-y-2">
            <span className="text-sm sm:text-base font-bold tracking-widest text-sky-500 dark:text-sky-400 uppercase select-none">
              Hi, I'm
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              <span className="bg-gradient-to-r from-sky-400 via-indigo-500 to-violet-600 dark:from-sky-400 dark:via-indigo-400 dark:to-violet-500 bg-clip-text text-transparent drop-shadow-sm">
                Abhishek Yadav
              </span>
            </h1>
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-200 min-h-[2rem]">
            <span className={`inline-block transition-all duration-300 ${
              isTransitioning ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
            }`}>
              {roles[currentRoleIndex]}
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-650 dark:text-slate-350 leading-relaxed max-w-xl">
            I specialize in designing and engineering high-performance web applications using the **MERN Stack** and building context-aware **Agentic AI systems**. Focused on clean code and robust systems.
          </p>

          {/* Metrics Quick Look */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/40 max-w-md">
            <div>
              <p className="text-2xl font-black text-sky-500">MERN</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Core Tech Stack</p>
            </div>
            <div>
              <p className="text-2xl font-black text-indigo-500">AI</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Agentic Workflows</p>
            </div>
            <div>
              <p className="text-2xl font-black text-violet-500">Render</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Cloud Deploy</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-600 hover:to-violet-750 text-white font-semibold text-sm shadow-md shadow-sky-500/10 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-250 font-semibold text-sm border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com/abhisheky0718-svg"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800/80 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all duration-200 cursor-pointer"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/abhishekyadav-680b55375"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800/80 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all duration-200 cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:abhisheky0718@gmail.com"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800/80 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all duration-200 cursor-pointer"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Developer Mock IDE Terminal */}
        <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:mx-0 animate-slide-up [animation-delay:200ms]">
          <div className="w-full rounded-2xl bg-slate-900 dark:bg-slate-950 border border-slate-800 shadow-xl overflow-hidden text-left font-mono">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-850">
              <div className="flex items-center gap-2">
                <span className="w-3 w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                <span className="w-3 w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                <span className="w-3 w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium select-none">
                <Code2 className="h-3.5 w-3.5 text-sky-500" />
                <span>abhishek.ts</span>
              </div>
              <div className="w-12"></div>
            </div>

            {/* Terminal Code Area */}
            <div className="p-5 sm:p-6 text-xs sm:text-sm space-y-4 overflow-x-auto text-slate-300 leading-relaxed">
              <div>
                <span className="text-violet-400">const</span>{' '}
                <span className="text-blue-400">developer</span>{' '}
                <span className="text-slate-400">=</span>{' '}
                <span className="text-slate-200">&#123;</span>
              </div>
              
              <div className="pl-4">
                <span className="text-slate-400">name:</span>{' '}
                <span className="text-amber-300">'Abhishek Yadav'</span>,
              </div>
              
              <div className="pl-4">
                <span className="text-slate-400">stack:</span>{' '}
                <span className="text-slate-200">[</span>
                <span className="text-emerald-300">'MongoDB'</span>,{' '}
                <span className="text-emerald-300">'Express'</span>,{' '}
                <span className="text-emerald-300">'React'</span>,{' '}
                <span className="text-emerald-300">'Node'</span>
                <span className="text-slate-200">]</span>,
              </div>

              <div className="pl-4">
                <span className="text-slate-400">aiIntegration:</span>{' '}
                <span className="text-slate-200">[</span>
                <span className="text-sky-305">'Agentic AI'</span>,{' '}
                <span className="text-sky-305">'Claude API'</span>
                <span className="text-slate-200">]</span>,
              </div>

              <div className="pl-4">
                <span className="text-slate-400">motto:</span>{' '}
                <span className="text-amber-300">'Write clean code, build robust systems'</span>
              </div>

              <div>
                <span className="text-slate-205">&#125;;</span>
              </div>

              <div className="pt-2 border-t border-slate-800/60 flex items-center gap-2 text-slate-500 text-xs select-none">
                <Binary className="h-4 w-4 text-violet-500" />
                <span>Compiled successfully</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
