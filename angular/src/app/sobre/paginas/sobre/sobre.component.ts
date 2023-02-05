import { Experiencia } from 'src/app/sobre//models/experiencia';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa';
import { PessoaService } from 'src/app/shared/services/pessoa.service';
import { ExperienciasService } from 'src/app/sobre/services/experiencias.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  public pessoa!: Pessoa;
  public experiencias!: Experiencia[];

  constructor(
    private pessoaService: PessoaService,
    private experienciasService: ExperienciasService) {

  }

  ngOnInit(): void {
    this.recuperarDados()
    this.recuperarExperiencias();
  }

  recuperarDados() {
    this.pessoa = this.pessoaService.recuperarDados();
  }

  recuperarExperiencias() {
    this.experiencias = this.experienciasService.listarExperiencias();
  }

}
