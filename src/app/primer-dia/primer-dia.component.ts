import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.scss'
})
export class PrimerDiaComponent {
  tarjeta={
  tituloTarjeta:'Titulo',
  Descripcion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam voluptas iusto eaque! Sapiente distinctio ullam necessitatibus ut hic pariatur assumenda voluptatum laudantium perferendis eum sed beatae nemo, suscipit eveniet placeat.',
  botontext:'xd'
}
@Input() ejemplo:string='';
@Input() jajas:number=0;
}
