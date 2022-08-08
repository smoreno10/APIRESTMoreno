import { Component, OnInit, ViewChild } from '@angular/core';
import { Alumno }  from '../../interfaces/alumno'
import { AlumnosService } from '../../servicios/alumnos.service';
import { Router } from '@angular/router';
import { Filtro } from '../../../shared/interfaces/filtro';
import { UsuariosService } from 'src/app/modulos/autenticacion/servicios/usuarios.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent implements OnInit {
  constructor(
    public alumnosSs: AlumnosService,
    public router: Router,
    public usuarioSs: UsuariosService
  ) { }

  public filtros: Filtro[] = [];
  public alumnos: any;
  public columnas: string[] = ['id', 'nombre', 'faixa', 'edad']
  
  ngOnInit(): void {
    this.alumnosSs.getAlumnos(this.filtros)
    .subscribe(data => { 
      this.alumnos = data.datos 
    })

  }

  clickListener(alumno: Alumno) {
    this.router.navigateByUrl(`alumno/${alumno.id}/${alumno.accion}`)
  }

  filtrar(value: string) {
    this.filtros = [];
    if (value != '') {
      this.filtros.push(new Filtro('faixa', value))
    }
    this.alumnosSs.getAlumnos(this.filtros)
      .subscribe(res => {
        this.alumnos  = res.datos
      })     
    }
}








