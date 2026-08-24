import {
  Code2,
  Terminal,
  Database,
  Layout,
  Server,
  User,
} from 'lucide-react';

export const portfolioData = {
  personal: {
    name: "João Vitor Pires Ribeiro",
    shortName: "João Pires",
    title: "Desenvolvedor em Formação | Estudante de Análise e Desenvolvimento de Sistemas",
    subtitle: "Transformando problemas em soluções através da tecnologia.",
    email: "contato@joaopires.dev", 
    github: "https://github.com/Joaovp07",
    linkedin: "https://linkedin.com/in/joaovitor",
    resume: "/cv-joao-vitor.pdf", 
    bio: "Sou estudante de Análise e Desenvolvimento de Sistemas na UNICID e atuo como desenvolvedor em formação. Meu objetivo é transformar desafios complexos em soluções eficientes através de software. Atualmente, aprofundo meus conhecimentos em Front-end, Back-end, APIs e arquitetura de sistemas, desenvolvendo projetos práticos para consolidar minha base técnica. Busco uma oportunidade como Estagiário ou Desenvolvedor Júnior para contribuir com equipes de tecnologia, aprender continuamente e evoluir profissionalmente.",
  },
  learning: [
    "JavaScript", "React", "Node.js", "Python", "APIs REST", "Full Stack", "SQL", "Git/GitHub"
  ],
  skills: [
    {
      category: "Front-end",
      icon: Layout,
      items: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Design Responsivo"]
    },
    {
      category: "Back-end",
      icon: Server,
      items: ["Node.js", "Express.js", "Python", "FastAPI", "Flask", "MVC"]
    },
    {
      category: "Banco de Dados",
      icon: Database,
      items: ["SQLite", "SQL", "MongoDB", "PostgreSQL"]
    },
    {
      category: "APIs & Segurança",
      icon: Terminal,
      items: ["REST APIs", "JWT", "Autenticação"]
    },
    {
      category: "Ferramentas & DevOps",
      icon: Code2,
      items: ["Git", "GitHub"]
    },
    {
      category: "Soft Skills",
      icon: User,
      items: [
        "Raciocínio Lógico", "Resolução de Problemas", "Pensamento Analítico",
        "Comunicação Clara", "Trabalho em Equipe", "Proatividade",
        "Organização", "Aprendizado Rápido", "Adaptabilidade", "Comprometimento"
      ]
    }
  ],
  projects: [
    {
      name: "Node API REST",
      description: "Desenvolvimento de uma API RESTful utilizando Node.js. Projeto prático com foco em estruturação de rotas, manipulação de dados e arquitetura back-end para sistemas escaláveis.",
      type: "Projeto Prático",
      technologies: ["Node.js", "Express.js", "API REST", "JavaScript"],
      status: "Concluído",
      github: "https://github.com/Joaovp07/node-api-rest",
      demo: null
    },
    {
      name: "Projeto Futebol",
      description: "Aplicação voltada para o contexto esportivo. Desenvolvimento focado na construção de interfaces consistentes e interatividade de elementos visuais.",
      type: "Projeto Pessoal",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      status: "Concluído",
      github: "https://github.com/Joaovp07/projeto-futebol",
      demo: null
    },
    {
      name: "Calculadora de IMC",
      description: "Aplicação interativa para o cálculo do Índice de Massa Corporal (IMC). Inclui validação de dados de entrada do usuário e atualização dinâmica da interface via manipulação do DOM.",
      type: "Projeto Prático",
      technologies: ["JavaScript", "HTML", "CSS", "DOM"],
      status: "Concluído",
      github: "https://github.com/Joaovp07/calculadoraImc",
      demo: null
    },
    {
      name: "Jogo Mario Web",
      description: "Recriação de um minigame inspirado no clássico Super Mario para ambiente web. Foco no desenvolvimento de lógica de programação, detecção de colisão, eventos e animações em CSS.",
      type: "Projeto Pessoal / Jogo",
      technologies: ["JavaScript", "CSS Animations", "Lógica de Programação"],
      status: "Concluído",
      github: "https://github.com/Joaovp07/Jogo-Mario-V1",
      demo: null
    }
  ],
  education: [
    {
      institution: "Universidade Cidade de São Paulo - UNICID",
      course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      period: "2025 - Em andamento",
      description: "Formação em desenvolvimento, arquitetura de sistemas e metodologias da área de TI."
    }
  ],
  courses: [
    "Técnico em Desenvolvimento de Sistemas — SENAC EAD",
    "Desenvolvimento Web: HTML5 e CSS3 — Escola Virtual Bradesco",
    "Lógica de Programação — Escola Virtual Bradesco",
    "Informática e Pacote Office — Escola Virtual Bradesco",
    "Trabalhador 4.0 - Pacote Office Avançado — CATE",
    "Desenvolvimento Web — Alura"
  ],
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Básico / Intermediário (Foco Técnico)" }
  ]
};
