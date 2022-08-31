import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { UsuarioAdminGuard } from 'src/app/guardas/usuario-admin.guard';
import { UsuarioLogueadoGuard } from 'src/app/guardas/usuario-logueado.guard';

const routes: Routes = [
    { path: 'usuarios', canActivate: [UsuarioLogueadoGuard, UsuarioAdminGuard], component: UsuariosComponent },
    { path: 'usuario', canActivate: [UsuarioLogueadoGuard, UsuarioAdminGuard], component: UsuarioComponent },
    { path: 'usuario/:id', canActivate: [UsuarioLogueadoGuard, UsuarioAdminGuard], component: UsuarioComponent },
    { path: 'usuario/:id/:accion',canActivate: [UsuarioLogueadoGuard, UsuarioAdminGuard], component: UsuarioComponent },
];

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class UsuariosRoutingModule {}
