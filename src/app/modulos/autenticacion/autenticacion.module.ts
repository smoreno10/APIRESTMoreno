import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { AlumnosModule } from '../alumnos/alumnos.module';
import { CursosModule } from '../cursos/cursos.module';
import { InscripcionesModule } from '../inscripciones/inscripciones.module';
import { MenuComponent } from 'src/app/menu/menu.component';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';

@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    SharedModule,
    AlumnosModule,
    CursosModule,
    InscripcionesModule,
    AutenticacionRoutingModule,
    HttpClientModule
  ],
  exports: [
    UsuariosComponent,
    UsuarioComponent,
    LoginComponent
  ] 
})
export class AutenticacionModule { }
