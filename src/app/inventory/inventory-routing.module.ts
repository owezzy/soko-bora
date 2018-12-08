import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { InventoryComponent } from './inventory.component'
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component'
import { ProductsComponent } from './products/products.component'
import { CategoriesComponent } from './categories/categories.component'
import { StockEntryComponent } from './stock-entry/stock-entry.component'

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      { path: '', redirectTo: '/inventory/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: InventoryDashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'stock', component: StockEntryComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
