import { Injectable } from '@angular/core';
import { UsersService } from '../users/users.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DocumentsService {
  documents_url = "http://localhost:8090";
  constructor(private usersService:UsersService, private http:HttpClient) { }

  list(){
    return this.http.get<any[]>(this.documents_url+"/documents/"+this.usersService.getCurrentUser().id);
  }

  save(document:any){
    document.createdBy = this.usersService.getCurrentUser();
    return this.http.post(this.documents_url+"/document", document);
  }

  delete(document:any){
    return this.http.delete(this.documents_url+"/document/"+document.id);
  }

  getDocument(document:any){
    return this.http.get(this.documents_url+"/document/"+document.id);
  }
}
