import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Filtro } from '../../shared/interfaces/filtro';
import { Curso } from '../interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  constructor(
    private http: HttpClient
  ) {}

  private headers = new HttpHeaders().set("Content-Type", "application/json; charset=utf-8")
  private urlGetCursos = environment.apiUrl + 'Alumnos/getCursos'; 
  private urlGetCurso = environment.apiUrl + 'Alumnos/getCurso'; 
  private urlSaveCurso = environment.apiUrl + 'Alumnos/saveCurso'; 
  private urlDeleteCurso = environment.apiUrl + 'Alumnos/deleteCurso'; 
  
  getCursos(filtros: Filtro[]) {
    return this.http.post<any>(this.urlGetCursos, filtros , {headers: this.headers})
  }

  getCurso(filtros: Filtro[]) {
    return this.http.post<any>(this.urlGetCurso, filtros , {headers: this.headers})
  }

  saveCurso(curso: Curso) {
    return this.http.post<any>(this.urlSaveCurso, curso , {headers: this.headers})
  }

  deleteCurso(curso: Curso) {
    return this.http.post<any>(this.urlDeleteCurso, curso , {headers: this.headers})
  }
}
