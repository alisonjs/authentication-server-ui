import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService:UsersService, private router:Router) { }

  ngOnInit() {
  }

  register(form:FormControl){
    this.userService.register(form.value).subscribe(()=> {
      this.router.navigate(['users/sign_in']);
    });
  }

  login(form:FormControl){
    this.userService.login(form.value).subscribe(()=> {
      this.router.navigate(['documents']);
    });
  }
}
