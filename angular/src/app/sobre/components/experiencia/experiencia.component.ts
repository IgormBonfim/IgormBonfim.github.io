import { Component, Input } from '@angular/core';

import { Experiencia } from 'src/app/sobre/models/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent {

  @Input() experiencia!: Experiencia

  empregoAtual() {

    let hoje = new Date()

    if (this.experiencia.dataFim.getDate() == hoje.getDate()) {
      return true
    }
    return false;
  }
}
