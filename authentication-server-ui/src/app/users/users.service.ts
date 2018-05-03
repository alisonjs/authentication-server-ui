import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  users_url:string = "localhost:8080/user";

  constructor(private http:HttpClient) { }

  register(user:any){
    return this.http.post(this.users_url, user);
  }

  login(user:any){
    return this.http.post(this.users_url+"/login", user);
  }
}
