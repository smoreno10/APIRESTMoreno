import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import alumnos from '../data/alumnos.json';
import { Alumno }  from '../alumno/alumno'
import { AlumnoComponent } from '../alumno/alumno.component';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})

export class ContenidoComponent implements OnInit {  
  constructor() { }
  @ViewChild(AlumnoComponent, { static: true }) myFormRef = {} as  AlumnoComponent;

  alumnos: Alumno[] = alumnos;

  ngOnInit(): void {
  }

  clickListener(alumno: Alumno) {
    this.myFormRef.setForm(alumno);
  }

  eliminarListener(alumno: Alumno) {
    this.alumnos = this.alumnos.filter(a => a.dni != alumno.dni);
  }

  guardarListener(alumno: Alumno) {
    this.guardar(alumno)
  }


  guardar(alumno: Alumno) {
    if (this.alumnos.some(a => a.dni == alumno.dni )) {
      this.updatear(alumno)
    } else {
      this.insertar(alumno)
    }
  }

  updatear(alumno: Alumno) {
    this.alumnos = this.alumnos.map((a) => {
      if (a.dni == alumno.dni) {
        return alumno 
      } else {
        return a
      }
    })
  }

  insertar(alumno: Alumno) {
    this.alumnos.push(alumno)
  }

}








