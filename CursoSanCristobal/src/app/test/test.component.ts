import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() padre2 = "";
  @Input() caso1!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
