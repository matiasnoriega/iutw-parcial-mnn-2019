import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  titulo = 'IUTW - Parcial 1er Cuatrimestre 2019 - Matías Nicolás Noriega';
  
  constructor() { }

  ngOnInit() {
  }

}