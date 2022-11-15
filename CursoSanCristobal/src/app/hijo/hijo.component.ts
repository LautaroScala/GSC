import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
  inputs: [ 'padre1' ]
})
export class HijoComponent implements OnInit {
  deshabilitado = false;
  imgSrc:string;
  padre1 = "";

  @Output() avisar = new EventEmitter<string>();

  constructor(private service:TestService) {
    this.imgSrc = 'https://picsum.photos/200/200?ts100'
   }
  habDes():void{
    this.deshabilitado = !this.deshabilitado;
  }
  avisarAlPadre():void {
    this.avisar.emit('Hola desde el hijo!');
  }
  refreshImg(){
    this.imgSrc = `https://picsum.photos/200/200?ts${(Math.random()*100)}`
  }
  ngOnInit(): void {
  }

}
