import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-page-not-found',
  template: `
    <p>This Page doesnt exist. Go back to <a routerLink="/home">Home</a></p>
  `,
  styles: [],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
