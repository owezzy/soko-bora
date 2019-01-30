import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { User } from './user'

@NgModule({
  declarations: [ProfileComponent, LogoutComponent],
  imports: [CommonModule, UserRoutingModule],
  providers: [User]
})
export class UserModule {}
