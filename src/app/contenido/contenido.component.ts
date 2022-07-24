import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { map, Subscription, of } from 'rxjs';
import { Alumno }  from '../alumno/alumno'
import { AlumnoComponent } from '../alumno/alumno.component';
import { AlumnosService } from '../servicios/alumnos.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})

export class ContenidoComponent implements OnInit {

  constructor(
    public alumnosSs: AlumnosService
  ) { }

  @ViewChild(AlumnoComponent, { static: true }) myFormRef = {} as  AlumnoComponent;
  suscripcion: Subscription = new Subscription;
  
  ngOnInit(): void {
    this.alumnosSs.alumnos$ = of(this.alumnosSs.alumnosDb)    
  }

  clickListener(alumno: Alumno) {
    this.myFormRef.setForm(alumno);
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








