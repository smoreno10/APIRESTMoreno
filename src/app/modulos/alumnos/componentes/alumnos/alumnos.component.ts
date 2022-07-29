import { Component, OnInit, ViewChild } from '@angular/core';
import { map, Subscription, of, from } from 'rxjs';
import { Alumno }  from '../../interfaces/alumno'
import { AlumnoComponent } from '../alumno/alumno.component';
import { AlumnosService } from '../../servicios/alumnos.service';
import { Router } from '@angular/router';
import { Filtro } from '../../../shared/interfaces/filtro';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent implements OnInit {
  constructor(
    public alumnosSs: AlumnosService,
    public router: Router
  ) { }

  public filtros: Filtro[] = [];
  public alumnos: any;
  public columnas: string[] = ['id', 'nombre', 'faixa', 'edad']

  @ViewChild(AlumnoComponent, { static: true }) myFormRef = {} as  AlumnoComponent;
  
  ngOnInit(): void {
    this.alumnosSs.getAlumnos(this.filtros)
    .subscribe(data => { 
      this.alumnos = data.datos 
    })

  }

  clickListener(alumno: Alumno) {
    this.router.navigateByUrl(`alumno/${alumno.id}`)
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








