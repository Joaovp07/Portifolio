import React from 'react';
import { Section } from '../components/Section';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const Education = () => {
  return (
    <Section 
      id="education" 
      title="Formação Acadêmica"
      className="bg-[#170f0f]/30"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" size={28} />
            Educação Superior
          </h3>
          
          <div className="space-y-8">
            {portfolioData.education.map((item, index) => (
              <div key={index} className="relative pl-8 border-l border-slate-700 pb-2">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-dark border-2 border-primary"></div>
                <span className="text-sm font-mono text-primary mb-1 block">{item.period}</span>
                <h4 className="text-xl font-semibold text-white mb-1">{item.course}</h4>
                <div className="text-slate-300 font-medium mb-3">{item.institution}</div>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-white mb-6 mt-12 flex items-center gap-3">
            <BookOpen className="text-primary" size={24} />
            Idiomas
          </h3>
          <div className="flex flex-col gap-4">
            {portfolioData.languages.map((lang, idx) => (
              <div key={idx} className="bg-card border border-slate-800 rounded-lg p-4 flex justify-between items-center">
                <span className="text-white font-medium">{lang.name}</span>
                <span className="text-slate-400 text-sm">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Award className="text-primary" size={28} />
            Cursos & Qualificações
          </h3>
          
          <div className="bg-card border border-slate-800 rounded-xl p-6 md:p-8">
            <ul className="space-y-4">
              {portfolioData.courses.map((course, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                  <span className="text-slate-300 leading-relaxed">{course}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
