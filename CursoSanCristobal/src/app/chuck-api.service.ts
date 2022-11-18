import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { API } from './api';


@Injectable({
  providedIn: 'root'
})

export class ChuckAPIService {

  constructor(private http: HttpClient) { }

  getMessage(): Observable<HttpResponse<API>> {
    return this.http.get<API>(`${environment.api}/jokes/random`, { observe: 'response' }).pipe(retry(3));
  }
}
