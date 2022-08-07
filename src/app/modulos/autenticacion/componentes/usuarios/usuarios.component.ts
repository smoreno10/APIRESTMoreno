import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  constructor(
    public usuariosSs: UsuariosService,
    public router: Router
  ) { }

  public usuarios: any;
  public columnas: string[] = ['id', 'user', 'pass', 'admin']
  
  ngOnInit(): void {
    this.usuariosSs.getUsuarios()
    .subscribe(data => { 
      this.usuarios = data.datos 
    })
   }

  clickListener(usuario: Usuario) {
    this.router.navigateByUrl(`usuario/${usuario.id}/${usuario.accion}`)
  }
}
