import { Terminal, Layout, Database, Wrench, MapPin, Mail } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

export default function About() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="h-5 w-5 text-sky-500" />,
      skills: ['Next.js', 'React.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'HTML5 & CSS3', 'EJS'],
    },
    {
      title: 'Backend & Databases',
      icon: <Terminal className="h-5 w-5 text-violet-500" />,
      skills: ['Node.js', 'Express.js', 'Hono.js', 'PostgreSQL', 'Drizzle ORM', 'MongoDB', 'Mongoose', 'REST APIs', 'MongoDB Atlas'],
    },
    {
      title: 'AI & Prompt Engineering',
      icon: <Database className="h-5 w-5 text-emerald-500" />,
      skills: ['Agentic AI Systems', 'Claude AI Apps', 'Prompt Design', 'LLM Integrations'],
    },
    {
      title: 'Tools & Cloud Platforms',
      icon: <Wrench className="h-5 w-5 text-amber-500" />,
      skills: ['Git & GitHub', 'Vercel', 'Render', 'Cloudinary', 'Problem Solving', 'Tech Documentation'],
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-200/50 dark:border-slate-800/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">About Me</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-violet-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Main Bio Text */}
          <div className="lg:col-span-8 space-y-6 text-slate-655 dark:text-slate-350 text-left leading-relaxed text-base sm:text-lg">
            <p>
              I am a dedicated **Full Stack Developer (MERN & PERN)** and **Agentic AI Solutions Architect** based in India. 
              My programming philosophy centers on writing clean, self-documenting code and implementing defensible systems logic 
              to address complex technical requirements.
            </p>
            <p>
              Over the course of my projects, I have specialized in bridging frontend experiences with highly optimized server layers. 
              My backend work incorporates strict MVC pattern organization, secure validation, relational and document databases 
              (PostgreSQL with Drizzle ORM, MongoDB with Mongoose), and performant API route handlers (Hono.js, Express.js). 
              On the client-side, I design responsive structures utilizing Next.js, React.js, Tailwind CSS, and Bootstrap.
            </p>
            <p>
              Additionally, I specialize in building next-generation **Agentic AI integrations** using the Claude developer API. 
              I design prompt strategies, construct workflows, and build interactive tooling that embeds AI assistance natively into web products.
            </p>
          </div>

          {/* Facts Card */}
          <div className="lg:col-span-4 w-full">
            <div className="glass-card p-6 border border-slate-200/40 dark:border-slate-800/40 text-left space-y-6">
              <div className="flex flex-col items-center text-center pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="relative group mb-3">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-violet-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <img
                    src={profilePic}
                    alt="Abhishek Yadav"
                    className="relative w-28 h-28 rounded-full object-cover border-2 border-white dark:border-slate-900 shadow-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Abhishek Yadav</h3>
                <span className="text-xs font-semibold text-sky-500 dark:text-sky-400 mt-1 uppercase tracking-wider">MERN & AI Developer</span>
              </div>
              
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                  <span className="font-semibold text-slate-400 flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-slate-400" /> Location
                  </span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">Lucknow, India</span>
                </li>
                <li className="flex items-center justify-between pb-1">
                  <span className="font-semibold text-slate-400 flex items-center gap-1.5">
                    <Mail className="h-4 w-4 text-slate-400" /> Specialty
                  </span>
                  <span className="font-medium text-slate-805 dark:text-slate-200">Full Stack & AI Apps</span>
                </li>
              </ul>
              
              <a
                href="#contact"
                className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 hover:bg-black dark:hover:bg-white text-white dark:text-slate-900 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 text-center select-none">
            Technology Stack & Focal Points
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="glass-card p-6 border border-slate-200/40 dark:border-slate-800/40 text-left flex flex-col h-full hover:border-sky-500/20 dark:hover:border-sky-500/15 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/10 dark:border-slate-800/10 flex items-center justify-center flex-shrink-0">
                    {cat.icon}
                  </div>
                  <h4 className="font-bold text-slate-850 dark:text-slate-200 text-sm tracking-tight leading-snug">
                    {cat.title}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200/20 dark:border-slate-800/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
