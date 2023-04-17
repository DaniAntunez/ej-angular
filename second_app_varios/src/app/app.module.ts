import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

import { HomePageComponent } from './00 home/home-page/home-page.component';
import { MyImageComponent } from './01 cargamos imágenes/my-image/my-image.component';
import { ImagesComponent } from './01 cargamos imágenes/images/images.component';
import { FatherComponent } from './02 father & son/father/father.component';
import { SonComponent } from './02 father & son/son/son.component';
import { CardComponent } from './03 card/card/card.component';
import { ImageComponent } from './03 card/image/image.component';
import { PriceComponent } from './03 card/price/price.component';
import { TitleComponent } from './03 card/title/title.component';
import { BotonClickComponent } from './04 contador/boton-click/boton-click.component';
import { ListaComponent } from './05 todolist/lista/lista.component';
import { ColeccionComponent } from './06 colección discos/coleccion/coleccion.component';
import { DiscosComponent } from './06 colección discos/discos/discos.component';
import { NewDiscoComponent } from './06 colección discos/new-disco/new-disco.component';
import { TodoproComponent } from './07 todo/todopro/todopro.component';
import { TodoproFormComponent } from './07 todo/todopro-form/todopro-form.component';
import { TodoproListComponent } from './07 todo/todopro-list/todopro-list.component';
import { PlanetPageComponent } from './08 planet game/planet-page/planet-page.component';
import { TreasurePageComponent } from './09 treasure game/treasure-page/treasure-page.component';
import { ExchangePageComponent } from './10 exchange/exchange-page/exchange-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MyImageComponent,
    FatherComponent,
    SonComponent,
    CardComponent,
    BotonClickComponent,
    ListaComponent,
    ColeccionComponent,
    DiscosComponent,
    NewDiscoComponent,
    TodoproComponent,
    TodoproFormComponent,
    TodoproListComponent,
    PlanetPageComponent,
    TreasurePageComponent,
    HomePageComponent,
    ImagesComponent,
    ImageComponent,
    PriceComponent,
    TitleComponent,
    ExchangePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
