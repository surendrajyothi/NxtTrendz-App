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

	itemsText: string = "";

	cartItemPrice: number;

	constructor(private _cartArray: AllproductsService, private _titleService: Title) { }

	ngOnInit(): void {
		this._titleService.setTitle(this.title)

		this.userProductsArray = this._cartArray.cartItems

	}


	deleteItem(data): void {
		let resultedArray = this.userProductsArray
		let filterdArray = resultedArray.filter(each => each.id != data)
		this.userProductsArray = filterdArray
	}

	removeAll(): void {
		this.userProductsArray = []
	}




	decreaseQuantity(productItem: any) {
		this.userProductsArray.map(eachItem => {
			if ((eachItem.quantity > 1) && (eachItem.id === productItem.id)) {
				let result = eachItem.quantity - 1
				eachItem.quantity = result
			}
		})
	}

	increaseQuantity(productItem: any) {
		this.userProductsArray.map(eachItem => {
			if (eachItem.id === productItem.id) {
				let result = eachItem.quantity + 1
				eachItem.quantity = result
			}
		})
	}





}
