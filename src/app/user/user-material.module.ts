import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  MatAutocompleteModule,
  MatDatepickerModule,
  MatLineModule,
  MatNativeDateModule,
  MatRadioModule,
  MatStepperModule,
  MatDividerModule
} from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatDividerModule,
    MatLineModule,
    MatNativeDateModule,
    MatRadioModule,
    MatStepperModule
  ],
  exports: [
    CommonModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatDividerModule,
    MatLineModule,
    MatNativeDateModule,
    MatRadioModule,
    MatStepperModule
  ]
})
export class UserMaterialModule {
}
