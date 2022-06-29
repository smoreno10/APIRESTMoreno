import { Component, OnInit } from '@angular/core';
import { alumnos } from '../data/alumnos'

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})

export class ContenidoComponent implements OnInit {

  public mensaje: string = "Bienvenid@ a mi primera app en angular!"
  
  alumnos = alumnos;

  constructor() { }

  ngOnInit(): void {
  }



}
