import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumno';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Filtro } from '../../shared/interfaces/filtro';


@Injectable({
  providedIn: 'root',
})

export class AlumnosService {
  constructor(
    private http: HttpClient
  ) {}

  private headers = new HttpHeaders().set("Content-Type", "application/json; charset=utf-8")
  private urlGetAlumnos = environment.apiUrl + 'Alumnos/getAlumnos'; 
  private urlGetAlumno = environment.apiUrl + 'Alumnos/getAlumno'; 
  private urlSaveAlumno = environment.apiUrl + 'Alumnos/saveAlumno'; 
  private urlDeleteAlumno = environment.apiUrl + 'Alumnos/deleteAlumno'; 
  

  getAlumnos(filtros:Filtro[]) {
    return this.http.post<any>(this.urlGetAlumnos, filtros, {headers: this.headers})
 }

  getAlumno(filtros:Filtro[]) {
    return this.http.post<any>(this.urlGetAlumno, filtros, {headers: this.headers})
  }

  saveAlumno(dato: Alumno) {
    return this.http.post<any>(this.urlSaveAlumno, dato, {headers: this.headers})
  }

  deleteAlumno(dato: Alumno) {
    return this.http.post<any>(this.urlDeleteAlumno, dato, {headers: this.headers})
  }



}
