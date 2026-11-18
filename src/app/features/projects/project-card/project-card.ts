import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard implements OnInit{

  ngOnInit(): void {
    console.log("Olá");
  }


}
