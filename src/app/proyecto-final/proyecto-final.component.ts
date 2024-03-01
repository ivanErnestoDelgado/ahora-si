import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-proyecto-final',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,GoogleMapsModule],
  templateUrl: './proyecto-final.component.html',
  styleUrl: './proyecto-final.component.scss'
})

export class ProyectoFinalComponent {
  
  
name='';
description='';
posicion:any={};
objubicaciones: any=[];
datos:any =[
  ];
datoindividual: any={index:0,name:'',description:'',mark:{lat: 0, lng:0}}

formularioEntrada: FormGroup= new FormGroup({
  name: new FormControl(''),
  description: new FormControl('')
}
)

mapOptions: google.maps.MapOptions = {
  center: { lat: 38.9987208, lng: -77.2538699 },
  zoom : 14
}

agregar(){
this.datos.push({index:1,name:this.name,description:this.description,mark:this.posicion});
}

agregarMarcador(event:any){
  console.log(event.latLng.lat())
  let obj=  {lat: event.latLng.lat(), lng:event.latLng.lng()};
  this.objubicaciones.push();
  this.posicion=obj;
   console.log(obj) 
  }
  
}
