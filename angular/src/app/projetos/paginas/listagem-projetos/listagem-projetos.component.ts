import { Projeto } from 'src/app/shared/models/projeto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listagem-projetos',
  templateUrl: './listagem-projetos.component.html',
  styleUrls: ['./listagem-projetos.component.scss']
})
export class ListagemProjetosComponent {
  public projetos: Projeto[];

  constructor() {
    this.projetos = [
      {
        titulo: "teste",
        descricao: "descrição do projeto",
        linkImagem: "assets/imagens-projetos/discord-logo.png",
        rota: "botjoshue"
      },
    ]
  }
}
