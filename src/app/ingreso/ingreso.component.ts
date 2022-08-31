import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Filtro } from 'src/app/modulos/shared/interfaces/filtro';
import { UsuariosService } from '../modulos/usuarios/servicios/usuarios.service';


@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public usuarioSs: UsuariosService,
    public router: Router
    ) { }

  public filtros: Filtro[] = [];
  public mostrarMensaje: boolean = false

  ingresoForm: FormGroup = this.fb.group({
    user: ['smoreno', [Validators.required]],
    pass: ['abcd1234', [Validators.required]]
  });

  ngOnInit(): void {
 
  }

  onSubmit() {
     this.usuarioSs.login(this.ingresoForm.value)
     .subscribe(res => {
      res.datos? sessionStorage.setItem('usuario', JSON.stringify(res.datos)): this.mostrarMensaje = true
      this.ingresoForm.reset()
     })
  }

}
