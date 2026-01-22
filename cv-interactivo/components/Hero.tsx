import React from 'react';
import { RESUME_DATA } from '../constants';
import { Mail, MapPin, Download, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
          Disponible para nuevos proyectos
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
          Hola, soy <span className="text-blue-600">{RESUME_DATA.name}</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-600 font-medium">
          {RESUME_DATA.title}
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
          {RESUME_DATA.summary}
        </p>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-600 mt-4">
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <span>{RESUME_DATA.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>{RESUME_DATA.location}</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
          >
            Contáctame
          </a>
          <button 
            onClick={handlePrint}
            className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2"
          >
            <Download size={18} />
            Descargar CV
          </button>
        </div>

        <div className="flex justify-center md:justify-start gap-6 pt-6 text-slate-400">
           {RESUME_DATA.social.github && (
             <a href={RESUME_DATA.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
               <Github size={24} />
             </a>
           )}
           {RESUME_DATA.social.linkedin && (
             <a href={RESUME_DATA.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
               <Linkedin size={24} />
             </a>
           )}
           {RESUME_DATA.social.twitter && (
             <a href={RESUME_DATA.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
               <Twitter size={24} />
             </a>
           )}
        </div>
      </div>
      
      <div className="w-48 h-48 md:w-72 md:h-72 flex-shrink-0 relative">
        <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        <img 
          src="https://picsum.photos/400/400" 
          alt={RESUME_DATA.name} 
          className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10"
        />
      </div>
    </section>
  );
};

export default Hero;