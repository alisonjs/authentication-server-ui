import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  users_url:string = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  register(user:any){
    return this.http.post(this.users_url+"/user", user);
  }

  login(user:any){
    return this.http.post(this.users_url+"/login", user);
  }

  list(){
    return this.http.get<any[]>(this.users_url+"/users");
  }
}
