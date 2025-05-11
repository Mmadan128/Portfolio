import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce platform built with React, Node.js, and MongoDB. Features include product search, filtering, cart functionality, and secure checkout.',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
    featured: true
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'A weather application that displays current weather conditions and forecasts for any location. Built with React and OpenWeather API.',
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'API Integration', 'CSS3'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity app that helps users organize tasks, set priorities, and track progress. Features drag-and-drop functionality and data visualization.',
    imageUrl: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
    featured: true
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for social media managers to track performance across multiple platforms in real-time.',
    imageUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Chart.js', 'Social APIs', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  }
];