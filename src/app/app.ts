import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectCard } from './features/projects/project-card/project-card';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectCard, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
