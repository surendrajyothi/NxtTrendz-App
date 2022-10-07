import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserCredentialsService {

  constructor(private _httpClient:HttpClient,
              private _cookieService:CookieService,
              private _router:Router
            ) { }

  errorMessage="";
  errorStatus :any;
  jwtToken :any;

  postUserDetails = async(data:any) =>{
    const url = "https://apis.ccbp.in/login"
    const body = JSON.stringify(data)
    const response = await (this._httpClient.post(url,body))
    response.subscribe((data) =>{
      if(data != null){
        this.jwtToken = data
        this._cookieService.set('jwtToken',this.jwtToken.jwt_token,{expires:90})
        this._router.navigate([''])
      }
    },(error) =>{
      this.errorStatus = error.ok
      this.errorMessage = error.error.error_msg
      // console.log(error.ok)
      // console.log(error.error.error_msg)
    })
    // response.subscribe((data) =>{
    //   console.log(data)
    // },(error) => {
    //   console.log(error.error.error_msg)
    // })
    // console.log(response.subscribe(data))
  }
}
