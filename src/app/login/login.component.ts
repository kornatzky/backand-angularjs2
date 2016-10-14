import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {BackandService} from 'angular2bknd-sdk'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


	ngOnInit() {
	}


    
    username:string = 'test@angular2.com';
    password:string = 'angular2';
    auth_type:string = "N/A";
    is_auth_error:boolean = false;
    auth_status:string = null;
    loggedInUser: string = '';


    oldPassword: string = '';
    newPassword: string = '';
    confirmNewPassword: string = '';


    constructor(private backandService:BackandService) { 
        this.auth_type = backandService.getAuthType();
        this.auth_status = backandService.getAuthStatus();
        this.loggedInUser = backandService.getUsername();
    }


    public getAuthTokenSimple() {

        this.auth_type = 'Token';
        var $obs = this.backandService.getAuthTokenSimple(this.username, this.password);
        $obs.subscribe(
            data => {
                this.auth_status = 'OK';
                this.is_auth_error = false;
                this.loggedInUser = this.username;
                this.username = '';
                this.password = '';
            },
            err => {
                var errorMessage = this.backandService.extractErrorMessage(err);

                this.auth_status = `Error: ${errorMessage}`;
                this.is_auth_error = true;
                this.backandService.logError(err)
            },
            () => console.log('Finish Auth'));
    }

    public useAnonymousAuth() {
        this.backandService.useAnonymousAuth();
        this.auth_status = 'OK';
        this.is_auth_error = false;
        this.auth_type = 'Anonymous';
        this.loggedInUser = 'Anonymous';
    }

    public signOut() {
        this.auth_status = null;
        this.backandService.clearAuthTokenSimple();
    }



    public changePassword() {
        if (this.newPassword != this.confirmNewPassword){
            alert('Passwords should match');
            return;
        }
        var $obs = this.backandService.changePassword(this.oldPassword, this.newPassword);
        $obs.subscribe(
            data => {
                alert('Password changed');
                this.oldPassword = this.newPassword = this.confirmNewPassword = '';
            },
            err => {
                this.backandService.logError(err)
            },
            () => console.log('Finish change password'));
    }

}