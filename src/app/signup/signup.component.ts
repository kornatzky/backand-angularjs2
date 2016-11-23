import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {BackandService} from 'angular2bknd-sdk';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

 

  ngOnInit() {
  }

  email:string = '';
  firstName:string = '';
  lastName:string = '';
  signUpPassword: string = '';
  confirmPassword: string = '';

  constructor(private backandService:BackandService) {


  }

  public signUp() {
    if (this.signUpPassword != this.confirmPassword){
      alert('Passwords should match');
      return;
    }
    var $obs = this.backandService.signup(this.email, this.signUpPassword, this.confirmPassword, this.firstName, this.lastName);
    $obs.subscribe(                
      data => {
          alert('Sign up succeeded');
          this.email = this.signUpPassword = this.confirmPassword = this.firstName = this.lastName = '';
      },
      err => {
          this.backandService.logError(err)
      },
      () => console.log('Finish Auth'));
  }

  public socialSignin(provider) {
    var $obs = this.backandService.socialSignin(provider);
    $obs.subscribe(                
        data => {
            console.log('Sign up succeeded with:' + provider);           
        },
        err => {
            this.backandService.logError(err)
        },
        () => console.log('Finish Auth'));
  }

  public socialSignup(provider) {
    var $obs = this.backandService.socialSignup(provider);
    $obs.subscribe(                
        data => {
            console.log('Sign up succeeded with:' + provider);           
        },
        err => {
            this.backandService.logError(err)
        },
        () => console.log('Finish Auth'));
  }

  // public inAppSocial(provider) {
  //   var $obs = this.backandService.inAppSocial(provider);
  //   $obs.subscribe(                
  //       data => {
  //           console.log('Sign up succeeded with:' + provider);           
  //       },
  //       err => {
  //           this.backandService.logError(err)
  //       },
  //       () => console.log('Finish Auth'));
  // }
}
