import { Injectable } from '@angular/core';

const elements = ['Uno', 'Dos','Tres', 'Cuatro', 'Cinco'];

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  getElementos(): string[] {
    return elements;
  }
}
