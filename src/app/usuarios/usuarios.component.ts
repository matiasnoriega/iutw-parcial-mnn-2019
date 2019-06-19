import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  usuarios: Usuario[];

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {
  }

  traerUsuarios(): void{
    this.usuariosService.traerUsuarios().subscribe(usuarios => this.usuarios);
  }

}