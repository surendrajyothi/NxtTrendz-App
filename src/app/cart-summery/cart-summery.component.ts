import { Component, Input, OnInit } from '@angular/core';
import { AllproductsService } from '../allproducts.service';

@Component({
	selector: 'app-cart-summery',
	templateUrl: './cart-summery.component.html',
	styleUrls: ['./cart-summery.component.scss']
})
export class CartSummeryComponent implements OnInit {


	cartTotalPrice: number = 0;

	itemsText: string = "";

	myTotalPrice: number = 0;

	constructor(private _cartArray: AllproductsService) { }


	@Input() productData: any = [];


	ngOnInit(): void {

		// let totalPrice: number = 0;

		// for (let eachProduct of this._cartArray.cartItems) {
		// 	totalPrice += eachProduct.price * eachProduct.quantity
		// 	this.myTotalPrice = totalPrice
		// }

		if (this.productData.length === 1) {
			this.itemsText = "1 item in cart"
		}
		else {
			this.itemsText = `${this.productData.length} items in cart`
		}
		this.getTotalCartValue
	}

	getTotalCartValue() {
		console.log(this._cartArray.cartItems.map(t => t.cost).reduce((acc, value) => acc + value, 0));
	}





}
