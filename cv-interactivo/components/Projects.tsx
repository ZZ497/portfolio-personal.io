import React from 'react';
import { RESUME_DATA } from '../constants';
import { FolderGit2, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 bg-green-100 rounded-lg text-green-600">
          <FolderGit2 size={24} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Proyectos Destacados</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RESUME_DATA.projects.map((project) => (
          <div 
            key={project.id} 
            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
          >
            <div className="h-48 overflow-hidden relative">
               <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10" />
               <img 
                 src={project.imageUrl} 
                 alt={project.title} 
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
               />
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              
              <p className="text-slate-600 text-sm mb-6 flex-1 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;