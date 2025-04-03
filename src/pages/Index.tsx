
import React from 'react';
import Hero from '@/components/Hero';
import StageCard from '@/components/StageCard';
import ProjectCard from '@/components/ProjectCard';

const stages = [
  {
    id: 1,
    title: "Développement d'une application web de gestion",
    company: "Electro Sphère",
    location: "Revin",
    period: "Juin 2024",
    description: "Développement d'une application web pour la gestion du reconditionnement d'appareils électroménagers.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    image: "/lovable-uploads/7a10277e-271d-409c-8a0e-6b566f10b0ac.png"
  },
  {
    id: 2,
    title: "Développement d'un site web vitrine",
    company: "Centre social Fumay Charnois Animation",
    location: "Fumay",
    period: "Janvier 2025",
    description: "Conception et développement d'un site web vitrine pour présenter le centre social et ses activités.",
    technologies: ["PHP", "HTML", "JavaScript", "Bootstrap"],
    image: "/lovable-uploads/e89fe14d-7526-44f7-9654-a8a056e2a209.png"
  }
];

const devProjects = [
  {
    id: "score-resto",
    title: "Score-resto",
    description: "Site web pour un restaurant développé en architecture MVC en PHP.",
    type: "dev",
    teamSize: 1,
    technologies: ["PHP", "MVC", "HTML/CSS", "MySQL"],
    skills: ["Architecture MVC", "Développement backend", "Base de données", "Interface utilisateur"]
  },
  {
    id: "roulette",
    title: "Roulette",
    description: "Application web permettant de tirer au sort des élèves dans une classe et de les noter.",
    type: "dev",
    teamSize: 1,
    technologies: ["PHP", "JavaScript", "HTML/CSS"],
    skills: ["Programmation orientée objet", "Manipulation du DOM", "Gestion des événements", "Stockage de données"]
  },
  {
    id: "success",
    title: "Success",
    description: "Application web avec le framework Vue.js permettant de créer ou passer des QCM selon le rôle de l'utilisateur.",
    type: "dev",
    teamSize: 3,
    technologies: ["Vue.js", "JavaScript", "API REST", "CSS"],
    skills: ["Framework JS", "Composants", "Authentification", "Travail d'équipe"]
  },
  {
    id: "cantineo",
    title: "Cantineo",
    description: "Application mobile développée en React Native pour la gestion des transactions d'une cantine.",
    type: "dev",
    teamSize: 1,
    technologies: ["React Native", "JavaScript", "API REST"],
    skills: ["Développement mobile", "État de l'application", "UI/UX mobile", "Gestion des données"]
  }
];

const cyberProjects = [
  {
    id: "docker",
    title: "Docker",
    description: "Utilisation de Docker pour créer, déployer et exécuter des applications dans des conteneurs.",
    type: "cyber",
    teamSize: 1,
    technologies: ["Docker", "Docker Compose", "Conteneurisation"],
    skills: ["Virtualisation", "Conteneurisation", "DevOps", "Déploiement"]
  },
  {
    id: "ubuntu-server",
    title: "Ubuntu Server",
    description: "Création d'une machine virtuelle sur VirtualBox contenant un ISO Ubuntu Server pour utiliser le terminal Linux.",
    type: "cyber",
    teamSize: 1,
    technologies: ["VirtualBox", "Ubuntu Server", "Linux", "Terminal"],
    skills: ["Virtualisation", "Administration système", "Ligne de commande", "Systèmes Linux"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <Hero />
      
      {/* Stages section */}
      <section id="stages" className="page-container bg-white py-16">
        <h2 className="section-title text-center">Mes stages professionnels</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Découvrez mes expériences professionnelles en entreprise dans le cadre de mon BTS SIO
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {stages.map((stage) => (
            <StageCard key={stage.id} {...stage} />
          ))}
        </div>
      </section>
      
      {/* Projects section */}
      <section id="projects" className="page-container bg-blue-50 py-16">
        <h2 className="section-title text-center">Mes projets</h2>
        
        <div className="mt-10">
          <h3 className="section-subtitle">Projets de développement</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {devProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="section-subtitle">Projets de cybersécurité</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {cyberProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact section */}
      <section className="page-container gradient-bg py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Besoin d'un projet web ?</h2>
          <p className="text-lg md:text-xl mb-8">
            Je suis à la recherche d'opportunités pour mettre en pratique mes compétences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:nabil.bennadi@outlook.fr"
              className="inline-flex items-center px-6 py-3 border border-white bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              Me contacter
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="/cv"
              className="inline-flex items-center px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Voir mon CV
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-navy-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Nabil Bennadi - Portfolio BTS SIO</p>
            <p className="text-xs text-gray-400 mt-2">
              Lycée Gaspard Monge - Charleville Mézières
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
