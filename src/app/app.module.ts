import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { myRoutings } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllmaterialsModule } from './allmaterials/allmaterials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserCredentialsService } from './user-credentials.service';
import { AllproductsService } from './allproducts.service';
import { HeaderComponent } from './header/header.component';
import { ProductMModule } from './product-m/product-m.module';
import { CartMModule } from './cart-m/cart-m.module';
// import { CartSummeryComponent } from './cart-summery/cart-summery.component';
import { LogOutComponent } from './log-out/log-out.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		myRoutings,
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AllmaterialsModule,
		ProductMModule, // importing product module
		CartMModule // importing cart module

	],
	providers: [UserCredentialsService, AllproductsService, Title],
	bootstrap: [AppComponent]
})
export class AppModule { }
