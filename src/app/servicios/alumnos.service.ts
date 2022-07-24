import { Injectable } from '@angular/core';
import { Alumno } from '../alumno/alumno';
import { BehaviorSubject, from, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  constructor() {}

  public alumnosDb: any[] = [
    { dni: 40000000, nombre: 'Ibarra, Enzo', faixa: 'Blanca', edad: 23 },
    { dni: 40000000, nombre: 'Lafranchi, Stefano', faixa: 'Blanca', edad: 25},    
    { dni: 35000000, nombre: 'Ibarra, Nicolas', faixa: 'Azul', edad: 25 },
    { dni: 30000000, nombre: 'Moreno, Santiago', faixa: 'Roxa', edad: 40 },
    { dni: 26000000, nombre: 'Buscemi, Emiliano', faixa: 'Marron', edad: 43 },    
    { dni: 33000000, nombre: 'Sarlaganga, Facundo', faixa: 'Roxa', edad: 38 },
    { dni: 32000000, nombre: 'Perez, Alfredo', faixa: 'Azul', edad: 28 },
    { dni: 45000000, nombre: 'Castro, Pricila', faixa: 'Azul', edad: 17 },
    { dni: 25000000, nombre: 'Urigo, Marcos', faixa: 'Preta', edad: 48 },
    { dni: 31000000, nombre: 'Demicheli, Franco', faixa: 'Preta', edad: 32 }
  ];

  public alumnos$: Observable<any[]>;

  eliminar(dato: Alumno) {
    //this.alumnosDb? = this.alumnosDb?.filter((a) => a.dni != dato.dni);
  }

  guardar(dato: Alumno) {
    // if (this.alumnosDb.some((a) => a.dni == dato.dni)) {
    //   this.updatear(dato);
    // } else {
    //   this.insertar(dato);
    // }
  }

  updatear(dato: Alumno) {
    // this.alumnosDb = this.alumnosDb.map((a) => {
    //   if (a.dni == dato.dni) {
    //     return dato;
    //   } else {
    //     return a;
    //   }
    // });
  }

  insertar(dato: Alumno) {
    //this.alumnosDb.push(dato);
  }
}
