import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projeto } from 'src/app/shared/models/projeto';

@Injectable({
  providedIn: 'root'
})

export class ProjetosService {

  private urlProjetos = 'assets/json/projetos.json'

  constructor(private http: HttpClient) { }

  public listarProjetos(): Observable<Array<Projeto>> {
    return this.http.get<Array<Projeto>>(this.urlProjetos);
  }
}
