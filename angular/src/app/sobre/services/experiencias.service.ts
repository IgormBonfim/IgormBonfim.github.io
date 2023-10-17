import { Experiencia } from 'src/app/sobre/models/experiencia';
import { Injectable } from '@angular/core';

const experiencias: Experiencia[] = [
  {
    cargo: "Desenvolvedor Full Stack",
    empresa: "Autoglass",
    imagemEmpresa: "assets/imagens-experiencias/autoglass-logo.jpg",
    dataInicio: new Date("2022-06-20"),
    dataFim: new Date(),
    descricao: "Atuo no desenvolvimento do produto de faturamento da empresa. Utilizando .Net, Angular, Oracle, Também utilizamos outras tecnologias como AWS SQS, Kafka. Utilizando os princípios do DDD (Domain Driven Design), e a Arquitetura Hexagonal (Ports & Adapters). Além disso utilizamos metodologias ágeis, como Scrum e Kanban, para gerenciar o fluxo de trabalho."
  },
  {
    cargo: "Analista de suporte de TI",
    empresa: "Faculdade Pio XII",
    imagemEmpresa: "assets/imagens-experiencias/pioxii-logo.jpg",
    dataInicio: new Date("2022-03-02"),
    dataFim: new Date("2022-06-02"),
    descricao: "Fui responsável pela manutenção dos servidores, redes e toda parte tecnológica da Faculdade Pio XII. Além de dar apoio aos funcionários e alunos."
  }
]

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {

  constructor() { }

  public listarExperiencias(): Array<Experiencia> {
    return experiencias;
  }
}
