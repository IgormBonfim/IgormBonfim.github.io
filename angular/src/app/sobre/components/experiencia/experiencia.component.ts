import { Component, Input } from '@angular/core';

import { Experiencia } from 'src/app/sobre/models/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent {

  @Input() experiencia: Experiencia

  empregoAtual(): boolean {
    let hoje = new Date()

    if(typeof this.experiencia.dataFim != typeof Object) return false

    return this.experiencia.dataFim.getDate() == hoje.getDate();
  }
}
