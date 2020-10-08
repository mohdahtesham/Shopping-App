import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'orders', component: ListOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[{provide:LocationStrategy,useClass:HashLocationStrategy}]
})
export class AppRoutingModule { }
