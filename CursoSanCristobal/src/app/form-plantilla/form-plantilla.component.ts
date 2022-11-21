import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-form-plantilla',
  templateUrl: './form-plantilla.component.html',
  styleUrls: ['./form-plantilla.component.css']
})
export class FormPlantillaComponent implements OnInit {
  favoriteColor = '';
  user: User[] = [{
    id:1,
    username: 'Wo0fuck',
    password:'hidden',
    fullname:'Lautaro Scala'
  },
  {
    id:2,
    username:'Ninaoni',
    password: 'hidden',
    fullname: 'Linda Scala'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
