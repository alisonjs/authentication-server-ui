import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {
  user:string = '';
  constructor(private usersService:UsersService, private router:Router) { 
    this.user = usersService.getCurrentUser().login;
  }
  
  ngOnInit() {
  }

  doLogOut(){
    this.usersService.setCurrentUser({});
    this.router.navigate(["users/sign_in"]);
  }
}
