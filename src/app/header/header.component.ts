import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
// import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor(private _cookie: CookieService,
		private _router: Router,
	) { }


	// popup purpose function

	// openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
	// 	this.dialog.open(HeaderComponent, {
	// 		width: '250px',
	// 		enterAnimationDuration,
	// 		exitAnimationDuration,
	// 	});
	// } 

	changeButton: any;

	ngOnInit() {
		if (this._cookie.get('jwtToken') === "") {
			this.changeButton = true;
		}
		else {
			this.changeButton = false;
		}
	}

	userLoggedOut() {
		this._cookie.delete('jwtToken');
		this._router.navigate(["login"])
	}



}
