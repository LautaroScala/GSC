import { APP_ID, Component, OnInit } from '@angular/core';
import { API } from '../api';
import { ChuckAPIService } from '../chuck-api.service';

@Component({
  selector: 'app-cuatro',
  templateUrl: './cuatro.component.html',
  styleUrls: ['./cuatro.component.css']
})
export class CuatroComponent implements OnInit {
  msg: API | null = null;;
  constructor(private service: ChuckAPIService) { }

  ngOnInit(): void {
  }
  getMessage(): void {
    this.service.getMessage().subscribe((data) => {
      this.msg = data.body;
    },
      (error) => {
        console.log(error);
      });

  }
}
