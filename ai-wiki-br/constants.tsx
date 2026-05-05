import { Category } from './types';
import { Scale, Briefcase, FileText, MessageSquare, ShieldCheck, GraduationCap } from 'lucide-react';
import React from 'react';

export const CATEGORY_ICONS: Record<Category, React.ReactNode> = {
  [Category.ALL]: <Scale className="w-4 h-4" />,
  [Category.EXAM_PREP]: <GraduationCap className="w-4 h-4" />,
  [Category.LEGAL_DRAFTING]: <FileText className="w-4 h-4" />,
  [Category.ADMINISTRATIVE]: <Briefcase className="w-4 h-4" />,
  [Category.CLIENT_COMMS]: <MessageSquare className="w-4 h-4" />,
  [Category.ANALYSIS]: <ShieldCheck className="w-4 h-4" />,
};
