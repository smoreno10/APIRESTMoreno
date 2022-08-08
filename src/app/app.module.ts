import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacionModule } from './modulos/autenticacion/autenticacion.module';

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutenticacionModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
