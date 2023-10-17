import { Experiencia } from 'src/app/sobre/models/experiencia';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {

  private urlExperiencias = 'assets/json/experiencias.json'

  constructor(private http: HttpClient) { }

  public listarExperiencias(): Observable<Array<Experiencia>> {
    return this.http.get<Array<Experiencia>>(this.urlExperiencias).pipe(
      map(x => x.map(experiencia => new Experiencia(experiencia)))
    );
  }
}
