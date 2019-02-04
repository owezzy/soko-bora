import { NgModule } from '@angular/core'
import {
  MatAutocompleteModule,
  MatDatepickerModule,
  MatLineModule,
  MatNativeDateModule,
  MatRadioModule,
  MatStepperModule,
  MatSelectModule, MatDividerModule,

} from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    MatAutocompleteModule,
    MatDatepickerModule,
    MatDividerModule,
    MatLineModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule
  ],
  exports: [
    MatAutocompleteModule,
    MatDatepickerModule,
    MatDividerModule,
    MatLineModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule
  ]
})
export class UserMaterialModule {
}
