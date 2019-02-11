import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AppMaterialModule } from './app.material.module'
import { ViewUserComponent } from './user/view-user/view-user.component'

@NgModule({
  declarations: [ViewUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppMaterialModule,
  ],
  exports: [ViewUserComponent]
})
export class SharedComponentsModule { }
