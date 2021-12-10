import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Software } from './software/software';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {

  constructor(private http: HttpClient) { }

  salvar(software : Software) : Observable<Software>{
    return this.http.post<Software>('http://localhost:8080/api/modulo-software',software);
  }

  getSoftwares() : Observable<Software[]>{
    return this.http.get<Software[]>('http://localhost:8080/api/modulo-software');
  }

  getSoftwareById(id: number) : Observable<Software>{
    return this.http.get<Software>(`http://localhost:8080/api/modulo-software/${id}`);
  }

  atualizar(software : Software) : Observable<any>{
    return this.http.put<Software>(`http://localhost:8080/api/modulo-software/${software.id}`,software);
  }

  deletar(software : Software) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/modulo-software/${software.id}`);
  }
}
