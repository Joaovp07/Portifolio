import React from 'react';
import { Section } from '../components/Section';
import { Terminal } from '../components/Terminal';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { learning } = portfolioData;

  return (
    <Section id="about" title="Sobre mim">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="prose prose-invert max-w-none text-slate-400 space-y-6 text-lg leading-relaxed">
            <p>
              Sou o João, estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> pela UNICID, construindo minha trajetória na área de Tecnologia da Informação.
            </p>
            <p>
              Meu interesse pela tecnologia surgiu da vontade de entender como os sistemas funcionam nos bastidores e da possibilidade de criar soluções que resolvem problemas reais. Atualmente, foco no desenvolvimento <strong>Full Stack</strong>, com forte interesse em Back-end e APIs.
            </p>
            <p>
              Acredito na prática como principal motor do aprendizado. Por isso, estou sempre desenvolvendo projetos paralelos para consolidar teorias e enfrentar desafios técnicos. Meu objetivo é ingressar no mercado como <strong>Estagiário ou Desenvolvedor Júnior</strong>, onde poderei contribuir, aprender e crescer profissionalmente.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary"></span>
              Em aprofundamento contínuo
            </h3>
            <div className="flex flex-wrap gap-2">
              {learning.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm text-slate-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:pl-8">
          <Terminal />
        </div>
      </div>
    </Section>
  );
};
