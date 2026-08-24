import React from 'react';
import { Section } from '../components/Section';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  return (
    <Section 
      id="skills" 
      title="Tecnologias & Ferramentas" 
      subtitle="Conhecimentos técnicos adquiridos através de estudos e projetos práticos."
      className="bg-[#0f172a]/30"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.skills.map((skillGroup, index) => {
          const Icon = skillGroup.icon;
          return (
            <div 
              key={index} 
              className="bg-card hover:bg-card-hover border border-slate-800/60 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-blue-500/10 rounded-lg text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white">{skillGroup.category}</h3>
              </div>
              
              <ul className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, idx) => (
                  <li 
                    key={idx}
                    className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded text-sm text-slate-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  );
};
