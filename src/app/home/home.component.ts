import { Component, OnInit } from '@angular/core'

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
  displayLogin = true
  constructor() {}

  ngOnInit() {}
}
