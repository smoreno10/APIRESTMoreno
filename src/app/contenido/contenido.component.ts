import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
// import alumnos from '../data/alumnos.json';
import { Alumno }  from '../alumno/alumno'
import { AlumnoComponent } from '../alumno/alumno.component';
import { AlumnosService } from '../servicios/alumnos.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})

export class ContenidoComponent implements OnInit, OnDestroy {  
  constructor(
    public alumnosSs: AlumnosService
  ) { }

  @ViewChild(AlumnoComponent, { static: true }) myFormRef = {} as  AlumnoComponent;

  alumnos: Alumno[] = [];
  suscripcion: Subscription = new Subscription;

  ngOnInit(): void {
    this.alumnosSs.alumnos$
    .subscribe(res => this.alumnos = res)
  }

  clickListener(alumno: Alumno) {
    this.myFormRef.setForm(alumno);
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

}








