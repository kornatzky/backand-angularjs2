import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyDreamAppRoutingModule }  from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CrudComponent } from './crud/crud.component';
import { BackandService } from 'angular2bknd-sdk';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDreamAppRoutingModule,
  ],
  providers: [BackandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
