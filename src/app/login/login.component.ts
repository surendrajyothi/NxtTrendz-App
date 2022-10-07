import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UserCredentialsService } from '../user-credentials.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  userDetails:any;
  error_Message='';
  error_condition = true;

  constructor(private formBuilder:FormBuilder,private _userDetails:UserCredentialsService) { }
  ngOnInit(): void {

    this.userDetails = this.formBuilder.group({
      username : new FormControl(),
      password : new FormControl()
    })
  }
  
  formSubmitted(){
    this._userDetails.postUserDetails(this.userDetails.value)
    this.error_Message=this._userDetails.errorMessage
    this.error_condition = this._userDetails.errorStatus
    // console.log(this._userDetails.errorMessage)
  }
  
}
