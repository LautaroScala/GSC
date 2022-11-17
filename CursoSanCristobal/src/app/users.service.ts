import { Injectable } from '@angular/core';
import { User } from './user';

const USERS : User[] = [
  {
    id:1,
    username: 'Wo0fuck',
    name:'Lautaro',
    fullname:'Lautaro Scala'
  },
  {
    id:2,
    username:'Ninaoni',
    name: 'Linda',
    fullname: 'Linda Scala'
  }
]

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): User[]{
    return USERS;
  };

  getUserById(id: string | null): User | undefined{
    if (!id){
      return undefined;
    }
    return USERS.find(user => user.id === +id);
  };
}
