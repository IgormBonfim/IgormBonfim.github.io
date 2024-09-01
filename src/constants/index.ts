import { Experiencia } from "../types/experienca";
import { Projeto } from "../types/projeto";
import quasar from '../assets/Images/Quasar.png'
import aluraflix from '../assets/Images/Aluraflix.png'
import picpaychallenge from '../assets/Images/PicPayChallenge.png'
import ChallengeBackendFinancas from '../assets/Images/ChallengeBackendFinancas.png'
import gerenciamentoFuncionarios from '../assets/Images/GerenciamentoFuncionarios.gif'
import pokedex from '../assets/Images/pokedex.gif'
import botJoshue from '../assets/Images/BotJoshue.png'
import { Linguagem } from "../types/Linguagem";

export const LINGUAGENS: Linguagem[] = [
  {
    id: 1,
    linguagem: "ptBR",
    descricao: "Português",
    bandeira: "br"
  },
  {
    id: 2,
    linguagem: "enUS",
    descricao: "English",
    bandeira: "us"
  },
];

export const EXPERIENCIAS: Experiencia[] = [
    {
        ano: "caixa-web.ano",
        cargo: "caixa-web.cargo",
        empresa: "caixa-web.empresa",
        descricao: "caixa-web.descricao",
        tecnologias: ["C#", ".Net", "TypeScript", "Angular", "Oracle", "Kafka"]
    },
    {
        ano: "grc.ano",
        cargo: "grc.cargo",
        empresa: "grc.empresa",
        descricao: "grc.descricao",
        tecnologias: ["C#", ".Net", "TypeScript", "Angular", "MongoDB", "SQS"]
    },
    {
        ano: "aksie.ano",
        cargo: "aksie.cargo",
        empresa: "aksie.empresa",
        descricao: "aksie.descricao",
        tecnologias: ["TypeScript", "Angular", "SASS"]
    }
];

const projetoQuasar: Projeto = {
  titulo: "projetos.quasar.titulo",
  imagem: quasar,
  descricao: "projetos.quasar.descricao",
  tecnologias: ["C#", ".Net", "Angular", "MySQL"],
  repo: "https://github.com/IgormBonfim/quasar-ecommerce"
};

const projetoPicPay: Projeto = {
  titulo: "projetos.PicPayChallenge.titulo",
  imagem: picpaychallenge,
  descricao:"projetos.PicPayChallenge.descricao",
  tecnologias: ["C#", ".Net", "React", "Next.js", "MySQL", "Kafka"],
  repo: "https://github.com/IgormBonfim/PicPayChallenge.Payment"
};

const projetoAluralfix: Projeto = {
  titulo: "projetos.Aluraflix.titulo",
  imagem: aluraflix,
  descricao: "projetos.Aluraflix.descricao",
  tecnologias: ["C#", ".Net", "MySQL", "Angular", "HTML", "CSS"],
  repo: "https://github.com/IgormBonfim/Challenge_Backend_AluraFlix"
};

export const PROJETOS_EM_DESTAQUE: Projeto[] = [
  projetoQuasar,
  projetoPicPay,
  projetoAluralfix
];

export const PROJETOS: Projeto[] = [
  ...PROJETOS_EM_DESTAQUE,
  {
    titulo: "GerenciamentoFuncionarios",
    imagem: gerenciamentoFuncionarios,
    descricao: "Projeto CRUD de gerenciamento de funcionários, desenvolvido utilizando Angular e Spring, com o intuito de aprendizado.",
    tecnologias: ["Java", "Spring", "MySQL", "Angular", "TypeScript"],
    repo: "https://github.com/IgormBonfim/GerenciamentoFuncionarios"
  },
  {
    titulo: "Pokedex",
    imagem: pokedex,
    descricao: "Projeto de uma Pokedex desenvolvido utilizando Angular e a PokéApi.",
    tecnologias: ["Angular", "TypeScript", "Html", "CSS", "RxJs"],
    repo: "https://github.com/IgormBonfim/Angular-Pokedex"
  },
  {
    titulo: "Challenge Backend Finanças",
    imagem: ChallengeBackendFinancas,
    descricao: "Projeto desenvolvido durante a terceira edição do Challenge backend da Alura. Desenvolvido em C#, Asp.Net e MySQL.",
    tecnologias: ["C#", ".Net", "MySQL"],
    repo: "https://github.com/IgormBonfim/Challenge_Backend_Financas"
  },
  {
    titulo: "BotJoshue",
    imagem: botJoshue,
    descricao: "Um bot para o Discord desenvolvido utilizando JavaScript, Node.js, Discord.js e Youtube API.",
    tecnologias: ["Node.Js", "JavaScript", "Discord.js", "YoutubeAPI"],
    repo: "https://github.com/IgormBonfim/BotJoshue"
  },
]