import React from 'react';
import { Section } from '../components/Section';
import { portfolioData } from '../data/portfolioData';
import { Mail, Download, ArrowUpRight } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../components/Icons';

export const Contact = () => {
  const { personal } = portfolioData;

  return (
    <>
      <Section id="contact" title="Vamos construir algo juntos?">
        <div className="bg-gradient-to-br from-slate-900 to-[#0f172a] border border-slate-800 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center relative overflow-hidden">
          {/* Decorator */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px]"></div>
          
          <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Estou aberto a oportunidades</h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 relative z-10">
            Buscando uma posição inicial, estágio ou projetos para aplicar meus conhecimentos. 
            Estou disponível para conversas sobre tecnologia, colaborações e desenvolvimento de software.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <a href={`mailto:${personal.email}`} className="btn-primary w-full sm:w-auto">
              <Mail size={18} />
              Enviar e-mail
            </a>
            {/* The resume button links to the configured PDF but since it's a template, we just use the hash or path */}
            <a href={personal.resume} className="btn-outline w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-6 relative z-10">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full text-slate-300 hover:text-white transition-colors group">
              <Github size={24} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full text-slate-300 hover:text-white transition-colors group">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-slate-800 py-8 text-center bg-[#050505]">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <a href="#home" className="text-lg font-bold font-mono tracking-tight text-white mb-4">
            <span className="text-primary">&lt;</span>
            {portfolioData.personal.shortName.replace(' ', '')}
            <span className="text-primary">/&gt;</span>
          </a>
          <p className="text-slate-500 text-sm">
            Desenvolvido com React, Tailwind CSS e muita dedicação.
          </p>
          <p className="text-slate-600 text-xs mt-2">
            &copy; {new Date().getFullYear()} João Vitor Pires Ribeiro. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};
