import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AllproductsService } from '../allproducts.service';



@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})



export class ProductsComponent implements OnInit {

	title = "Product-page"

	sortOptins = [
		{
			optionId: 'PRICE_HIGH',
			displayText: 'Price (High-Low)',
		},
		{
			optionId: 'PRICE_LOW',
			displayText: 'Price (Low-High)'
		},
	]

	defaultValue = this.sortOptins[0].optionId;

	productsArray: any = [];

	movingPaths: any = []

	quantity: any;

	constructor(private _productService: AllproductsService,
		private _router: Router,

		private _titleService: Title
	) { }

	selectOption(data) {
		this.defaultValue = data.target.value
	}

	ngOnInit(): void {
		this._titleService.setTitle(this.title)

		this._productService.getProducts(this.defaultValue).subscribe((data) => {
			this.productsArray = data
		})

	}

	productDetails(data: any, titleValue: any) {
		this._titleService.setTitle(`Buy ${titleValue} at NxtTrendz`)

		this._router.navigate([`/products/${data}`])


	}


}


