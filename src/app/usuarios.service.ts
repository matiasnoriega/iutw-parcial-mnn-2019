import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Usuario } from './usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

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

  private urlUsuarios = 'https://reqres.in/api/users';

  constructor(
    private http: HttpClient
  ) { }

  traerUsuarios(per_page: number): Observable<Usuario[]>{
      return this.http.get<Usuario[]>(this.urlUsuarios + `?per_page=${per_page}`).pipe(
        pluck('data'));      
  }
}