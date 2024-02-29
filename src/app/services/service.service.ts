import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ServiceService {
  var_service="chiflas a tu mauser";
  api_url='https://jsonplaceholder.typicode.com/'

  constructor(private http:HttpClient){


  }
  obtenerlista(){
    return this.http.get(this.api_url+'posts')
  }
  onclickbutton(text:string){
    console.log(text)
    this.var_service=text
  }


}
