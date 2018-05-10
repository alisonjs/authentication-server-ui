import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../documents.service';
import { FormControl } from '@angular/forms';
import { UsersService } from '../../users/users.service';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})

export class DocumentsComponent implements OnInit {
  documents = [];
  users = [];
  msgs = [];
  roles = [];
  accessTables = [];
  access:any = {};
  constructor(private documentsService:DocumentsService, private usersService:UsersService) { 
    this.roles = [{name:"WRITE", value:"WRITE"},{name:"READ", value:"READ"}];
   }

  ngOnInit() {
    this.list();
  }

  save(form:FormControl){
    this.documentsService.save(form.value).subscribe(
      () => {
        form.reset();
        this.list();
      },
      error=>{
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Error Message', detail:error.error.message});
      }
    );
  }
  add(){
    console.log(this.access);
  }
  list(){
    this.documentsService.list().subscribe((data)=>{
      this.documents = data;
    },
    error=>{
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Error Message', detail:error.error.message});
    });
  }
  search(event){
    this.usersService.get(event.query).subscribe((data)=>{
      this.users = data;
    });
  }
}
