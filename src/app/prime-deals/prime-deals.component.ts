import { Component, OnInit } from '@angular/core';
import { AllproductsService } from '../allproducts.service';

@Component({
  selector: 'app-prime-deals',
  templateUrl: './prime-deals.component.html',
  styleUrls: ['./prime-deals.component.scss']
})
export class PrimeDealsComponent implements OnInit {

  primeDeals:any=[];

  constructor(private _primeDeals:AllproductsService) { }

  ngOnInit(): void {
    this._primeDeals.getPrimeDeals().subscribe((data)=>{
      let Products = data['prime_deals']
      this.primeDeals = Products;
    })
  }

}
