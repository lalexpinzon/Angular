import { Component, ViewChildren } from "@angular/core";

@Component({
  selector:'prueba',
  template:"<h1>Hola mundo</h1>",
  styles:['h1{backgorund:#000; color:#fff}']
})

export class prueba {
  colores=['rojo','verde','azul'];
}
