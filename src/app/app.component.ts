import { Component, ViewEncapsulation, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  menuItems: MenuItem[] = [
    {
      label: `Home`,
      icon: 'pi pi-question-circle',
      routerLink: 'home'
    },
    {
      label: `Components`,
      icon: 'pi pi-question-circle',
      routerLink: 'components'
    },
    {
      label: `Features`,
      icon: 'pi pi-question-circle',
      routerLink: 'features'
    },
    {
      label: `Error`,
      icon: 'pi pi-question-circle',
      routerLink: 'error'
    },
    {
      label: `Resources`,
      icon: 'pi pi-question-circle',
      routerLink: 'resources'
    },
    {
      label: `Help`,
      icon: 'pi pi-question-circle',
      routerLink: 'help'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
