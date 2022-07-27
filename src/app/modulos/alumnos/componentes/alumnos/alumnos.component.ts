import { Component, OnInit, ViewChild } from '@angular/core';
import { map, Subscription, of } from 'rxjs';
import { Alumno }  from '../../interfaces/alumno'
import { AlumnoComponent } from '../alumno/alumno.component';
import { AlumnosService } from '../../servicios/alumnos.service';
import { Router } from '@angular/router';

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

  @ViewChild(AlumnoComponent, { static: true }) myFormRef = {} as  AlumnoComponent;
  suscripcion: Subscription = new Subscription;
  
  ngOnInit(): void {
    this.alumnosSs.alumnos$ = of(this.alumnosSs.alumnosDb)    
  }

  clickListener(alumno: Alumno) {
    this.router.navigateByUrl(`alumno/${alumno.dni}`)
  }

  filtrar(value: string) {
    if (value != '') {
      this.alumnosSs.alumnos$ = of(this.alumnosSs.alumnosDb)    
      .pipe(
        map(res => res.filter(a => a.faixa == value)) 
      )
    } else {
      this.alumnosSs.alumnos$ = of(this.alumnosSs.alumnosDb)    
    }
  }
}








