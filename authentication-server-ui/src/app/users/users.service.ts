import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  users_url:string = "http://localhost:8080";
  private current_user = {};

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

  setCurrentUser(user:any){
    this.current_user = user;
  }
  getCurrentUser():any{
    return this.current_user;
  }
}
