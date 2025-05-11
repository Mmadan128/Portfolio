export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export interface NavLink {
  name: string;
  to: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}