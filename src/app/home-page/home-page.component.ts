import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  title = "Home-page";

  constructor(private presentTitle: Title, private _cookies: CookieService, private _router: Router) { }

  ngOnInit(): void {
    this.presentTitle.setTitle(this.title)

    let token = this._cookies.get('jwtToken')
    if (token !== "") {
      this._router.navigate(["/"])
    }
    console.log(token)
  }



}
