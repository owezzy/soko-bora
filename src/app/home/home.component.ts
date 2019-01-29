import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-home',
  styles: [
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
  ],
  template: `
    <div *ngIf="displayLogin">
      <app-login></app-login>
    </div>
    <div *ngIf="!displayLogin">
      <span class="mat-display-2">Welcome to Soko Bora</span>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  private  _displayLogin = true
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.authStatus.subscribe(
      authStatus => (this._displayLogin = !authStatus.isAuthenticated)
    )
  }

  get displayLogin() {
    return this._displayLogin
  }
}
