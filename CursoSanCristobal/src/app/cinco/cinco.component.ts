import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ApiPostService } from '../api-post.service';
import { User } from '../user';

@Component({
  selector: 'app-cinco',
  templateUrl: './cinco.component.html',
  styleUrls: ['./cinco.component.css']
})
export class CincoComponent implements OnInit {

  users$!: Observable<User[]>;
  userForm : FormGroup;
  

  constructor(private service:ApiPostService, private fb:FormBuilder) { 
    this.userForm = this.fb.group({
      username:[''],
      name:[''],
      fullname:['']
    });
  }

  getUsersFromAPI(): void {
    this.users$ = this.service.getAll(); // NO OLVIDARSE DESUSCRIBIRSE
  }

  deleteUser(id:number):void {
    this.service.deleteUser(id).subscribe();
  }
  onSubmit():void{
    this.service.uploadUser(this.userForm.value).subscribe();
  }
  
  ngOnInit(): void {
    
  }

}
