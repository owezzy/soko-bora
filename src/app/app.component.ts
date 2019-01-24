import { Component, OnInit } from '@angular/core'
import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import { AuthService } from './auth/auth.service'
import { ObservableMedia } from '@angular/flex-layout'

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="app-container">
      <mat-toolbar color="primary" fxLayoutGap="18px" class="app-toolbar"
                   [class.app-is-mobile]="media.isActive('xs')">
        <button *ngIf="displayAccountIcons" mat-icon-button (click)="sidenav.toggle()">
          <mat-icon>menu</mat-icon>
        </button>
        <a mat-button routerLink="/home">
          <mat-icon svgIcon="grocery"></mat-icon>
          <span class="mat-h2"> Soko Bora</span></a>
        <span class="flex-spacer"></span>
        <button *ngIf="displayAccountIcons"
                mat-mini-fab
                routerLink="/user/profile"
                matTooltip="Profile"
                aria-label="User Profile">
          <mat-icon>account_circle</mat-icon>
        </button>
        <button *ngIf="displayAccountIcons"
                mat-mini-fab
                routerLink="/user/logout"
                matTooltip="Logout"
                aria-label="Logout"
        >
          <mat-icon>lock_open</mat-icon>
        </button>
      </mat-toolbar>
      <mat-sidenav-container class="app-sidenav-container"
                             [style.marginTop.px]="media.isActive('xs') ? 56: 0">
        <mat-sidenav #sidenav [mode]="media.isActive('xs') ? 'over':'side'"
                     [fixedInViewport]="media.isActive('xs')" fixedTopGap="56">
          <app-side-nav-menu-component></app-side-nav-menu-component>
        </mat-sidenav>
        <mat-sidenav-content>
          <router-outlet class="app-container"></router-outlet>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
})
export class AppComponent implements OnInit {
  title = 'soko-bora'
  _displayAccountIcons = false

  constructor(private authService: AuthService, public media: ObservableMedia, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'grocery',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/grocery.svg'),
    )
  }

  ngOnInit() {
    this.authService.authStatus.subscribe(
      authStatus => {
        setTimeout(() => {
          this._displayAccountIcons = authStatus.isAuthenticated
        }, 0)
      })
  }

  get displayAccountIcons() {
    return this._displayAccountIcons
  }

}
