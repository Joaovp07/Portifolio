import React from 'react';
import { Section } from '../components/Section';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon as Github } from '../components/Icons';

export const Projects = () => {
  return (
    <Section 
      id="projects" 
      title="Projetos e Experiência Prática"
      subtitle="Desenvolvedor em formação, construindo experiência através de projetos práticos e acadêmicos."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {portfolioData.projects.map((project, index) => (
          <div 
            key={index}
            className="group flex flex-col bg-card border border-slate-800 hover:border-primary/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-800/50 rounded-lg text-primary group-hover:scale-110 transition-transform">
                  <FolderGit2 size={28} />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Ver no GitHub">
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Ver demonstração">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="mb-2">
                <span className="text-xs font-mono text-primary font-medium px-2 py-1 bg-red-500/10 rounded">
                  {project.type}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              
              <p className="text-slate-400 mb-6 flex-1 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs text-slate-300 font-mono">
                      {tech} {idx < project.technologies.length - 1 && <span className="text-slate-600 ml-2">•</span>}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-wider">
                  <div className={`w-2 h-2 rounded-full ${project.status === 'Concluído' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                  {project.status}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-flex flex-col items-center p-8 bg-slate-900/50 border border-slate-800 rounded-2xl w-full max-w-3xl mx-auto">
          <Github size={40} className="text-slate-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Explore mais no GitHub</h3>
          <p className="text-slate-400 mb-6 max-w-lg">
            Confira meus projetos completos, estudos contínuos e minha evolução diária como desenvolvedor de software.
          </p>
          <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Acessar perfil completo
          </a>
        </div>
      </div>
    </Section>
  );
};
