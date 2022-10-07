import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'NxtShopping-App';

	activated: any = [];

	loginSection: any = "";

	event$

	constructor(private _activatedRoute: Router, private _location: Location) {
		this.event$ = this._location.onUrlChange((val) => {
			this.loginSection = val.slice(1)
		})
	}

	ngOnInit() { }

	ngOnDestroy() {
		this.event$.unsubscribe()

		/*
		why unsubscibre is Mandatory:
		Do not forget to unsubscribe, the subscription
		when the component is destroyed. Not doing so will lead
		to a memory leak as the subscription will keep running.
		*/

	}

}
