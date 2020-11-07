import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{

  mostrar = true;

  frase: any = {
    mensaje: 'Vi los horrores de la guerra',
    autor: 'Niko Bellic'
  };

  personajes: string[] = [
    "Roman",
    "Packie",
    "Patrick",
    "jacob",
    "Johnny"
  ]
  

}
