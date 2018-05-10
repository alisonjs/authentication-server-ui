import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  users_url:string = "http://localhost:8090";
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
  get(query:string){
    return this.http.get<any[]>(this.users_url+"/users/"+query);
  }
  getRoles(){
    return this.http.get<any[]>(this.users_url+"/roles");
  }
  setCurrentUser(user:any){
    this.current_user = user;
  }
  getCurrentUser():any{
    return this.current_user;
  }
}
