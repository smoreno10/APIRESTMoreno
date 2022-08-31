import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';

@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    SharedModule,
    UsuariosRoutingModule,
    HttpClientModule
  ],
  exports: [
    UsuariosComponent,
    UsuarioComponent,
  ] 
})
export class UsuariosModule { }


