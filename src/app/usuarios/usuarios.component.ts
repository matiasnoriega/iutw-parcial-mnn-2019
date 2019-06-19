import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  cantidad: number;

  usuarios: Usuario[];

  constructor(
    private usuariosService: UsuariosService,
    private location: Location
  ) { }

  ngOnInit() {
    this.traerUsuarios(this.cantidad);
  }

  traerUsuarios(per_page: number): void{
    this.usuariosService.traerUsuarios(per_page).subscribe(usuarios => this.usuarios = usuarios)
  }

  volver(): void{
    this.location.back();
  }

}