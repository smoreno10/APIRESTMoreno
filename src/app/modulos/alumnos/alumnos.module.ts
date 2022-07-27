import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    AlumnosComponent,
    AlumnoComponent
  ] 
})
export class AlumnosModule { }
