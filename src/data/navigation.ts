import { NavLink, SocialLink } from '../types';

export const navLinks: NavLink[] = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Work', to: 'work' },
  { name: 'Contact', to: 'contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Email', url: 'mailto:john.doe@example.com', icon: 'mail' },
];