import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {
   father = 'Uno';
   users!:User[];
  constructor(private userService : UsersService) { }
  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}
