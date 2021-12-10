import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Permissoes } from './permissoes/permissoes';
import { permissoesBusca } from './permissoes/permissoes-lista/permissoesBusca';

@Injectable({
  providedIn: 'root'
})
export class PermissoesService {

  apiURL: string = environment.apiURLBase + "/api/permissoes"
  constructor(private http : HttpClient) { }

  salvar(permissoes : Permissoes) : Observable<Permissoes>{
    return this.http.post<Permissoes>(this.apiURL,permissoes);
  }

  buscar(nome : string) : Observable<permissoesBusca[]>{
    if(!nome){
      nome = "";
    }
    const httpParams = new HttpParams().set("nome",nome);
    const url = this.apiURL + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }
}
