import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { DataTableModule, ButtonModule, InputTextModule, InputMaskModule, CalendarModule } from "primeng/primeng";
import {PasswordModule} from 'primeng/password';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CardModule} from 'primeng/card';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {SelectItem} from 'primeng/api';
import {GrowlModule} from 'primeng/growl';


import { RoutingModule} from "./app.router";

import { AppComponent } from './app.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { DocumentsComponent } from './documents/documents/documents.component';
import { UsersService } from './users/users.service';
import {DocumentsService} from './documents/documents.service';
import { UsersComponent } from './users/users/users.component'
import { AccessTable } from './users/access-table';
import { ControlAccessComponent } from './documents/control-access/control-access.component';
import {DialogModule} from 'primeng/dialog';
import {AccessControlTableService } from './documents/control-access/access-control-table.service';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import { LogOutComponent } from './log-out/log-out.component';
import {ToolbarModule} from 'primeng/toolbar';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DocumentsComponent,
    UsersComponent,
    ControlAccessComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule, RoutingModule,

    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    
    DataTableModule,
    ButtonModule, 
    InputTextModule, 
    InputMaskModule, 
    CalendarModule,
    PasswordModule,
    MessagesModule,
    MessageModule,
    CardModule,
    InputTextareaModule,
    DropdownModule,
    AutoCompleteModule,
    DialogModule,
    GrowlModule,
    ToolbarModule

  ],
  providers: [UsersService, DocumentsService, AccessTable, AccessControlTableService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
