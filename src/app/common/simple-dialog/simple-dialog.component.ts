import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'

@Component({
  template: `
    <h2 mat-dialog-title> data.title</h2>
    <mat-dialog-content>
      <p>data.content</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <span class="flex-spacer"></span>
      <button mat-button mat-dialog-close
              *ngIf="data.cancelText">data.cancelText
      </button>
      <button mat-button mat-raised-button color="primary"
              [mat-dialog-close]="true"></button>
    </mat-dialog-actions>
  `,
  styles: []
})
export class SimpleDialogComponent {

  constructor(
    public  dialogRef: MatDialogRef<SimpleDialogComponent, Boolean>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
}
