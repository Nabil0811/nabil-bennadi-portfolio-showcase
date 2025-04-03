
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SkillBadge from './SkillBadge';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  type: 'dev' | 'cyber';
  teamSize: number;
  technologies: string[];
  skills: string[];
}

const ProjectCard = ({
  id,
  title,
  description,
  type,
  teamSize,
  technologies,
  skills
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden h-full card-hover">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-navy-800">{title}</CardTitle>
          <Badge 
            variant={type === 'dev' ? 'default' : 'secondary'}
            className={type === 'dev' ? 'bg-blue-600' : 'bg-navy-600'}
          >
            {type === 'dev' ? 'Développement' : 'Cybersécurité'}
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-2 text-gray-600">
          {teamSize > 1 ? (
            <>
              <Users size={16} className="text-blue-500" />
              Projet d'équipe ({teamSize} personnes)
            </>
          ) : (
            <>
              <User size={16} className="text-blue-500" />
              Projet individuel
            </>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 line-clamp-3">{description}</p>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Compétences:</h4>
          <div className="flex flex-wrap gap-1.5">
            {skills.slice(0, 3).map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
            {skills.length > 3 && (
              <Badge variant="outline" className="bg-gray-50 text-gray-600">
                +{skills.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-100 pt-4">
        <Link
          to={`/project/${id}`}
          className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
        >
          Voir le détail
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
