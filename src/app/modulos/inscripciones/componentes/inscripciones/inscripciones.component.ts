import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inscripcion } from '../../interfaces/inscripcion';
import { InscripcionesService } from '../../servicios/inscripciones.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})

export class InscripcionesComponent implements OnInit {
  constructor(
    public inscripcionesSs: InscripcionesService,
    public router: Router
  ) { }

  public inscripciones: any;
  public columnas: string[] = ['id', 'fecha', 'alumno', 'alumnoNombre', 'curso', 'cursoNombre']

  ngOnInit(): void {
    this.inscripcionesSs.getInscripciones()
    .subscribe(data => { 
      this.inscripciones = data.datos 
    })
  }

  clickListener(inscripcion: Inscripcion) {
    this.router.navigateByUrl(`inscripcion/${inscripcion.id}`)
  }
}
