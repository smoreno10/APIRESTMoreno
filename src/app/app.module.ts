import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from './modulos/shared/shared.module';
import { AlumnosModule } from './modulos/alumnos/alumnos.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AlumnosModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
