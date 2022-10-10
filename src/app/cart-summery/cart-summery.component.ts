import { Component, Input, OnInit } from '@angular/core';
import { AllproductsService } from '../allproducts.service';

@Component({
	selector: 'app-cart-summery',
	templateUrl: './cart-summery.component.html',
	styleUrls: ['./cart-summery.component.scss']
})
export class CartSummeryComponent implements OnInit {
	@Input() cartPrice: any
	@Input() cartText: string

	constructor(private _cartArray: AllproductsService) { }


	ngOnInit(): void {

		// if (this._cartArray.cartItems.length === 1) {
		// 	this.itemsText = "1 item in cart"
		// }
		// else {
		// 	this.itemsText = `${this._cartArray.cartItems.length} items in cart`
		// }

	}






}
