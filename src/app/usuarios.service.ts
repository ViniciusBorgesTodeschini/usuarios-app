import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from './usuarios/usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http : HttpClient) { 

  }

  salvar(usuario : Usuarios) : Observable<Usuarios> {
    return this.http.post<Usuarios>('http://localhost:8080/api/usuarios', usuario);
  }

  getUsuarios() : Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>('http://localhost:8080/api/usuarios')
  }

  getUsuarioById(id:number) : Observable<Usuarios>{
    return this.http.get<Usuarios>(`http://localhost:8080/api/usuarios/${id}`);
  }

  atualizar(usuario: Usuarios): Observable<any>{
    return this.http.put<Usuarios>(`http://localhost:8080/api/usuarios/${usuario.id}`,usuario);
  }  

  deletar(usuario: Usuarios): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/usuarios/${usuario.id}`);
  }
}
