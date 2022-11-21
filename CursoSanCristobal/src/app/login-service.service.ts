import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.api}/users/authenticate`, {
        username,
        password,
      })
      .pipe((user) => {
        // Almacena los detalles del usuario y el token JWT para mantener
        // al usuario logeado incluso entre actualizaciones de las páginas
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      });
  }

  logout():void {
    localStorage.removeItem('currentUser');
  }
}
