import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-side-nav-menu-component',
  styles: [
      `
      .active-link {
        font-weight: bold;
        border-left: 3px solid green;
      }`],

  template: `
    <mat-nav-list>
      <h3 matSubheader>Manager</h3>
      <a mat-list-item routerLinkActive="active-link" routerLink="/manager/users">Users</a>
      <a mat-list-item routerLinkActive="active-link" routerLink="/manager/receipts">Receipts</a>
      <a mat-list-item routerLinkActive="active-link" routerLink="/inventory/stock">Stock Entry</a>
      <a mat-list-item routerLinkActive="active-link" routerLink="/inventory/products">Products</a>
      <a mat-list-item routerLinkActive="active-link" routerLink="/inventory/categories">Categories</a>
      <h3 matSubheader>Clerk</h3>
      <a mat-list-item routerLinkActive="active-link" routerLink="/pos/pos">POS</a>
    </mat-nav-list>`,

})
export class SideNavMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
