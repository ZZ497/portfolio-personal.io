import React from 'react';
import { RESUME_DATA } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const data = RESUME_DATA.skills;
  
  // Color palette for bars
  const colors = ['#3b82f6', '#6366f1', '#8b5cf6', '#ec4899', '#10b981'];

  return (
    <section id="skills" className="py-16 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
            <Cpu size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Habilidades Técnicas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Chart View */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-[400px]">
            <h3 className="text-lg font-semibold mb-6 text-slate-800">Nivel de Dominio</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data.slice(0, 6)} // Show top 6 for chart
                layout="vertical"
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={100} 
                  tick={{fill: '#475569', fontSize: 12}}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
                  {data.slice(0, 6).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Tags View */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-slate-800">Todas las Habilidades</h3>
            <div className="space-y-6">
              {['Frontend', 'Backend', 'Tools', 'Soft Skills'].map((category) => (
                <div key={category}>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {data.filter(s => s.category === category).map((skill) => (
                      <div 
                        key={skill.name}
                        className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium text-sm shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default"
                      >
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;