import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <a mat-button routerLink="/home">Soko Bora</a>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'soko-bora'
}
