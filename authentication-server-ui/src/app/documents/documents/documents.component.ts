import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../documents.service';
import { FormControl } from '@angular/forms';
import { UsersService } from '../../users/users.service';
import {SelectItem} from 'primeng/api';
import { AccessTable } from '../../users/access-table';
import { Router } from '@angular/router';
import { AccessControlTableService } from '../control-access/access-control-table.service';
import {Message} from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})

export class DocumentsComponent implements OnInit {
  documents = [];
  msgsGrowl: Message[] = [];
  users = [];
  msgs = [];
  roles = [];
  tables = [];
  user:any;
  role:any;
  document:any;
  display: boolean = false;
  constructor(private documentsService:DocumentsService, private usersService:UsersService, 
    private router:Router, private accessControlService:AccessControlTableService,
    private messageService: MessageService) { 
    this.roles = [{name:"WRITE", value:"WRITE"},{name:"READ", value:"READ"}];
    this.document = {};
   }

  ngOnInit() {
    this.list();
  }

  save(form:FormControl){
    this.document.active = true;
    this.documentsService.save(this.document).subscribe(
      () => {
        form.reset();
        this.list();
        this.display = false;
      },
      error=>{
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Error Message', detail:error.error.message});
      }
    );
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
  delete(docment:any){
    console.log("Delete document");
    console.log(docment);
    this.documentsService.delete(docment).subscribe((data)=>{
      this.list();
    });
  }
  edit(doc:any){
    this.documentsService.getDocument(doc.document).subscribe(data=>{
      this.document=data;
    });
  }
  show(doc:any){
    this.display = true;
    this.document = doc;
    this.listUsersPermission();
  }
  close(){
    this.display = false;
    this.document = {};
  }

  addUser(){
    var accessControlTable = {user:this.user, document:this.document, role:this.role.name};
    this.accessControlService.save(accessControlTable).subscribe(()=>{
      this.accessControlService.list(this.document).subscribe(data=>{
        this.tables = data;
      });
    },
    error=>{
      console.log(error.error.message);
      this.msgsGrowl = [];
      this.msgsGrowl.push({severity:'error', summary:'Error Message', detail:error.error.message});
    });
  }

  removeUser(accessControlTable:any){
    console.log(accessControlTable);
    this.accessControlService.delete(accessControlTable).subscribe(()=>{
      this.accessControlService.list(this.document).subscribe(data=>{
        this.tables = data;
      });
    })
  }

  listUsersPermission(){
    this.accessControlService.list(this.document).subscribe(data=>{
      this.tables = data;
    });
  }
}
