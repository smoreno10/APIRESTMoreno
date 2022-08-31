import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'alumnos', loadChildren:() => import('./modulos/alumnos/alumnos.module').then(m => m.AlumnosModule)},
  { path: 'cursos', loadChildren:() => import('./modulos/cursos/cursos.module').then(m => m.CursosModule)},
  { path: 'inscripciones', loadChildren:() => import('./modulos/inscripciones/inscripciones.module').then(m => m.InscripcionesModule)},
  { path: 'usuarios', loadChildren:() => import('./modulos/usuarios/usuarios.module').then(m => m.UsuariosModule)},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
