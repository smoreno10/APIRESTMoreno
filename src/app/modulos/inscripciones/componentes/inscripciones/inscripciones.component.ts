import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/modulos/autenticacion/servicios/usuarios.service';
import { Filtro } from 'src/app/modulos/shared/interfaces/filtro';
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
    public router: Router,
    public usuarioSs: UsuariosService
  ) { }

  @Input() alumno: any;
  @Input() curso: any;

  public filtros: Filtro[] = [];
  public inscripciones: any;
  public columnas: string[] = ['id', 'fecha', 'alumno', 'alumnoNombre', 'curso', 'cursoNombre']

  ngOnInit(): void {
    if (this.alumno) {
      this.filtros.push(new Filtro('alumno', this.alumno))     
    }
    if (this.curso) {
      this.filtros.push(new Filtro('curso', this.curso))     
    }
    this.inscripcionesSs.getInscripciones(this.filtros)
    .subscribe(data => { 
      this.inscripciones = data.datos 
    })
  }

  clickListener(inscripcion: Inscripcion) {
    this.router.navigateByUrl(`inscripcion/${inscripcion.id}/${inscripcion.accion}`)
  }
}
