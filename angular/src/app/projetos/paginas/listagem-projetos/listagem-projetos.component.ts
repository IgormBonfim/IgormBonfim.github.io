import { Projeto } from 'src/app/shared/models/projeto';
import { Component, OnInit } from '@angular/core';
import { ProjetosService } from 'src/app/shared/services/projetos.service';

@Component({
  selector: 'app-listagem-projetos',
  templateUrl: './listagem-projetos.component.html',
  styleUrls: ['./listagem-projetos.component.scss']
})
export class ListagemProjetosComponent implements OnInit {
  public projetos: Projeto[] = [];

  constructor(private projetosSerivce: ProjetosService) { }

  ngOnInit(): void {
    this.listarProjetos();
  }

  listarProjetos() {
    this.projetosSerivce.listarProjetos().subscribe({
      next: (res: Projeto[]) => {
        this.projetos = res;
      }
    });
  }

}
