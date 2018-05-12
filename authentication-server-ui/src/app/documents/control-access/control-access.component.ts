import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';
import { DocumentsService } from '../documents.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-control-access',
  templateUrl: './control-access.component.html',
  styleUrls: ['./control-access.component.css']
})
export class ControlAccessComponent implements OnInit {
  document:any;
  msgs = [];
  constructor(private documentsService:DocumentsService, private usersService:UsersService) {
    this.document = {};
   }

  ngOnInit() {
  }

  save(form:FormControl){
    form.value.active = true;
    console.log(document);
    this.documentsService.save(form.value).subscribe(
      () => {
        form.reset();
      },
      error=>{
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Error Message', detail:error.error.message});
      }
    );
  }
}
