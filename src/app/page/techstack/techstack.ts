import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-techstack',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './techstack.html',
  styleUrls: ['./techstack.css'],
})
export class Techstack {
  technologies = [
    {
      category: 'Frontend',
      techs: [
        { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
        { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
        { name: 'Angular', icon: 'fab fa-angular', color: '#DD0031' },
        { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4FC08D' }
      ]
    },
    {
      category: 'Backend',
      techs: [
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
        { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
        { name: 'Java', icon: 'fab fa-java', color: '#007396' },
        { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' }
      ]
    },
    {
      category: 'Database',
      techs: [
        { name: 'MongoDB', icon: 'fas fa-database', color: '#47A248' },
        { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
        { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
        { name: 'Firebase', icon: 'fas fa-fire', color: '#FFCA28' }
      ]
    },
    {
      category: 'Tools & Others',
      techs: [
        { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
        { name: 'GitHub', icon: 'fab fa-github', color: '#181717' },
        { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
        { name: 'AWS', icon: 'fab fa-aws', color: '#232F3E' }
      ]
    }
  ];
}
