
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <Badge variant="secondary" className="bg-navy-50 text-navy-700 hover:bg-navy-100">
      {skill}
    </Badge>
  );
};

export default SkillBadge;
