import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { UserRoutingModule } from './user-routing.module'
import { ProfileComponent } from './profile/profile.component'
import { LogoutComponent } from './logout/logout.component'
import { User } from './userModel/user'
import { UserMaterialModule } from './user-material.module'
import { AppMaterialModule } from '../app.material.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ViewUserComponent } from './view-user/view-user.component'

@NgModule({
  declarations: [ViewUserComponent, ProfileComponent, LogoutComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserMaterialModule,
    AppMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule],
})
export class UserModule {
}
