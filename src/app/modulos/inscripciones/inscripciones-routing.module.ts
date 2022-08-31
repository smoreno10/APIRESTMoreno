import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionesComponent } from './componentes/inscripciones/inscripciones.component';
import { UsuarioLogueadoGuard } from 'src/app/guardas/usuario-logueado.guard';
import { InscripcionComponent } from './componentes/inscripcion/inscripcion.component';

const routes: Routes = [
  { path: 'inscripciones', canActivate: [UsuarioLogueadoGuard],component: InscripcionesComponent },
  { path: 'inscripcion', canActivate: [UsuarioLogueadoGuard],component: InscripcionComponent },
  { path: 'inscripcion/:id', canActivate: [UsuarioLogueadoGuard],component: InscripcionComponent }, 
  { path: 'inscripcion/:id/:accion', canActivate: [UsuarioLogueadoGuard],component: InscripcionComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
