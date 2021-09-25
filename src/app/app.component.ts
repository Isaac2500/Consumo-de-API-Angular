import { Component } from '@angular/core';
import { ElementService } from "./services/element.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConsumoDeApi';

  constructor(private ElementService: ElementService){}

  getAllElements(){
    this.ElementService.busqueda().then((response) => {
      console.log(response);
    },(error) => {
      console.log(error);
    });
  }
}
