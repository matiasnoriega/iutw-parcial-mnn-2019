import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosService } from './usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, UsuariosComponent, UsuarioComponent, CabeceraComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UsuariosService]
})
export class AppModule { }
