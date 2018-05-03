import { Component, OnInit, forwardRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  url:string = 'users/sign_in'
  constructor(private router:Router){

  }
  ngOnInit(){
    this.forward(this.url);
  }

  forward(url:string){
    this.router.navigate([url]);
  }
}
