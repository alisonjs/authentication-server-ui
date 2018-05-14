import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccessControlTableService {
  access_url = "http://localhost:8090";
  constructor(private http:HttpClient) { }

  save(acessControlTable:any){
    return this.http.post(this.access_url+"/access", acessControlTable);
  }

  delete(acessControlTable:any){
    return this.http.delete(this.access_url+"/access/"+acessControlTable.id);
  }

  list(document:any){
    return this.http.get<any[]>(this.access_url+"/access/"+document.id);
  }
}
