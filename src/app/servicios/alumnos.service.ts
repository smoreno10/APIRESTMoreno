import { Injectable } from '@angular/core';
import { Alumno }  from '../alumno/alumno'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlumnosService {
  constructor(
    
  ) { 
    this.alumnos = new BehaviorSubject([null]);
    this.alumnos$ = this.alumnos.asObservable();
    of(this.alumnosDb).subscribe(respuesta => {
      this.alumnos.next((respuesta as any));
    })
  }

  public alumnos$: Observable<any>;
  private alumnos: BehaviorSubject<any>;

  private alumnosDb: Alumno[] = [
    {dni: 40000000, nombre: "Ibarra, Enzo", faixa: "Blanca", edad: 23  },
    {dni: 35000000, nombre: "Ibarra, Nicolas", faixa: "Azul", edad: 25  },
    {dni: 30000000, nombre: "Moreno, Santiago", faixa: "Roxa", edad: 40  },
    {dni: 32000000, nombre: "Perez, ALfredo", faixa: "Azul", edad: 28  },
    {dni: 45000000, nombre: "Castro, Pricila", faixa: "Azul", edad: 17  }
  ]
  
  eliminar(dato: Alumno) {
    this.alumnosDb = this.alumnosDb.filter(a => a.dni != dato.dni);
    this.alumnos.next(this.alumnosDb)    
  }

  guardar(dato: Alumno) {
    if (this.alumnosDb.some(a => a.dni == dato.dni )) {
      this.updatear(dato)
    } else {
      this.insertar(dato)
    }
    this.alumnos.next(this.alumnosDb)    
  }

  updatear(dato: Alumno) {
    this.alumnosDb = this.alumnosDb.map((a) => {
      if (a.dni == dato.dni) {
        return dato 
      } else {
        return a
      }
    })
    this.alumnos.next(this.alumnosDb)    
  }

  insertar(dato: Alumno) {
    this.alumnosDb.push(dato)
    this.alumnos.next(this.alumnosDb)    
  }
  
}
