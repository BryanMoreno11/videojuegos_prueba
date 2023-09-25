import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importación de librerías
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FranquiciaComponent } from './components/franquicia/franquicia.component';
import { HomeComponent } from './components/home/home.component';
import { FranquiciaEditComponent } from './components/franquicia-edit/franquicia-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FranquiciaComponent,
    HomeComponent,
    FranquiciaEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
