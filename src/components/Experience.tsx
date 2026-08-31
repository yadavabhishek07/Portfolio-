import { useState } from 'react';
import { Calendar, GraduationCap, Award, MapPin, ChevronRight, ChevronDown, Check } from 'lucide-react';

interface TimelineItem {
  id: string;
  type: 'education' | 'certification';
  title: string;
  institution: string;
  location?: string;
  period: string;
  description: string[];
  skills: string[];
}

export default function Experience() {
  const timelineData: TimelineItem[] = [
    {
      id: 'edu1',
      type: 'education',
      title: 'Full Stack Developer with AI',
      institution: 'PW Institute of Innovation',
      location: 'India',
      period: 'Aug 2025 - Jul 2026',
      description: [
        'Intensive professional program focusing on integration of modern generative AI workflows with full-stack web engineering.',
        'Developed agentic systems using LLM APIs to perform automated, context-aware user workflows.',
        'Mastered advanced backend design, API orchestration, database scaling, and DevOps principles.'
      ],
      skills: ['React.js', 'Node.js', 'Agentic AI', 'Prompt Engineering', 'API Design']
    },
    {
      id: 'cert1',
      type: 'certification',
      title: 'Microsoft Powered: Architecting Agentic AI Business Solutions',
      institution: 'Physics Wallah',
      period: 'Credentialed',
      description: [
        'Learned to design and deploy autonomous AI agents capable of reasoning, planning, and executing business operations.',
        'Explored prompt engineering methodologies, retrieval augmented generation (RAG), and vector databases.'
      ],
      skills: ['Agentic AI', 'RAG', 'Vector Databases', 'Solution Architecture']
    },
    {
      id: 'cert2',
      type: 'certification',
      title: 'Claude AI: From Basics to Build',
      institution: 'Physics Wallah',
      period: 'Credentialed',
      description: [
        'Specialized course on building applications using Anthropic Claude models and Anthropic Developer Console.',
        'Learned to implement structured JSON outputs, system prompts, tool usage (function calling), and context management.'
      ],
      skills: ['Claude AI API', 'Function Calling', 'JSON Schema', 'Context Optimization']
    },

    {
      id: 'cert3',
      type: 'certification',
      title: 'Full Stack Development with AI',
      institution: 'Professional Training',
      period: 'Credentialed',
      description: [
        'Comprehensive curriculum detailing deployment workflows, cloud-based asset uploading, and database scaling.',
        'Practiced deploying scalable MERN stack web applications on cloud providers like Render and Vercel.'
      ],
      skills: ['MERN Stack', 'Cloudinary', 'MongoDB Atlas', 'Vercel / Render']
    }
  ];

  // Keep track of which accordion panels are expanded
  const [expandedId, setExpandedId] = useState<string | null>('edu1');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-200/50 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & Credentials
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-violet-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm max-w-sm mx-auto">
            Chronological learning journey, professional specializations, and upskilling credentials.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-8 text-left">
          {timelineData.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className="relative pl-8 md:pl-10 group">
                
                {/* Timeline Icon Node with distinct styling for Edu vs Cert */}
                <span className={`absolute -left-[17px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-2 transition-all duration-300 shadow-sm ${
                  isExpanded 
                    ? 'border-sky-500 ring-4 ring-sky-500/10' 
                    : 'border-slate-200 dark:border-slate-800 group-hover:border-slate-350 dark:group-hover:border-slate-700'
                }`}>
                  {item.type === 'education' ? (
                    <GraduationCap className={`h-4 w-4 transition-colors duration-300 ${
                      isExpanded ? 'text-sky-500' : 'text-slate-400'
                    }`} />
                  ) : (
                    <Award className={`h-4 w-4 transition-colors duration-300 ${
                      isExpanded ? 'text-violet-500' : 'text-slate-400'
                    }`} />
                  )}
                </span>

                {/* Card Container */}
                <div 
                  onClick={() => toggleExpand(item.id)}
                  className={`glass-card p-6 border border-slate-200/40 dark:border-slate-800/40 cursor-pointer transition-all duration-300 ${
                    isExpanded 
                      ? 'ring-2 ring-sky-500/10 border-sky-500/35 dark:border-sky-500/20' 
                      : 'hover:border-slate-300 dark:hover:border-slate-750'
                  }`}
                >
                  
                  {/* Card Title & Meta Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white flex flex-wrap items-center gap-1.5 leading-snug">
                        <span>{item.title}</span>
                        <span className="text-sm font-normal text-slate-500 dark:text-slate-400 select-none">
                          at {item.institution}
                        </span>
                      </h3>
                      
                      {/* Subtitle Details */}
                      <div className="flex flex-wrap items-center gap-3.5 mt-2 text-xs font-semibold text-slate-400 dark:text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {item.period}
                        </span>
                        {item.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Accordion Arrow */}
                    <div className={`p-1 rounded-lg text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-all duration-200 ${
                      isExpanded ? 'bg-slate-100 dark:bg-slate-800' : ''
                    }`}>
                      {isExpanded ? (
                        <ChevronDown className="h-4.5 w-4.5" />
                      ) : (
                        <ChevronRight className="h-4.5 w-4.5" />
                      )}
                    </div>
                  </div>

                  {/* Expandable Description Area */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isExpanded 
                        ? 'grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-slate-100 dark:border-slate-850' 
                        : 'grid-rows-[0fr] opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="overflow-hidden space-y-5">
                      <ul className="space-y-3 text-sm text-slate-655 dark:text-slate-350">
                        {item.description.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="p-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 border border-emerald-100/10 dark:border-emerald-900/10 mt-0.5 flex-shrink-0">
                              <Check className="h-3 w-3" />
                            </span>
                            <span className="text-slate-650 dark:text-slate-300">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technical Badges */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 text-xs font-semibold rounded-lg bg-sky-50 dark:bg-sky-950/40 text-sky-655 dark:text-sky-400 border border-sky-100 dark:border-sky-900/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
