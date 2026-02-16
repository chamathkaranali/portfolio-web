import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./page/header/header";
import { Home } from "./page/home/home";
import { About } from "./page/about/about";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-web');
}
