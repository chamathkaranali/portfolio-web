import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./page/header/header";
import { Home } from "./page/home/home";
import { About } from "./page/about/about";
import { Techstack } from "./page/techstack/techstack";
import { Project } from "./page/project/project";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, About, Techstack, Project],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-web');
  contactInfo = {
    email: 'ranalichamathka@gmail.com',
    phone: '+94 777964803',
    location: 'Nattandiya, Sri Lanka'
  };

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Thank you for your message! I will get back to you soon.');
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
