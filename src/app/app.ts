import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectCard } from './features/projects/project-card/project-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectCard, ProjectCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
