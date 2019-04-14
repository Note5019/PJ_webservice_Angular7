import { MasterProductComponent } from './pages/master-product/master-product.component';
import { CategoryComponent } from './pages/category/category.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'master/product', component: MasterProductComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
