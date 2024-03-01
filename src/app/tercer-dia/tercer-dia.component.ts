import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tercer-dia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './tercer-dia.component.html',
  styleUrl: './tercer-dia.component.scss'
})

export class TercerDiaComponent {
  name=''
  users: any=[]
  idPeticion=0
  bodyPeticion=''
  tituloPeticion=''

  respuesta=''
 constructor(public servicio: ServiceService){
 }
 ngOnInit() {
  this.servicio.obtenerlista().subscribe(resp =>{
    console.log(resp);
    this.users=resp
  })

}
editarTexto(text:string){
  console.log(text);
  return text;
}

mandarcosa(idP:number,titleP:string,bodyP:string){
this.servicio.agregarCosa(idP,titleP,bodyP).subscribe(resp =>{
  console.log(resp);
  this.respuesta=resp.toString();
})
  
}
}
