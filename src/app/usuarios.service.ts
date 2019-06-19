import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Usuario } from './usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable(
  {
    providedIn: 'root'
  }
)

export class UsuariosService {

  private urlUsuarios = 'https://reqres.in/api/users?per_page=10';

  constructor(
    private http: HttpClient
  ) { }

  traerUsuarios(): Observable<Usuario[]>{
      return this.http.get<Usuario[]>(this.urlUsuarios).pipe();
  }

}