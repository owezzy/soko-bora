import { Component } from '@angular/core'
import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary" fxLayoutGap="18px">
      <button mat-icon-button><mat-icon>menu</mat-icon></button>
      <a mat-button routerLink="/home"><mat-icon svgIcon="grocery"></mat-icon><span class="mat-h2"> Soko Bora</span></a>
      <span class="flex-spacer"></span>
      <button
        mat-mini-fab
        routerLink="/user/profile"
        matTooltip="Profile"
        aria-label="User Profile"
      >
        <mat-icon>account_circle</mat-icon>
      </button>
      <button
        mat-mini-fab
        routerLink="/user/logout"
        matTooltip="Logout"
        aria-label="Logout"
      >
        <mat-icon>lock_open</mat-icon>
      </button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'soko-bora'

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'grocery',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/grocery.svg')
    )
  }
}
