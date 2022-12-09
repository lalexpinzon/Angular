import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { NegocioComponent } from './Components/negocio/negocio.component';
import { InformacionComponent } from './Components/informacion/informacion.component';
import { ComentariosComponent } from './Components/comentarios/comentarios.component';
import { SesionComponent } from './Components/sesion/sesion.component';
import { RegistroComponent } from './Components/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    LandingPageComponent,
    ClienteComponent,
    NegocioComponent,
    InformacionComponent,
    ComentariosComponent,
    SesionComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
