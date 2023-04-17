import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './00 home/home-page/home-page.component';
import { MyImageComponent } from './01 cargamos imágenes/my-image/my-image.component';
import { FatherComponent } from './02 father & son/father/father.component';
import { CardComponent } from './03 card/card/card.component';
import { BotonClickComponent } from './04 contador/boton-click/boton-click.component';
import { ListaComponent } from './05 todolist/lista/lista.component';
import { ColeccionComponent } from './06 colección discos/coleccion/coleccion.component';
import { TodoproComponent } from './07 todo/todopro/todopro.component';
import { PlanetPageComponent } from './08 planet game/planet-page/planet-page.component';
import { TreasurePageComponent } from './09 treasure game/treasure-page/treasure-page.component';
import { ExchangePageComponent } from './10 exchange/exchange-page/exchange-page.component';

const routes: Routes = [

  {
    path: "", component: HomePageComponent
  },
  {
    path: "imagenes", component: MyImageComponent 
  },
  {
    path: "father&son", component: FatherComponent 
  },
  {
    path: "card", component: CardComponent
  },
  {
    path: "contador", component: BotonClickComponent
  },
  {
    path: "toDoList", component: ListaComponent
  },
  {
    path: "discos", component: ColeccionComponent
  },
  {
    path: "toDoPro", component: TodoproComponent
  },
  {
    path: "planet", component: PlanetPageComponent
  },
  {
    path: "treasure", component: TreasurePageComponent
  },
  {
    path: "exchange", component: ExchangePageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
