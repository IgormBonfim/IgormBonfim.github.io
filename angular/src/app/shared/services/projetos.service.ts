import { Injectable } from '@angular/core';
import { Projeto } from 'src/app/shared/models/projeto';

const projetos: Projeto[] = [
  {
    titulo: "BotJoshue",
    descricao: "Um bot para o Discord desenvolvido utilizando JavaScript, Node.js, Discord.js e Youtube API.",
    linkImagem: "assets/imagens-projetos/discord-logo.png",
    rota: "botjoshue"
  },
  {
    titulo: "CRUD Gerenciamento de Funcionários",
    descricao: "Um projeto CRUD desenvolvido com Angular, Java, Spring e MySQl.",
    linkImagem: "assets/imagens-projetos/gerenciamento-funcionarios-logo.png",
    rota: "gerenciamento-funcionarios"
  },
  {
    titulo: "Pokedex",
    descricao: "Projeto de uma Pokedex desenvolvido utilizando Angular e a PokéApi.",
    linkImagem: "assets/imagens-projetos/pokedex-logo.png",
    rota: "pokedex"
  },
  {
    titulo: "Challenge Backend Finanças",
    descricao: "Projeto desenvolvido durante a terceira edição do Challenge backend da Alura. Desenvolvido em C#, Asp.Net e MySQL.",
    linkImagem: "assets/imagens-projetos/challenge-financas-logo.png",
    rota: "challenge-backend-financas"
  },
  {
    titulo: "Quasar E-commerce",
    descricao: "Projeto E-commerce desenvolvido em equipe para o aprendizado. Utilizando Angular para o front-end e C# para o back-end.",
    linkImagem: "assets/imagens-projetos/quasar-logo.png",
    rota: "quasar-ecommerce"
  },
  {
    titulo: "AluraFlix",
    descricao: "Projeto desenvolvido durante a quinta edição do challenge backend da Alura. Desenvolvido utilizando Angular, C#, Asp.Net e MySQL.",
    linkImagem: "assets/imagens-projetos/aluraflix-logo.png",
    rota: "aluraflix"
  },

]

@Injectable({
  providedIn: 'root'
})

export class ProjetosService {

  constructor() {

   }

  public listarProjetos(): Projeto[] {
    return projetos;
  }
}
