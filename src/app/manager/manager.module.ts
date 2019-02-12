import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AppMaterialModule } from '../app.material.module'
import { ManagerHomeComponent } from './manager-home/manager-home.component'
import { ManagerRoutingModule } from './manager-routing.module'
import { ManagerComponent } from './manager.component'
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component'
import { UserManagementComponent } from './user-management/user-management.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AuthGuard } from '../auth/auth-guard.guard'
import { AuthService } from '../auth/auth.service'
import { UserTableComponent } from './user-table/user-table.component'
import { UserResolve } from '../user/userModel/user.resolve'
import { SharedComponentsModule } from '../shared-components.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UserService } from '../user/userModel/user.service'

@NgModule({
  declarations: [
    ManagerHomeComponent,
    ManagerComponent,
    UserManagementComponent,
    ReceiptLookupComponent,
    UserTableComponent,
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AuthService, UserService, UserResolve],
})
export class ManagerModule {
}
