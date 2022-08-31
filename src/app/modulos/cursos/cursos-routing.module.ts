import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { CursoComponent } from './componentes/curso/curso.component';
import { UsuarioLogueadoGuard } from 'src/app/guardas/usuario-logueado.guard';

const routes: Routes = [
  { path: 'cursos', canActivate: [UsuarioLogueadoGuard],component: CursosComponent },
  { path: 'curso', canActivate: [UsuarioLogueadoGuard],component: CursoComponent },
  { path: 'curso/:id', canActivate: [UsuarioLogueadoGuard], component: CursoComponent },
  { path: 'curso/:id/:accion', canActivate: [UsuarioLogueadoGuard],component: CursoComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
