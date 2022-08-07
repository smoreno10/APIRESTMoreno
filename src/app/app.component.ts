import { Component } from '@angular/core';
import { UsuariosService } from './modulos/autenticacion/servicios/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: ''
})
export class AppComponent {

  constructor(
    public usuarioSs: UsuariosService
    ) { }

  title = 'angular-app';
    
}
