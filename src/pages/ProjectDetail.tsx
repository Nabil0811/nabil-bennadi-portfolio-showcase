
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Github, Users, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SkillBadge from '@/components/SkillBadge';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  type: 'dev' | 'cyber';
  teamSize: number;
  period: string;
  technologies: string[];
  skills: string[];
  images: string[];
}

const projects: Project[] = [
  {
    id: "score-resto",
    title: "Score-resto",
    description: "Site web pour un restaurant développé en architecture MVC en PHP.",
    longDescription: "Score-Resto est un projet complet de site web pour un restaurant, développé en utilisant l'architecture MVC (Modèle-Vue-Contrôleur) en PHP. Ce site permet aux clients de consulter le menu, de réserver une table et de laisser des avis. Il comprend également une interface d'administration permettant au restaurateur de gérer son menu, ses réservations et ses avis.",
    type: "dev",
    teamSize: 1,
    period: "Septembre 2024 - Décembre 2024",
    technologies: ["PHP", "MVC", "HTML/CSS", "MySQL", "JavaScript"],
    skills: ["Architecture MVC", "Développement backend", "Base de données", "Interface utilisateur", "Authentification", "Gestion de session", "Validation de formulaires"],
    images: ["/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "roulette",
    title: "Roulette",
    description: "Application web permettant de tirer au sort des élèves dans une classe et de les noter.",
    longDescription: "L'application Roulette est un outil pédagogique développé pour les enseignants, permettant de tirer au sort des élèves dans une classe et d'attribuer des notes. Cette application facilite la participation équitable des élèves en classe et aide à la gestion des évaluations orales. Elle comprend une interface intuitive pour gérer les classes, les élèves et leurs notes.",
    type: "dev",
    teamSize: 1,
    period: "Octobre 2024 - Novembre 2024",
    technologies: ["PHP", "JavaScript", "HTML/CSS", "MySQL"],
    skills: ["Programmation orientée objet", "Manipulation du DOM", "Gestion des événements", "Stockage de données", "Algorithmes aléatoires", "Export de données", "Interfaces responsive"],
    images: ["/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "success",
    title: "Success",
    description: "Application web avec le framework Vue.js permettant de créer ou passer des QCM selon le rôle de l'utilisateur.",
    longDescription: "Success est une plateforme web interactive développée avec Vue.js, permettant aux formateurs de créer des QCM et aux apprenants de les passer. L'application propose des fonctionnalités avancées comme la création de questions à choix multiples, la correction automatique, le suivi des résultats et l'analyse des performances. Ce projet a été réalisé en équipe, en suivant une méthodologie agile.",
    type: "dev",
    teamSize: 3,
    period: "Janvier 2025 - Mars 2025",
    technologies: ["Vue.js", "JavaScript", "API REST", "CSS", "Node.js", "MongoDB"],
    skills: ["Framework JS", "Composants", "Authentification", "Travail d'équipe", "Gestion d'état", "Routage", "API REST", "Base de données NoSQL"],
    images: ["/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "cantineo",
    title: "Cantineo",
    description: "Application mobile développée en React Native pour la gestion des transactions d'une cantine.",
    longDescription: "Cantineo est une application mobile native conçue pour simplifier la gestion des transactions dans une cantine scolaire ou d'entreprise. Développée avec React Native, elle permet aux utilisateurs de consulter les menus, de passer des commandes, de payer en ligne et de gérer leur solde. L'application inclut également une interface d'administration pour gérer les menus, suivre les commandes et générer des rapports financiers.",
    type: "dev",
    teamSize: 1,
    period: "Février 2025 - Mai 2025",
    technologies: ["React Native", "JavaScript", "API REST", "SQLite"],
    skills: ["Développement mobile", "État de l'application", "UI/UX mobile", "Gestion des données", "Paiement en ligne", "Notifications push", "Mode hors ligne"],
    images: ["/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "docker",
    title: "Docker",
    description: "Utilisation de Docker pour créer, déployer et exécuter des applications dans des conteneurs.",
    longDescription: "Ce projet se concentre sur l'apprentissage et la mise en pratique de Docker pour la conteneurisation d'applications. J'ai exploré comment créer des images Docker personnalisées, gérer des conteneurs, utiliser Docker Compose pour orchestrer des applications multi-conteneurs, et implémenter des bonnes pratiques de sécurité pour les environnements conteneurisés.",
    type: "cyber",
    teamSize: 1,
    period: "Novembre 2024 - Janvier 2025",
    technologies: ["Docker", "Docker Compose", "Conteneurisation", "Linux"],
    skills: ["Virtualisation", "Conteneurisation", "DevOps", "Déploiement", "Microservices", "Orchestration", "Sécurité des conteneurs"],
    images: ["/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "ubuntu-server",
    title: "Ubuntu Server",
    description: "Création d'une machine virtuelle sur VirtualBox contenant un ISO Ubuntu Server pour utiliser le terminal Linux.",
    longDescription: "Dans ce projet, j'ai mis en place une machine virtuelle sur VirtualBox avec Ubuntu Server pour acquérir des compétences en administration système Linux. J'ai appris à naviguer et utiliser efficacement le terminal Linux, à configurer des services réseau, à gérer les utilisateurs et les permissions, et à automatiser des tâches administratives à l'aide de scripts shell.",
    type: "cyber",
    teamSize: 1,
    period: "Septembre 2024 - Octobre 2024",
    technologies: ["VirtualBox", "Ubuntu Server", "Linux", "Terminal", "Bash"],
    skills: ["Virtualisation", "Administration système", "Ligne de commande", "Systèmes Linux", "Services réseau", "Scripting", "Sécurité des serveurs"],
    images: ["/placeholder.svg", "/placeholder.svg"]
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="page-container">
        <div className="max-w-2xl mx-auto text-center py-20">
          <h2 className="text-2xl font-bold text-navy-800">Projet non trouvé</h2>
          <p className="mt-4 text-gray-600">Le projet que vous recherchez n'existe pas.</p>
          <Button 
            onClick={() => navigate('/')} 
            className="mt-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="page-container py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4 text-navy-600"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>
          
          <h1 className="text-3xl font-bold text-navy-800">{project.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Badge 
              variant={project.type === 'dev' ? 'default' : 'secondary'}
              className={project.type === 'dev' ? 'bg-blue-600' : 'bg-navy-600'}
            >
              {project.type === 'dev' ? 'Développement' : 'Cybersécurité'}
            </Badge>
            
            <div className="flex items-center text-gray-600 text-sm">
              <Calendar size={16} className="mr-1.5 text-blue-500" />
              <span>{project.period}</span>
            </div>
            
            {project.teamSize > 1 ? (
              <div className="flex items-center text-gray-600 text-sm">
                <Users size={16} className="mr-1.5 text-blue-500" />
                <span>Projet d'équipe ({project.teamSize} personnes)</span>
              </div>
            ) : (
              <div className="flex items-center text-gray-600 text-sm">
                <User size={16} className="mr-1.5 text-blue-500" />
                <span>Projet individuel</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="page-container py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-navy-800 mb-4">Description du projet</h2>
                <p className="text-gray-700 mb-6">{project.longDescription}</p>
                
                <h3 className="text-lg font-medium text-navy-700 mb-3">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-lg font-medium text-navy-700 mb-3">Captures d'écran</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <div key={index} className="border rounded-md overflow-hidden">
                      <img 
                        src={image} 
                        alt={`Capture d'écran ${index + 1} de ${project.title}`}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-navy-800 mb-4">Compétences acquises</h2>
                <div className="flex flex-col gap-2">
                  {project.skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {project.id === "success" && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-navy-800 mb-4">Travail d'équipe</h2>
                  <p className="text-gray-700 mb-4">
                    Ce projet a été réalisé en équipe de 3 personnes. Nous avons utilisé Git pour la gestion de version et Trello pour suivre l'avancement des tâches.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Voir le dépôt GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
