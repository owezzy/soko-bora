import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { InventoryRoutingModule } from './inventory-routing.module'
import { InventoryComponent } from './inventory.component'
import { AppMaterialModule } from '../app.material.module'
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component'
import { StockEntryComponent } from './stock-entry/stock-entry.component'
import { ProductsComponent } from './products/products.component'
import { CategoriesComponent } from './categories/categories.component'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [InventoryComponent, InventoryDashboardComponent, StockEntryComponent, ProductsComponent, CategoriesComponent],
  imports: [CommonModule, InventoryRoutingModule, AppMaterialModule, FlexLayoutModule, ],
})
export class InventoryModule {}
