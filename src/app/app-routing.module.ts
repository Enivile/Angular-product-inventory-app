import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductEditComponent } from './product-edit/product-edit.component';



const routes: Routes = [
{
  path: 'body',
  component: BodyComponent
},
{
  path: 'edit/:id',
  component: ProductEditComponent
},
{
  path: 'signin',
  component: SignInComponent
},
{
  path: 'product/create',
  component: ProductGetComponent
},
{
  path: 'products',
  component: ProductGetComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
