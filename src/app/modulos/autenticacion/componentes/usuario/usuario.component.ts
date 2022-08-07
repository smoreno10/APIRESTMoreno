import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Filtro } from 'src/app/modulos/shared/interfaces/filtro';
import { Usuario } from '../../interfaces/usuario';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private usuariosSs: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
    ) { }
  
  public filtros: Filtro[] = [];
  public id:any;
  public accion:any;
  

  usuarioForm: FormGroup = this.fb.group({
    id: [null],
    user: [null, [Validators.required]],
    pass: [null, [Validators.required]],
    admin: [false, [Validators.required]],
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.accion = this.route.snapshot.paramMap.get("accion");
    if (this.id) {
      this.filtros.push(new Filtro('id', this.id))
      this.usuariosSs.getUsuario(this.filtros)
      .subscribe(res => this.setForm(res.datos))    
    }
  }

  setForm(usuario: Usuario) {
    this.usuarioForm.patchValue({
      id: usuario.id,
      user: usuario.user,
      pass: usuario.pass,
      admin: usuario.admin      
    })
  }

  onSubmit() {
    this.usuariosSs.saveUsuario(this.usuarioForm.value)
    .subscribe(c => {
      this.volver() 
    })
  }

  eliminar() {
    this.usuariosSs.deleteUsuario(this.usuarioForm.value)
    .subscribe(c => {
      this.volver()
    })
  }

  volver() {
    this.limpiar()
    this.router.navigateByUrl('usuarios') 
  }

  limpiar() {
    this.usuarioForm.reset()
  }
}
