import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { AlumnosComponent } from '../alumnos/componentes/alumnos/alumnos.component';
import { AlumnoComponent } from '../alumnos/componentes/alumno/alumno.component';
import { CursosComponent } from '../cursos/componentes/cursos/cursos.component';
import { CursoComponent } from '../cursos/componentes/curso/curso.component';
import { InscripcionesComponent } from '../inscripciones/componentes/inscripciones/inscripciones.component';
import { InscripcionComponent } from '../inscripciones/componentes/inscripcion/inscripcion.component';
import { UsuarioAdminGuard } from 'src/app/guardas/usuario-admin.guard';
import { UsuarioLogueadoGuard } from 'src/app/guardas/usuario-logueado.guard';

const routes: Routes = [
  {
    path: '' , component: LoginComponent,   
    children: [
        { path: 'alumnos' ,canActivate: [UsuarioLogueadoGuard], component: AlumnosComponent },  
        { path: 'alumno', canActivate: [UsuarioLogueadoGuard],component: AlumnoComponent },
        { path: 'alumno/:id', canActivate: [UsuarioLogueadoGuard],component: AlumnoComponent },
        { path: 'alumno/:id/:accion',canActivate: [UsuarioLogueadoGuard], component: AlumnoComponent },  
        { path: 'cursos', canActivate: [UsuarioLogueadoGuard],component: CursosComponent },
        { path: 'curso', canActivate: [UsuarioLogueadoGuard],component: CursoComponent },
        { path: 'curso/:id', canActivate: [UsuarioLogueadoGuard], component: CursoComponent },
        { path: 'curso/:id/:accion', canActivate: [UsuarioLogueadoGuard],component: CursoComponent },
        { path: 'inscripciones', canActivate: [UsuarioLogueadoGuard],component: InscripcionesComponent },
        { path: 'inscripcion', canActivate: [UsuarioLogueadoGuard],component: InscripcionComponent },
        { path: 'inscripcion/:id', canActivate: [UsuarioLogueadoGuard],component: InscripcionComponent }, 
        { path: 'inscripcion/:id/:accion', canActivate: [UsuarioLogueadoGuard],component: InscripcionComponent }, 
        { path: 'usuarios', canActivate: [UsuarioLogueadoGuard, UsuarioAdminGuard], component: UsuariosComponent },
        { path: 'usuario', canActivate: [UsuarioLogueadoGuard, UsuarioAdminGuard], component: UsuarioComponent },
        { path: 'usuario/:id', canActivate: [UsuarioLogueadoGuard, UsuarioAdminGuard], component: UsuarioComponent },
        { path: 'usuario/:id/:accion',canActivate: [UsuarioLogueadoGuard, UsuarioAdminGuard], component: UsuarioComponent },
        { path: '**', component: AlumnosComponent },    
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
      CommonModule, 
      RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class AutenticacionRoutingModule {}
