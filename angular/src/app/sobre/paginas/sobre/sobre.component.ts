import { Experiencia } from 'src/app/sobre//models/experiencia';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa';
import { PessoaService } from 'src/app/shared/services/pessoa.service';
import { ExperienciasService } from 'src/app/sobre/services/experiencias.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  public pessoa!: Pessoa;
  public experiencias: Experiencia[] = [];

  constructor(
    private pessoaService: PessoaService,
    private experienciasService: ExperienciasService) {

  }

  ngOnInit(): void {
    this.recuperarDados()
    this.recuperarExperiencias();
  }

  recuperarDados(): void {
    this.pessoa = this.pessoaService.recuperarDados();
  }

  recuperarExperiencias(): void {
    this.experienciasService.listarExperiencias().subscribe({
      next: (res: Experiencia[]) => {
        this.experiencias = res;
      }
    });
  }

}
