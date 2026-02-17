import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project',
  imports: [FormsModule, CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.',
      image: 'assets/project1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Task Management App',
      description: 'Real-time task management application with team collaboration features and productivity analytics.',
      image: 'assets/project2.jpg',
      technologies: ['React', 'Firebase', 'Material-UI'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with data visualization and reporting tools.',
      image: 'assets/project3.jpg',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application with location-based forecasts and interactive maps.',
      image: 'assets/project4.jpg',
      technologies: ['JavaScript', 'API Integration', 'CSS3'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Blog Platform',
      description: 'Full-stack blogging platform with rich text editor, comments, and user profiles.',
      image: 'assets/project5.jpg',
      technologies: ['Angular', 'Django', 'MySQL'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with modern design and smooth animations.',
      image: 'assets/project6.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  filterCategory = 'all';

  filterProjects(category: string) {
    this.filterCategory = category;
  }

  get filteredProjects() {
    if (this.filterCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => 
      project.technologies.some(tech => 
        tech.toLowerCase().includes(this.filterCategory.toLowerCase())
      )
    );
  }
}
