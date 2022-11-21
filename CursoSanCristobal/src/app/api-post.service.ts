import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiPostService {

  constructor(private service: HttpClient) { }

  getAll(): Observable<User[]>{
    return this.service.get<User[]>('localhost:8080/api/users'); // no hice la api jeje
  }

  deleteUser(id: number): Observable<User>{
    return this.service.delete<User>(`localhost:8080/api/users/${id}`);
  }

  uploadUser(usuario: User): Observable<User> {
    return this.service.post<User>('localhost:8080/api/users',usuario);
  }
}
