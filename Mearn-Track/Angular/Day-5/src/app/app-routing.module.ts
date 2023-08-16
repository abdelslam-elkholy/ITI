import { MainComponent } from './Components/main/main.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProductComponent } from './Components/single-product/single-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent, title: 'Home Page' },
  { path: 'products', component: MainComponent, title: 'Home Page' },

  {
    path: 'singleProduct/:id',
    component: SingleProductComponent,
    title: 'Products Details',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
