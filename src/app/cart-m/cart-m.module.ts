import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartMRoutingModule } from './cart-m-routing.module';
import { CartSummeryComponent } from '../cart-summery/cart-summery.component';
import { CartComponent } from '../cart/cart.component';
import { AllmaterialsModule } from '../allmaterials/allmaterials.module';


@NgModule({
  declarations: [
    CartSummeryComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    CartMRoutingModule,
    AllmaterialsModule
  ]
})
export class CartMModule { }
