import { Component, Input, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() padre2 = "";
  @Input() caso1!: string;
  estilos = {
    rojo:true,
    fondo:false
  };

  constructor(private service:TestService) { }

  ngOnInit(): void {
  }

}
