import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CursoSanCristobal';
  padre = 'Lautaro';
  mensaje = '';

  getFullTitle():string {
    return `${this.title} Angular`
  }

  avisoDelHijo(evento:string): void{
    console.log(evento);
    this.mensaje = `recibi el mensaje: ${evento}`;
  }
}
