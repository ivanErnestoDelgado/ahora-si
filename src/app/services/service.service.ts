import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { METHODS } from 'node:http';

@Injectable({
  providedIn: 'root',
})

export class ServiceService {
  var_service="chiflas a tu mauser";
  api_url='https://jsonplaceholder.typicode.com/'
  header=new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
  constructor(private http:HttpClient){


  }
  
  obtenerlista(){
    return this.http.get(this.api_url+'posts')
  }
  onclickbutton(text:string){
    console.log(text)
    this.var_service=text
  }
  agregarCosa(idP:number,titleP:string,bodyP:string){
    return this.http.post(this.api_url+'posts/'+idP,{
      id:idP,
      title:titleP,
      body:bodyP,
      userId:(idP/10+1)
    },
    {headers:this.header})
  }

  eliminarCosa(idP:number){
    return this.http.delete(this.api_url+'posts/'+idP)
  }

  editarCosa(titleP:string,bodyP:string,idP:number){
    return this.http.put(this.api_url+'posts/'+idP,{
      title:titleP,
      body:bodyP,
      userId:(idP/10+1)
    },
    {headers:this.header})
  }

  parchearCosa(idP:number,titleP:string){
    return this.http.patch(this.api_url+'posts/'+idP,{
      title:titleP,
    },
    {headers:this.header})
  }

}
