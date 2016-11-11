import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {BackandService} from 'angular2bknd-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

	constructor(private router: Router, private backandService:BackandService){
		this.backandService.setAppName('your app name');
        this.backandService.setSignUpToken('your signup token');
        this.backandService.setAnonymousToken('your anonymousToken token');
	}

	public navigate(url) {
		this.router.navigate([url]);
	}
}
