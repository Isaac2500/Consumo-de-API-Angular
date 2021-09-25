import { Injectable } from '@angular/core';
import { Element } from "../interfaces/element";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor(private http: HttpClient) { this.http = http }

  busqueda = (): Promise<Element> =>{

    let promise = new Promise<Element>((resolve, reject) =>{

      this.http.get("https://jsonplaceholder.typicode.com/todos")
      .toPromise()
      .then((response) =>{
        resolve(response as Element );
      },(error) => {
        reject(error);
      });
    });

    return promise;
  }
}
