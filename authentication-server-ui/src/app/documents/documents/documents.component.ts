import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../documents.service';
import { FormControl } from '@angular/forms';
import { UsersService } from '../../users/users.service';
import {SelectItem} from 'primeng/api';
import { AccessTable } from '../../users/access-table';

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
  tables = [];
  user:any;
  role:string;
  constructor(private documentsService:DocumentsService, private usersService:UsersService) { 
    this.roles = [{name:"WRITE", value:"WRITE"},{name:"READ", value:"READ"}];
   }

  ngOnInit() {
    this.list();
  }

  save(form:FormControl){
    form.value.active = true;
    console.log(form.value)
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
  addRole(){
    console.log(this.user);
    console.log(this.role);
    this.tables.push({user:this.user, role:this.role});
    for (let entry of this.tables) {
      console.log(entry.user.login);
    }
  }
  deleteRole(){
    console.log(this.tables[0].user);
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
  deleteDocument(docment:any){
    console.log("Delete document");
    console.log(docment);
    this.documentsService.delete(docment).subscribe((data)=>{
      this.list();
    });
  }
}
