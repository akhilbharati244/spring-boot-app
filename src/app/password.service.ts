import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
url='http://ec2-18-189-27-222.us-east-2.compute.amazonaws.com:8080/auth'
  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  forgetPassword(email:string){

    return this.httpClient.get(this.url+'/forgot_password/'+email)
  }
  setPassword(otpToken:string,password:string){

    const body={
      otpToken:otpToken,
      email:sessionStorage['email'],
      password:password
    }
    return this.httpClient.post(this.url+'/set_password',body)
  }
}
