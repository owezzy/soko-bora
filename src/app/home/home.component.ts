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
    <div fxLayout="column" fxLayoutAlign="center center">
      <span class="mat-display-2">Welcome to Soko Bora</span>
      <button mat-raised-button color="primary">Login</button>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
