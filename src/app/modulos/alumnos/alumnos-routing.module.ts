import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioLogueadoGuard } from 'src/app/guardas/usuario-logueado.guard';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';

const routes: Routes = [
      { path: 'alumnos', canActivate: [UsuarioLogueadoGuard], component: AlumnosComponent },
      { path: 'alumno', canActivate: [UsuarioLogueadoGuard], component: AlumnoComponent },
      { path: 'alumno/:id', canActivate: [UsuarioLogueadoGuard], component: AlumnoComponent },
      { path: 'alumno/:id/:accion',canActivate: [UsuarioLogueadoGuard], component: AlumnoComponent },
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AlumnosRoutingModule { }
