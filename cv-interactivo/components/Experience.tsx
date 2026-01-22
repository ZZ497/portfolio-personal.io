import React from 'react';
import { RESUME_DATA } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
          <Briefcase size={24} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Experiencia Laboral</h2>
      </div>

      <div className="space-y-12 border-l-2 border-slate-200 ml-3 pl-8 md:pl-12 relative">
        {RESUME_DATA.experience.map((job) => (
          <div key={job.id} className="relative group">
            {/* Timeline dot */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full border-4 border-white bg-slate-300 group-hover:bg-blue-600 transition-colors shadow-sm"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
              <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                {job.period}
              </span>
            </div>
            
            <div className="text-lg text-blue-600 font-medium mb-3">{job.company}</div>
            
            <p className="text-slate-600 mb-4">{job.description}</p>
            
            <ul className="space-y-2">
              {job.achievements.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;