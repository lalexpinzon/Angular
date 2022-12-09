import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { NegocioComponent } from './Components/negocio/negocio.component';
import { InformacionComponent } from './Components/informacion/informacion.component';
import { ComentariosComponent } from './Components/comentarios/comentarios.component';
import { SesionComponent } from './Components/sesion/sesion.component';
import { RegistroComponent } from './Components/registro/registro.component';

const routes: Routes = [
{path: '', component: HomePageComponent},
{path: 'cliente', component: ClienteComponent},
{path: 'negocio', component: NegocioComponent},
{path: 'informacion', component: InformacionComponent},
{path: 'comentarios', component: ComentariosComponent},
{path: 'sesion', component: SesionComponent},
{path: 'registro', component: RegistroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
