import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  aboutMe = {
    description: `I'm a passionate Full Stack Developer with experience in building 
    responsive and user-friendly web applications. I love working with modern technologies 
    and continuously learning new skills to improve my craft.`,
    experience: '3+ Years',
    projects: '50+ Projects',
    clients: '30+ Clients'
  };

  skills = [
    { name: 'Web Development', percentage: 90 },
    { name: 'UI/UX Design', percentage: 85 },
    { name: 'Problem Solving', percentage: 88 },
    { name: 'Team Collaboration', percentage: 92 }
  ];
}
