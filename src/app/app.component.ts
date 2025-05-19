import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Início',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Projetos',
        icon: 'pi pi-folder',
        routerLink: '/projetos',
      },
      {
        label: 'Sobre mim',
        icon: 'pi pi-user',
        routerLink: '/sobre',
      },
      {
        label: 'Contato',
        icon: 'pi pi-envelope',
        routerLink: '/contato',
      },
    ];
  }

}
