import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './modulos/alumnos/componentes/alumno/alumno.component';
import { AlumnosComponent } from './modulos/alumnos/componentes/alumnos/alumnos.component';
import { CursoComponent } from './modulos/cursos/componentes/curso/curso.component';
import { CursosComponent } from './modulos/cursos/componentes/cursos/cursos.component';
import { InscripcionComponent } from './modulos/inscripciones/componentes/inscripcion/inscripcion.component';
import { InscripcionesComponent } from './modulos/inscripciones/componentes/inscripciones/inscripciones.component';


const routes: Routes = [
  { path: '' , component: AlumnosComponent },  
  { path: 'alumnos' , component: AlumnosComponent },  
  { path: 'alumno', component: AlumnoComponent },
  { path: 'alumno/:id', component: AlumnoComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'curso/:id', component: CursoComponent },
  { path: 'inscripciones', component: InscripcionesComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: 'inscripcion/:id', component: InscripcionComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
