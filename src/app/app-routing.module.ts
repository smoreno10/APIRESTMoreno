import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './modulos/alumnos/componentes/alumno/alumno.component';
import { AlumnosComponent } from './modulos/alumnos/componentes/alumnos/alumnos.component';
import { UsuarioComponent } from './modulos/autenticacion/componentes/usuario/usuario.component';
import { UsuariosComponent } from './modulos/autenticacion/componentes/usuarios/usuarios.component';
import { CursoComponent } from './modulos/cursos/componentes/curso/curso.component';
import { CursosComponent } from './modulos/cursos/componentes/cursos/cursos.component';
import { InscripcionComponent } from './modulos/inscripciones/componentes/inscripcion/inscripcion.component';
import { InscripcionesComponent } from './modulos/inscripciones/componentes/inscripciones/inscripciones.component';


const routes: Routes = [
  { path: '' , component: AlumnosComponent },  
  { path: 'alumnos' , component: AlumnosComponent },  
  { path: 'alumno', component: AlumnoComponent },
  { path: 'alumno/:id', component: AlumnoComponent },
  { path: 'alumno/:id/:accion', component: AlumnoComponent },  
  { path: 'cursos', component: CursosComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'curso/:id', component: CursoComponent },
  { path: 'curso/:id/:accion', component: CursoComponent },
  { path: 'inscripciones', component: InscripcionesComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: 'inscripcion/:id', component: InscripcionComponent }, 
  { path: 'inscripcion/:id/:accion', component: InscripcionComponent }, 
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'usuario/:id', component: UsuarioComponent }, 
  { path: 'usuario/:id/:accion', component: UsuarioComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
