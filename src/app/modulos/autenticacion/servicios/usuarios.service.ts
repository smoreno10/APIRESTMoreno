import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) {}

  private headers = new HttpHeaders().set("Content-Type", "application/json; charset=utf-8")

  private urlGetUsuarios = environment.apiUrl + 'Alumnos/getUsuarios'; 
  private urlGetUsuario = environment.apiUrl + 'Alumnos/getUsuario'; 
  private urlSaveUsuario = environment.apiUrl + 'Alumnos/saveUsuario';
  private urlDeleteUsuario = environment.apiUrl + 'Alumnos/deleteUsuario';  
  private urlLogin = environment.apiUrl + 'Alumnos/login'; 

  getUsuarios() {
    return this.http.post<any>(this.urlGetUsuarios, null , {headers: this.headers})
  }

  getUsuario(filtros: any) {
    return this.http.post<any>(this.urlGetUsuario, filtros , {headers: this.headers})
  }

  saveUsuario(valor: Usuario) {
    return this.http.post<any>(this.urlSaveUsuario, valor , {headers: this.headers})
  }

  deleteUsuario(valor: Usuario) {
    return this.http.post<any>(this.urlDeleteUsuario, valor , {headers: this.headers})
  }

  login(valor: Usuario) {
    return this.http.post<any>(this.urlLogin, valor , {headers: this.headers})
  }

  usuario() {
    const usuarioJson = sessionStorage.getItem('usuario');
    return usuarioJson !== null ? JSON.parse(usuarioJson) : null;
  }

  salir() {
    sessionStorage.removeItem('usuario');
    sessionStorage.clear();
  }

}
