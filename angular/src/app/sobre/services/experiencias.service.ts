import { Experiencia } from 'src/app/sobre/models/experiencia';
import { Injectable } from '@angular/core';

const experiencias: Experiencia[] = [
  {
    cargo: "Desenvolvedor Full Stack",
    empresa: "Autoglass",
    imagemEmpresa: "assets/imagens-experiencias/autoglass-logo.jpg",
    dataInicio: new Date("2022-06-20"),
    dataFim: new Date(),
    descricao: "Atuo no desenvolvimento de aplicações com C# para o back-end e Angular para o front-end. Além de utilizar metodologias ágeis como Kanban."
  },
  {
    cargo: "Analista de suporte de TI",
    empresa: "Faculdade Pio XII",
    imagemEmpresa: "assets/imagens-experiencias/pioxii-logo.jpg",
    dataInicio: new Date("2022-03-02"),
    dataFim: new Date("2022-06-02"),
    descricao: "Atuei no mapeamento de problemas, correção de chamados e implementações de melhorias."
  }
]

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {

  constructor() { }

  public listarExperiencias(): Experiencia[] {
    return experiencias;
  }
}
