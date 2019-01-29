import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MaterialModule } from '../material.module'
import { ManagerHomeComponent } from './manager-home/manager-home.component'
import { ManagerRoutingModule } from './manager-routing.module'
import { ManagerComponent } from './manager.component'
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component'
import { UserManagementComponent } from './user-management/user-management.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AuthGuard } from '../auth/auth-guard.guard'
import { AuthService } from '../auth/auth.service'

@NgModule({
  declarations: [
    ManagerHomeComponent,
    ManagerComponent,
    UserManagementComponent,
    ReceiptLookupComponent,
  ],
  imports: [CommonModule, ManagerRoutingModule, MaterialModule, FlexLayoutModule],
  providers: [AuthGuard, AuthService]
})
export class ManagerModule {}
