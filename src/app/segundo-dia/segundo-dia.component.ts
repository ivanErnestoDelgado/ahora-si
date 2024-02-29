import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-segundo-dia',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './segundo-dia.component.html',
  styleUrl: './segundo-dia.component.scss'
})

export class SegundoDiaComponent {
  variable='';
  equivocacion='Que te den';
  name='';
  description='';

  formulariouser: FormGroup= new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  }
  )

  user=[
    {
      nombre:'juan',
      descripcion:'hola'
    },
    {
      nombre:'juan',
      descripcion:'xd'

    }
    ,
    {
      nombre:'Luis',
      descripcion:'xd'

    },
    {
      nombre:'juan',
      descripcion:'hola'

    }

  ]

  sumbitForm(){
    console.log(this.formulariouser.value)
  }
  constructor(){
 
  }
  ngOnInit() {
   
  }
  ngDoCheck(): void {

  }
  ngOnDestroy() {
   
  }
  clickButton(text:string){
    this.variable=text;
  }

  
}
