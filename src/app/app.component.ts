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
		this.backandService.setAppName('todo33353');
		this.backandService.setSignUpToken('215e5812-5789-4475-8ccb-42f3232da176');
		this.backandService.setAnonymousToken('43a174e6-1a88-46dd-9081-99d3d22131a6');
	}

	public navigate(url) {
		this.router.navigate([url]);
	}
}
