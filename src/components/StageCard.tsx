
import React from 'react';
import { CalendarClock, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface StageCardProps {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  image: string;
}

const StageCard = ({
  id,
  title,
  company,
  location,
  period,
  description,
  technologies,
  image
}: StageCardProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={`Stage chez ${company}`} 
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-navy-800">{title}</CardTitle>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Stage {id}
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-2 text-gray-600">
          <MapPin size={16} className="text-blue-500" />
          {company}, {location}
        </CardDescription>
        <CardDescription className="flex items-center gap-2 text-gray-600">
          <CalendarClock size={16} className="text-blue-500" />
          {period}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-100 pt-4">
        <a href={`#stage-${id}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
          En savoir plus
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </CardFooter>
    </Card>
  );
};

export default StageCard;
