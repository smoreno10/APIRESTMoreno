import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { alumnos } from '../data/alumnos'
import { GrillaComponent } from '../grilla/grilla.component';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})

export class ContenidoComponent implements AfterViewInit {
  public mensaje: string = "Bienvenid@ a mi primera app en angular!"
  alumnos: any[] = alumnos;
  @ViewChild('grillaAlumnos' ,{static: false}) grillaAlumnos: GrillaComponent | undefined 

  constructor() {  
  }
  
  ngAfterViewInit(): void {
    console.log(this.grillaAlumnos)
  }

  clickListener(valor: any) {
    console.log(valor)
  }
}
