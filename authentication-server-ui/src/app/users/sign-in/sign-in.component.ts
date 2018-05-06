import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  msgs: Message[] = [];
  constructor(private userService:UsersService, private router:Router) { }

  ngOnInit() {
  }

  register(form:FormControl){
    this.userService.register(form.value).subscribe(()=> {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'', detail:"User created"});
    form.reset();
    },
  error => {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error Message', detail:error.error.message});
  });
  }

  login(form:FormControl){
    this.userService.login(form.value).subscribe((data)=> {
      this.userService.setCurrentUser(data);
      this.router.navigate(['documents']);
    },
  error=>{
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error Message', detail:error.error.message});
  });
  }
}
