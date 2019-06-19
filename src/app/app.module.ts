import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UsuariosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
