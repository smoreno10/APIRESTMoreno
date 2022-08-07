import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../modulos/autenticacion/servicios/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public usuarioSs: UsuariosService
  ) { }

  ngOnInit(): void {
  }

  salir() {
    this.usuarioSs.salir()
  }

}
