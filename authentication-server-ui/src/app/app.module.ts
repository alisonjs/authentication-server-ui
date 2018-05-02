import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DataTableModule, ButtonModule, InputTextModule, InputMaskModule, CalendarModule } from "primeng/primeng";
import {PasswordModule} from 'primeng/password';

import { RoutingModule} from "./app.router";

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SingInComponent } from './users/sing-in/sing-in.component';
import {UsersService} from './users/users-service.service'


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SingInComponent
  ],
  imports: [
    BrowserModule, RoutingModule,

    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    
    DataTableModule,
    ButtonModule, 
    InputTextModule, 
    InputMaskModule, 
    CalendarModule,
    PasswordModule

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
