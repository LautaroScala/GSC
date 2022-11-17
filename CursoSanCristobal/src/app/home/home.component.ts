import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  elements! : string[];
  constructor(private service: TestService ) { }

  ngOnInit(): void {
    this.elements = this.service.getElementos();
  }

}
