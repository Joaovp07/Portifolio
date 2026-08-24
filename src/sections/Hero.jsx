import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, ChevronDown } from 'lucide-react';
import { GithubIcon as Github } from '../components/Icons';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-grid-pattern">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Disponível para oportunidades em Tecnologia
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Olá, eu sou <span className="text-primary">{personal.name.split(' ')[0]} {personal.name.split(' ')[1]}.</span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-slate-300 mb-6"
          >
            Desenvolvedor em formação apaixonado por tecnologia.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed"
          >
            Estudante de Análise e Desenvolvimento de Sistemas, construindo soluções através de desenvolvimento Web, Back-end, APIs e tecnologias modernas.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              Ver projetos <ArrowRight size={18} />
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <Github size={18} /> GitHub
            </a>
            <a href="#contact" className="text-slate-400 hover:text-white font-medium transition-colors ml-2">
              Entre em contato
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hidden md:flex"
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
};
