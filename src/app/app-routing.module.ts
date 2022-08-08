import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modulos/autenticacion/componentes/login/login.component';

const routes: Routes = [
  { path: '', loadChildren:() => import('./modulos/autenticacion/autenticacion.module').then(m => m.AutenticacionModule) },
  { path: 'login', component: LoginComponent } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
