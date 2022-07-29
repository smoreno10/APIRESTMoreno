import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './modulos/alumnos/componentes/alumno/alumno.component';
import { AlumnosComponent } from './modulos/alumnos/componentes/alumnos/alumnos.component';


const routes: Routes = [
  { path: '' , component: AlumnosComponent },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'alumno/:id', component: AlumnoComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
