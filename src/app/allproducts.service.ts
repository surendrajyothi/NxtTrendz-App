import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
	providedIn: 'root'
})

export class AllproductsService {


	primeDeals = 'https://apis.ccbp.in/prime-deals';

	token = "";

	cartItems = [];

	// myTotalPrice: number = 0;

	productDetailsPaths: any;


	constructor(private _httpRequest: HttpClient, private _authToken: CookieService) { }

	calucultarCartPrice(): any {
		let totalPrice = 0
		for (let eachProductItem of this.cartItems) {
			totalPrice += eachProductItem.price * eachProductItem.quantity
			return totalPrice
		}
	}



	getProducts(sortValue) {
		const productsUrl = `https://apis.ccbp.in/products?sort_by=${sortValue}`;
		const myToken = this._authToken.get('jwtToken')
		const headers = new HttpHeaders({
			Authorization: `Bearer ${myToken}`
		})

		return this._httpRequest.get(productsUrl, { headers })

	}

	getProductDetails(data) {
		const result = `https://apis.ccbp.in/products/${data}`
		const myToken = this._authToken.get('jwtToken')
		const headers = new HttpHeaders({
			Authorization: `Bearer ${myToken}`
		})
		return this._httpRequest.get(result, { headers })
	}



	getPrimeDeals() {
		const myToken = this._authToken.get('jwtToken')
		const headers = new HttpHeaders({
			Authorization: `Bearer ${myToken}`
		})
		return this._httpRequest.get(this.primeDeals, { headers })
	}




}
