import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from './usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable(
  {
    providedIn: 'root'
  }
)

export class UsuariosService {

  private url = 'reqres.in/api/users?per_page=10';

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(): Observable<Usuario[]>{
      return this.http.get<Usuario[]>(this.url);
  }

}