import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Filter, Layers, Globe, Cpu, X, BookOpen, Check } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'AI & APIs';
  summary: string;
  description: string;
  details: string[];
  tech: string[];
  github: string;
  live?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 'proj1',
      title: 'Botspoof – AI Chatbot',
      category: 'AI & APIs',
      summary: 'An intelligent chatbot utilizing advanced AI architectures for automated, context-aware user interactions.',
      description: 'An AI-powered conversational agent designed to facilitate intelligent user discussions. It integrates advanced LLM workflows with a Node.js/React stack, maintaining conversation context and delivering automated, accurate prompts.',
      details: [
        'Architected and developed an intelligent chatbot utilizing advanced AI architectures to facilitate automated, context-aware user interactions.',
        'Designed a seamless and responsive user interface to ensure dynamic and engaging conversational experiences.',
        'Optimized system prompts to minimize token overhead and ensure structured model output.',
        'Structured context management logic to handle session history across web clients.'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'Agentic AI Systems', 'API Integration'],
      github: 'https://github.com/yadavabhishek07/botspoof',
    },
    {
      id: 'proj2',
      title: 'Dream Land – Airbnb Clone',
      category: 'Full Stack',
      summary: 'Full-stack rental marketplace enforcing strict MVC architecture, secure authentication, and cloud uploads.',
      description: 'A comprehensive property-listing web application inspired by Airbnb. Built from the ground up to follow strict Model-View-Controller design patterns, ensuring robust codebase organization and scalability.',
      details: [
        'Architected and developed a full-stack, Airbnb-inspired web application from the ground up, enforcing strict MVC architecture for highly scalable code organization.',
        'Engineered secure user authentication and authorization protocols, alongside robust server-side data validation utilizing Joi.',
        'Designed and integrated custom RESTful APIs to efficiently manage comprehensive CRUD operations for dynamic property listings and user data.',
        'Implemented seamless cloud-based image uploads via Cloudinary and integrated MongoDB Atlas for scalable, secure database management, deploying the final responsive application on Render.'
      ],
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JavaScript', 'Bootstrap', 'Joi', 'Cloudinary', 'Render'],
      github: 'https://github.com/yadavabhishek07/dream-land',
    },
    {
      id: 'proj3',
      title: 'Pharmaguard – Hackathon Project',
      category: 'Frontend',
      summary: 'Specialized healthcare tech solution pitched and developed under constraints with an intuitive UI.',
      description: 'A dedicated healthcare application developed to solve critical logistical challenges. Pitched and built within a strict 48-hour hackathon environment, showcasing rapid prototyping capabilities.',
      details: [
        'Developed and pitched a specialized tech solution under high-pressure hackathon constraints, managing both the technical development and the strategic project presentation.',
        'Designed a responsive and intuitive user interface, prioritizing clear user navigation and immediate data accessibility.',
        'Integrated lightweight frontend routing and data-binding methods to mock live pharmacy inventory.',
        'Ensured highly accessible design structure following semantic standards.'
      ],
      tech: ['React.js', 'Node.js', 'UI/UX Design', 'CSS3', 'Responsive Layout'],
      github: 'https://github.com/yadavabhishek07/pharmaguard',
    }
  ];

  const categories: ('All' | 'Full Stack' | 'Frontend' | 'AI & APIs')[] = [
    'All',
    'Full Stack',
    'Frontend',
    'AI & APIs'
  ];

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Trigger modal visibility native methods
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedProject) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      dialog.close();
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const handleClose = () => {
    setSelectedProject(null);
  };

  // Close dialog on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      handleClose();
    }
  };

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Full Stack': return <Layers className="h-4 w-4" />;
      case 'Frontend': return <Globe className="h-4 w-4" />;
      case 'AI & APIs': return <Cpu className="h-4 w-4" />;
      default: return <Filter className="h-4 w-4" />;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-200/50 dark:border-slate-800/40 bg-gradient-to-b from-white via-slate-50/30 to-white dark:from-slate-950 dark:via-slate-900/10 dark:to-slate-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-violet-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            A curated list of web applications and AI implementations built from scratch.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-md shadow-slate-900/10 dark:shadow-white/5'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {getCategoryIcon(cat)}
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card flex flex-col p-6 text-left border border-slate-200/40 dark:border-slate-800/40 cursor-pointer hover:-translate-y-1 hover:border-sky-500/35 dark:hover:border-sky-500/25 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border border-sky-100/10 dark:border-sky-900/10">
                  {project.category}
                </span>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
                    aria-label="View Source Code"
                  >
                    <Github className="h-4.5 w-4.5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
                      aria-label="View Live Site"
                    >
                      <ExternalLink className="h-4.5 w-4.5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors duration-200">
                {project.title}
              </h3>
              
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-grow line-clamp-3">
                {project.summary}
              </p>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-850 flex flex-wrap gap-1.5 mt-auto">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs font-semibold rounded-md bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200/10 dark:border-slate-800/10"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-md bg-slate-100 dark:bg-slate-900 text-slate-400">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Native Dialog Modal */}
      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        onClose={handleClose}
        className="w-[90vw] max-w-2xl rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 p-6 md:p-8 focus:outline-none shadow-2xl backdrop:bg-slate-950/40 backdrop:backdrop-blur-sm relative animate-fade-in"
      >
        {selectedProject && (
          <div className="text-left flex flex-col h-full">
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/40 text-sky-650 dark:text-sky-400 border border-sky-100/10 dark:border-sky-900/10">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white mt-3">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-750 transition-all duration-200"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 flex-grow overflow-y-auto max-h-[60vh] pr-2">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5 select-none">
                  <BookOpen className="h-3.5 w-3.5 text-sky-500" />
                  <span>Project Overview</span>
                </h4>
                <p className="text-sm md:text-base leading-relaxed text-slate-650 dark:text-slate-300">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5 select-none">
                  <Cpu className="h-3.5 w-3.5 text-indigo-500" />
                  <span>Key Deliverables & Architecture</span>
                </h4>
                <ul className="space-y-3 text-sm leading-relaxed text-slate-655 dark:text-slate-350">
                  {selectedProject.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span className="p-0.5 rounded-full bg-sky-50 dark:bg-sky-950/40 border border-sky-100/10 dark:border-sky-900/10 mt-0.5 text-sky-500 flex-shrink-0">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-slate-650 dark:text-slate-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 select-none">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200/20 dark:border-slate-800/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Linkages */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-3">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-slate-105 text-white dark:text-slate-900 font-semibold text-sm transition-colors flex items-center gap-2 cursor-pointer shadow-sm hover:shadow"
              >
                <Github className="h-4 w-4" />
                View Repository
              </a>
              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-750 dark:text-slate-300 font-semibold text-sm transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Live Site
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
