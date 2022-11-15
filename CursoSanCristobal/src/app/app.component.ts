import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CursoSanCristobal';
  padre = 'Lautaro';
  mensaje = 'nada';
  elements!: string[];

  // Inyectando servicio Test
  constructor(public service: TestService){

  }
  ngOnInit(): void {
    this.elements = this.service.getElementos();
  }

  getFullTitle():string {
    return `${this.title} Angular`
  }

  avisoDelHijo(evento:string): void{
    console.log(evento);
    this.mensaje = `recibi el mensaje: ${evento}`;
  }
}
