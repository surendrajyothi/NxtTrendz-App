import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductMRoutingModule } from './product-m-routing.module';
import { ProductsComponent } from '../products/products.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { PrimeDealsComponent } from '../prime-deals/prime-deals.component';
import { AllmaterialsModule } from '../allmaterials/allmaterials.module';


@NgModule({
  declarations: [
    PrimeDealsComponent,
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductMRoutingModule,
    AllmaterialsModule
  ]
})
export class ProductMModule { }
