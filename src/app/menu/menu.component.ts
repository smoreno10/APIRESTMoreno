import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../modulos/usuarios/servicios/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public usuarioSs: UsuariosService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  salir() {
    this.usuarioSs.salir()
  }

}
