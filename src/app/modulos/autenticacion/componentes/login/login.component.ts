import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Filtro } from 'src/app/modulos/shared/interfaces/filtro';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public usuarioSs: UsuariosService,
    public router: Router
    ) { }

  public filtros: Filtro[] = [];

  loginForm: FormGroup = this.fb.group({
    user: [null, [Validators.required]],
    pass: [null, [Validators.required]]
  });

  ngOnInit(): void {
 
  }

  onSubmit() {
     this.usuarioSs.login(this.loginForm.value)
     .subscribe(res => {
      res.datos? sessionStorage.setItem('usuario', JSON.stringify(res.datos)): undefined
      this.loginForm.reset()
     })
  }

}
