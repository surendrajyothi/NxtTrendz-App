import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthenticationGuard } from './authentication.guard'


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomePageComponent },
  {
    path: 'products',
    loadChildren: () => import('./product-m/product-m.module')
      .then(m => m.ProductMModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'products/:id',
    loadChildren: () => import('./product-m/product-m.module')
      .then(m => m.ProductMModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart-m/cart-m.module').
      then(m => m.CartMModule),
    canActivate: [AuthenticationGuard]
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

export const myRoutings = [
  LoginComponent, HomePageComponent, NotFoundComponent

]