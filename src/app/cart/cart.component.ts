import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AllproductsService } from '../allproducts.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

	title: string = "Cart-page"

	userProductsArray: any = [];

	cartPrice: number = 0;

	cartText: string;



	constructor(private _cartArray: AllproductsService, private _titleService: Title) { }

	ngOnInit(): void {
		this._titleService.setTitle(this.title)
		this.userProductsArray = this._cartArray.cartItems
		// this.cartPrice = this._cartArray.calucultarCartPrice()
		this.getCartTotalPrice()
		this.getCartTotalItems()
	}



	getCartTotalPrice() {
		let totalPrice = 0
		for (let eachProductItem of this.userProductsArray) {
			totalPrice += eachProductItem.price * eachProductItem.quantity
			this.cartPrice = totalPrice
		}
	}

	getCartTotalItems() {
		if (this._cartArray.cartItems.length === 1) {
			this.cartText = "1 item available in your cart"
		}
		else {
			this.cartText = `${this._cartArray.cartItems.length} items available in your cart`
		}
	}



	// delete product from array
	deleteItem(data): void {
		this._cartArray.cartItems = this._cartArray.cartItems.filter(each => each.id != data)
		this.userProductsArray = this._cartArray.cartItems
		this.getCartTotalPrice()
		this.getCartTotalItems()
	}

	// remove all products from array
	removeAll(): void {
		this.userProductsArray = []
		this._cartArray.cartItems = []
	}

	// quantity decrease function
	decreaseQuantity(productItem: any): void {

		this.userProductsArray.map(eachItem => {
			if ((eachItem.quantity > 1) && (eachItem.id === productItem.id)) {
				let result = eachItem.quantity - 1
				eachItem.quantity = result
			}
		})

		this.getCartTotalPrice()
	}

	// quantity increase function 
	increaseQuantity(productItem: any): void {

		this.userProductsArray.map(eachItem => {
			if (eachItem.id === productItem.id) {
				let result = eachItem.quantity + 1
				eachItem.quantity = result
			}
		})

		this.getCartTotalPrice()

	}




}
