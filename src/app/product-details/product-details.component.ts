import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AllproductsService } from '../allproducts.service';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {


	productDetails: any = {}; // product full details 

	defaultQuantity = 1;

	productDetailsArray: any;



	constructor(
		private _activated: ActivatedRoute,
		private _allProductService: AllproductsService,
		private _titleService: Title
	) { }

	ngOnInit(): void {
		this.productDetailsArray = this._allProductService.productDetailsPaths
		this._activated.paramMap.subscribe((params: ParamMap) => {
			let result = (params.get('id'))
			let myNumber = parseInt(result)

			this._allProductService.getProductDetails(myNumber).subscribe((data) => {
				this.productDetails = data;
				this._titleService.setTitle(`${this.productDetails.title} Details Buy NxtTrendz`)
			})
		})

	}



	decreaseQuantity(): void {
		if (this.defaultQuantity > 1) {
			let decrease = this.defaultQuantity - 1
			this.defaultQuantity = decrease;
		}
	}

	increaseQuantity(): void {
		let increase: number = this.defaultQuantity + 1
		this.defaultQuantity = increase;
	}

	addToCart(productDetails: any, defaultQuantity: number): void {
		let payload = {
			id: productDetails.id,
			image: productDetails.image_url,
			title: productDetails.title,
			brand: productDetails.brand,
			price: productDetails.price,
			quantity: defaultQuantity
		}

		let productObject = this._allProductService.cartItems.find(
			eachCartItem => eachCartItem.id === payload.id,
		)

		// incase productObj is undefined then if condition is not executed directley 
		// else condition will be executed it means payload obj is directly pushing-
		// into the cartItems array.

		// incase productObj is gives one object then else condition won't be executed.

		if (productObject) {
			this._allProductService.cartItems.map(eachItem => {
				if (productObject.id === eachItem.id) {
					let updatedQuantity = eachItem.quantity + payload.quantity
					productObject.quantity = updatedQuantity;
				}
			})
		}
		else {
			this._allProductService.cartItems.push(payload)
		}


	}

}
