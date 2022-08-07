import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Filtro } from '../../shared/interfaces/filtro';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {
  constructor(
    private http: HttpClient
  ) {}

  private headers = new HttpHeaders().set("Content-Type", "application/json; charset=utf-8")
  private urlGetInscripciones = environment.apiUrl + 'Alumnos/getInscripciones'; 
  private urlGetInscripcion = environment.apiUrl + 'Alumnos/getInscripcion'; 
  private urlSaveInscripcion = environment.apiUrl + 'Alumnos/saveInscripcion'; 
  private urlDeleteInscripcion = environment.apiUrl + 'Alumnos/deleteInscripcion'; 

  getInscripciones(filtros: Filtro[]) {
    return this.http.post<any>(this.urlGetInscripciones, filtros , {headers: this.headers})
  }

  getInscipcion(filtros: Filtro[]) {
    return this.http.post<any>(this.urlGetInscripcion, filtros, {headers: this.headers})
  }


  deleteInscripcion(value: any) {
    return this.http.post<any>(this.urlDeleteInscripcion, value, {headers: this.headers})

  }
  saveInscripcion(value: any) {
    return this.http.post<any>(this.urlSaveInscripcion, value, {headers: this.headers})
  }


}
